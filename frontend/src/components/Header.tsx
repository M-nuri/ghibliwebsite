import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useThemeStore, useLanguageStore } from '@/store'

const getAssetUrl = (path: string) => {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`
}

const navigation = [
  { name: 'Home', nameAr: 'الرئيسية', href: '/' },
  { name: 'About', nameAr: 'من نحن', href: '/about' },
  { name: 'Services', nameAr: 'خدماتنا', href: '/mission-vision' },
  { name: 'News', nameAr: 'الأخبار', href: '/news' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useThemeStore()
  const { language, toggleLanguage } = useLanguageStore()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsMobileMenuOpen(false) }, [location])

  const isHomePage = location.pathname === '/'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || !isHomePage ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl shadow-lg shadow-neutral-900/5 border-b border-neutral-200/50 dark:border-neutral-700/50' : 'bg-transparent'}`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center group">
            <motion.img src={getAssetUrl('logo.png')} alt="Ghibli Energy" className="h-12 lg:h-14 w-auto" whileHover={{ scale: 1.05 }} />
          </Link>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-xl rounded-full p-1.5">
              {navigation.map((item) => (
                <NavLink key={item.href} to={item.href} className={({ isActive }) => `relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${isActive ? 'text-white' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>
                  {({ isActive }) => (
                    <>
                      {isActive && <motion.div layoutId="navbar-active" className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-lg shadow-primary-500/30" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />}
                      <span className="relative z-10">{language === 'ar' ? item.nameAr : item.name}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <motion.button onClick={toggleTheme} className={`p-3 rounded-2xl transition-all duration-300 ${isScrolled || !isHomePage ? 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800' : 'text-white/80 hover:text-white hover:bg-white/10'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Toggle theme">
              <motion.div initial={false} animate={{ rotate: theme === 'dark' ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </motion.div>
            </motion.button>

            <motion.button onClick={toggleLanguage} className={`px-4 py-2 rounded-2xl transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse ${isScrolled || !isHomePage ? 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800' : 'text-white/80 hover:text-white hover:bg-white/10'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Toggle language">
              <GlobeAltIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">{language === 'ar' ? 'EN' : 'عربي'}</span>
            </motion.button>

            <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-3 rounded-2xl transition-all duration-300 ${isScrolled || !isHomePage ? 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800' : 'text-white/80 hover:text-white hover:bg-white/10'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Toggle menu">
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><XMarkIcon className="w-6 h-6" /></motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Bars3Icon className="w-6 h-6" /></motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="lg:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border-t border-neutral-200/50 dark:border-neutral-700/50">
            <div className="container-custom py-6 space-y-2">
              {navigation.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <NavLink to={item.href} className={({ isActive }) => `block px-5 py-4 text-base font-medium rounded-2xl transition-all duration-300 ${isActive ? 'text-white bg-gradient-to-r from-primary-600 to-primary-500 shadow-lg shadow-primary-500/20' : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}>
                    {language === 'ar' ? item.nameAr : item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header