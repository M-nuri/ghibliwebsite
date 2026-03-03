<?php
/**
 * Storage Link Creator for Shared Hosting
 * 
 * This script creates the storage symlink for shared hosting environments
 * where you cannot run `php artisan storage:link` via SSH.
 * 
 * USAGE:
 * 1. Upload this file to your public_SS directory
 * 2. Access it via browser: https://unitedelite.ly/create-storage-link.php
 * 3. Delete this file after the symlink is created!
 * 
 * IMPORTANT: Delete this file immediately after use for security!
 */

// Set error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Define paths
$publicPath = __DIR__; // This is public_SS
$storagePath = __DIR__ . '/../backend/storage/app/public';
$linkPath = __DIR__ . '/storage';

echo "<h2>Storage Link Creator</h2>";
echo "<pre>";

// Check if storage directory exists
if (!is_dir($storagePath)) {
    echo "ERROR: Storage directory does not exist at: $storagePath\n";
    echo "Please make sure the backend/storage/app/public directory exists.\n";
    exit;
}

echo "Storage path: $storagePath\n";
echo "Link path: $linkPath\n\n";

// Check if link already exists
if (file_exists($linkPath)) {
    if (is_link($linkPath)) {
        echo "SUCCESS: Symlink already exists!\n";
        echo "Link target: " . readlink($linkPath) . "\n";
    } else {
        echo "WARNING: A file or directory already exists at $linkPath\n";
        echo "Please remove it manually and run this script again.\n";
    }
} else {
    // Try to create the symlink
    if (symlink($storagePath, $linkPath)) {
        echo "SUCCESS: Symlink created successfully!\n";
        echo "Link: $linkPath -> $storagePath\n";
    } else {
        echo "ERROR: Failed to create symlink.\n";
        echo "This might be because:\n";
        echo "1. Your hosting doesn't support symlinks\n";
        echo "2. You don't have permission to create symlinks\n\n";
        
        echo "ALTERNATIVE SOLUTION:\n";
        echo "Create a .htaccess file in public_SS with this content to redirect storage requests:\n\n";
        echo "Or contact your hosting provider to enable symlinks.\n";
    }
}

// List contents of storage directory
echo "\n\nContents of storage directory:\n";
if (is_dir($storagePath)) {
    $files = scandir($storagePath);
    foreach ($files as $file) {
        if ($file !== '.' && $file !== '..') {
            $fullPath = $storagePath . '/' . $file;
            $type = is_dir($fullPath) ? '[DIR]' : '[FILE]';
            echo "  $type $file\n";
            
            // If it's a directory, list its contents too
            if (is_dir($fullPath)) {
                $subFiles = scandir($fullPath);
                foreach ($subFiles as $subFile) {
                    if ($subFile !== '.' && $subFile !== '..') {
                        echo "       - $subFile\n";
                    }
                }
            }
        }
    }
}

echo "</pre>";

echo "<p style='color:red;font-weight:bold;'>⚠️ IMPORTANT: Delete this file (create-storage-link.php) immediately after use for security!</p>";
