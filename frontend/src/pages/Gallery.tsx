import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { PlayIcon, XMarkIcon, PhotoIcon, VideoCameraIcon, DocumentIcon } from '@heroicons/react/24/outline'
import { useSettingsStore, useLanguageStore } from '@/store'
import { mediaApi } from '@/lib/api'
import { Media } from '@/types'

const Gallery = () => {
  const { settings } = useSettingsStore()
  const { language } = useLanguageStore()
  const [media, setMedia] = useState<Media[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'image' | 'video' | 'document'>('all')
  const [selectedItem, setSelectedItem] = useState<Media | null>(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchMedia = async () => {
      setLoading(true)
      try {
        const response = await mediaApi.getAll({
          page,
          per_page: 12,
          type: filter === 'all' ? undefined : filter,
        })
        setMedia(response.data.data)
        setTotalPages(response.data.meta.last_page)
      } catch (error) {
        console.error('Error fetching media:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchMedia()
  }, [page, filter])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const filters = [
    { value: 'all', label: language === 'ar' ? 'الكل' : 'All', icon: null },
    { value: 'image', label: language === 'ar' ? 'صور' : 'Images', icon: PhotoIcon },
    { value: 'video', label: language === 'ar' ? 'فيديو' : 'Videos', icon: VideoCameraIcon },
    { value: 'document', label: language === 'ar' ? 'مستندات' : 'Documents', icon: DocumentIcon },
  ] as const

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'video':
        return VideoCameraIcon
      case 'document':
        return DocumentIcon
      default:
        return PhotoIcon
    }
  }

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'معرض الوسائط' : 'Media Gallery'} - {language === 'ar' ? settings.site_name_ar : settings.site_name}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1578356058390-f58c575337a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-neutral-900/90" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {language === 'ar' ? 'معرض الوسائط' : 'Media Gallery'}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'ar' 
                ? 'تصفح مجموعتنا من الصور والفيديوهات والمستندات'
                : 'Browse our collection of images, videos, and documents'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-neutral-50/95 dark:bg-neutral-900/95" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-800" />
        <div className="container-custom relative">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => {
                  setFilter(f.value)
                  setPage(1)
                }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                  filter === f.value
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                }`}
              >
                {f.icon && <f.icon className="w-5 h-5" />}
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1578356058390-f58c575337a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-neutral-100/95 dark:from-neutral-950/95 dark:via-neutral-900/90 dark:to-neutral-950/95" />
        <div className="container-custom relative">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-neutral-200/80 dark:bg-neutral-700/80 backdrop-blur-sm rounded-xl animate-pulse" />
              ))}
            </div>
          ) : media.length > 0 ? (
            <>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {media.map((item) => {
                  const MediaIcon = getMediaIcon(item.type)
                  return (
                    <motion.div
                      key={item.id}
                      variants={fadeInUp}
                      className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      {item.type === 'image' ? (
                        <img
                          src={item.thumbnail_url || item.file_url}
                          alt={(language === 'ar' ? item.title_ar || item.title : item.title) || undefined}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : item.type === 'video' ? (
                        <>
                          <img
                            src={item.thumbnail_url || '/images/video-placeholder.jpg'}
                            alt={(language === 'ar' ? item.title_ar || item.title : item.title) || undefined}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                              <PlayIcon className="w-8 h-8 text-primary-600 translate-x-0.5" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 flex flex-col items-center justify-center p-4">
                          <MediaIcon className="w-16 h-16 text-neutral-400 mb-3" />
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center line-clamp-2">
                            {language === 'ar' ? item.title_ar || item.title : item.title}
                          </p>
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-medium line-clamp-2">
                            {language === 'ar' ? item.title_ar || item.title : item.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12 gap-2">
                  <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="btn-outline px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {language === 'ar' ? 'السابق' : 'Previous'}
                  </button>
                  <span className="flex items-center px-4 text-neutral-600 dark:text-neutral-400">
                    {page} / {totalPages}
                  </span>
                  <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className="btn-outline px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {language === 'ar' ? 'التالي' : 'Next'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <PhotoIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-500 text-lg">
                {language === 'ar' ? 'لا توجد وسائط متاحة حالياً' : 'No media available at the moment'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors z-10"
              onClick={() => setSelectedItem(null)}
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            <motion.div
              className="max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.file_url}
                  alt={(language === 'ar' ? selectedItem.title_ar || selectedItem.title : selectedItem.title) || undefined}
                  className="max-w-full max-h-[80vh] mx-auto rounded-lg"
                />
              ) : selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.file_url}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh] mx-auto rounded-lg"
                />
              ) : (
                <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 text-center">
                  <DocumentIcon className="w-20 h-20 text-neutral-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                    {language === 'ar' ? selectedItem.title_ar || selectedItem.title : selectedItem.title}
                  </h3>
                  <a
                    href={selectedItem.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {language === 'ar' ? 'تحميل المستند' : 'Download Document'}
                  </a>
                </div>
              )}

              {/* Caption */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-lg font-medium">
                  {language === 'ar' ? selectedItem.title_ar || selectedItem.title : selectedItem.title}
                </h3>
                {(selectedItem.description || selectedItem.description_ar) && (
                  <p className="text-white/70 mt-2">
                    {language === 'ar' ? selectedItem.description_ar || selectedItem.description : selectedItem.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gallery
