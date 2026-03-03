<?php
/**
 * Storage File Server for Shared Hosting
 * 
 * This script serves files from the Laravel storage directory
 * when symlinks are not available on shared hosting.
 * 
 * Place this in public_SS/ and update .htaccess to route storage requests here.
 */

// Prevent direct access to this script without a file parameter
if (!isset($_GET['file']) || empty($_GET['file'])) {
    http_response_code(400);
    exit('Bad Request');
}

// Get the requested file path
$requestedFile = $_GET['file'];

// Security: Sanitize the path to prevent directory traversal
$requestedFile = str_replace(['..', '\\'], ['', '/'], $requestedFile);
$requestedFile = ltrim($requestedFile, '/');

// Build the full path to the storage file
$storagePath = __DIR__ . '/../backend/storage/app/public/' . $requestedFile;

// Resolve the real path and verify it's within the storage directory
$realPath = realpath($storagePath);
$storageBase = realpath(__DIR__ . '/../backend/storage/app/public');

// Security check: Ensure the file is within the storage directory
if ($realPath === false || $storageBase === false || strpos($realPath, $storageBase) !== 0) {
    http_response_code(404);
    exit('File not found');
}

// Check if file exists
if (!file_exists($realPath) || !is_file($realPath)) {
    http_response_code(404);
    exit('File not found');
}

// Get file info
$fileInfo = pathinfo($realPath);
$extension = strtolower($fileInfo['extension'] ?? '');

// Define allowed extensions and their MIME types
$mimeTypes = [
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'png' => 'image/png',
    'gif' => 'image/gif',
    'webp' => 'image/webp',
    'svg' => 'image/svg+xml',
    'pdf' => 'application/pdf',
    'mp4' => 'video/mp4',
    'webm' => 'video/webm',
    'mp3' => 'audio/mpeg',
    'wav' => 'audio/wav',
];

// Check if extension is allowed
if (!isset($mimeTypes[$extension])) {
    http_response_code(403);
    exit('File type not allowed');
}

// Get file size and modification time
$fileSize = filesize($realPath);
$lastModified = filemtime($realPath);
$etag = md5($realPath . $lastModified);

// Handle caching headers
header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $lastModified) . ' GMT');
header('ETag: "' . $etag . '"');
header('Cache-Control: public, max-age=31536000'); // 1 year cache

// Check if client has cached version
if (isset($_SERVER['HTTP_IF_NONE_MATCH']) && trim($_SERVER['HTTP_IF_NONE_MATCH'], '"') === $etag) {
    http_response_code(304);
    exit;
}

if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) >= $lastModified) {
    http_response_code(304);
    exit;
}

// Set content headers
header('Content-Type: ' . $mimeTypes[$extension]);
header('Content-Length: ' . $fileSize);
header('Accept-Ranges: bytes');

// Handle range requests for large files (video streaming)
if (isset($_SERVER['HTTP_RANGE'])) {
    $range = $_SERVER['HTTP_RANGE'];
    if (preg_match('/bytes=(\d+)-(\d*)/', $range, $matches)) {
        $start = intval($matches[1]);
        $end = $matches[2] !== '' ? intval($matches[2]) : $fileSize - 1;
        
        if ($start > $end || $start >= $fileSize) {
            http_response_code(416);
            header('Content-Range: bytes */' . $fileSize);
            exit;
        }
        
        $length = $end - $start + 1;
        
        http_response_code(206);
        header('Content-Range: bytes ' . $start . '-' . $end . '/' . $fileSize);
        header('Content-Length: ' . $length);
        
        $fp = fopen($realPath, 'rb');
        fseek($fp, $start);
        echo fread($fp, $length);
        fclose($fp);
        exit;
    }
}

// Output the file
readfile($realPath);
exit;
