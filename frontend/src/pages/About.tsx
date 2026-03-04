import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguageStore } from '@/store'

const About = () => {
  const { language } = useLanguageStore()
  const [activeTab, setActiveTab] = useState<'about' | 'mission' | 'philosophy'>('about')

  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

  const tabs = [
    { id: 'about' as const, label: language === 'ar' ? 'من نحن' : 'About Us', icon: '' },
    { id: 'mission' as const, label: language === 'ar' ? 'الرؤية والرسالة' : 'Mission & Vision', icon: '' },
    { id: 'philosophy' as const, label: language === 'ar' ? 'فلسفتنا' : 'Our Philosophy', icon: '' },
  ]

  const values = [
    { icon: '', title: language === 'ar' ? 'السلامة' : 'Safety' },
    { icon: '', title: language === 'ar' ? 'الاستدامة' : 'Sustainability' },
    { icon: '', title: language === 'ar' ? 'التميز' : 'Excellence' },
    { icon: '', title: language === 'ar' ? 'النزاهة' : 'Integrity' },
  ]

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'من نحن - غيبلي للطاقة' : 'About Us - Ghibli Energy'}</title>
        <meta name="description" content={language === 'ar' ? 'تعرف على غيبلي للطاقة' : 'Learn about Ghibli Energy'} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Oil Field Background Image - Pumpjack */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-neutral-900/90" />
        <div className="absolute inset-0 bg-black/30" />
        <motion.div className="absolute top-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

        <div className="container-custom relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-xl text-secondary-400 text-sm font-semibold rounded-full mb-8 border border-white/10">
              <span className="w-2 h-2 bg-secondary-500 rounded-full me-3" />
              {language === 'ar' ? 'غيبلي للطاقة' : 'Ghibli Energy'}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">{language === 'ar' ? 'من نحن' : 'About Us'}</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">{language === 'ar' ? 'قيادة مستقبل الطاقة بالابتكار والتميز' : 'Leading the future of energy with innovation and excellence'}</p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-20 lg:top-24 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl border-b border-neutral-200/50 dark:border-neutral-700/50">
        <div className="container-custom">
          <div className="flex justify-center overflow-x-auto scrollbar-hide py-2">
            <div className="inline-flex bg-neutral-100/80 dark:bg-neutral-800/80 rounded-full p-1.5">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id ? 'text-white' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>
                  {activeTab === tab.id && <motion.div layoutId="tab-active" className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-lg" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-neutral-50 dark:bg-neutral-950">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {activeTab === 'about' && (
              <motion.div key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <span className="badge-secondary mb-6">{language === 'ar' ? 'مقدمة' : 'Introduction'}</span>
                    <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">{language === 'ar' ? 'من نحن' : 'Who We Are'}</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">{language === 'ar' ? 'غيبلي للطاقة هي شركة رائدة في مجال الطاقة متخصصة في استكشاف وإنتاج وتكرير ونقل النفط والغاز الطبيعي. مع أكثر من 25 عاما من الخبرة في الصناعة نقدم حلول طاقة متكاملة تلبي احتياجات الأسواق المحلية والدولية.' : 'Ghibli Energy is a leading energy company specializing in the exploration, production, refining, and transportation of oil and natural gas. With over 25 years of industry experience, we deliver integrated energy solutions that meet local and international market demands.'}</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">{language === 'ar' ? 'نحن ملتزمون بأعلى معايير السلامة والجودة والمسؤولية البيئية في جميع عملياتنا. فريقنا من الخبراء والمهندسين يعمل بشكل مستمر على تطوير حلول مبتكرة لتلبية احتياجات الطاقة المتزايدة.' : 'We are committed to the highest standards of safety, quality, and environmental responsibility in all our operations. Our team of experts and engineers continuously works on developing innovative solutions to meet growing energy demands.'}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-3xl blur-2xl" />
                    <img src="https://images.unsplash.com/photo-1578356058390-f58c575337a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="" className="relative rounded-3xl shadow-2xl" />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'mission' && (
              <motion.div key="mission" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-6xl mx-auto">
                <div className="rounded-3xl overflow-hidden shadow-xl mb-16">
                  <img src="https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="" className="w-full h-80 object-cover" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="card-glass p-10 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 to-secondary-400" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-2xl group-hover:bg-secondary-500/20 transition-colors" />
                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 relative">{language === 'ar' ? 'رسالتنا' : 'MISSION'}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed relative">{language === 'ar' ? 'نسعى لتوفير حلول طاقة موثوقة ومستدامة تدعم التنمية الاقتصادية مع الحفاظ على البيئة. نلتزم بالتميز التشغيلي وأعلى معايير السلامة في جميع مراحل عملياتنا من الاستكشاف إلى التوزيع.' : 'We strive to provide reliable and sustainable energy solutions that support economic development while preserving the environment. We are committed to operational excellence and the highest safety standards throughout all stages of our operations from exploration to distribution.'}</p>
                  </div>
                  <div className="card-glass p-10 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-400" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors" />
                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 relative">{language === 'ar' ? 'رؤيتنا' : 'VISION'}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed relative">{language === 'ar' ? 'أن نكون الشركة الرائدة في قطاع الطاقة على المستوى الإقليمي والدولي معروفين بالتزامنا بالابتكار والاستدامة والتميز. نطمح لأن نكون شريكا موثوقا في تلبية احتياجات الطاقة العالمية.' : 'To be the leading energy company at regional and international levels, recognized for our commitment to innovation, sustainability, and excellence. We aspire to be a trusted partner in meeting global energy needs.'}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'philosophy' && (
              <motion.div key="philosophy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                  <div className="order-2 lg:order-1">
                    <span className="badge-secondary mb-6">{language === 'ar' ? 'فلسفتنا' : 'Our Philosophy'}</span>
                    <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">{language === 'ar' ? 'ما نؤمن به' : 'What We Believe'}</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">{language === 'ar' ? 'في غيبلي للطاقة نؤمن بأن الطاقة هي محرك التنمية والتقدم. فلسفتنا مبنية على تحقيق التوازن بين الأداء الاقتصادي والمسؤولية البيئية والالتزام الاجتماعي.' : 'At Ghibli Energy, we believe that energy is the driver of development and progress. Our philosophy is built on achieving a balance between economic performance, environmental responsibility, and social commitment.'}</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">{language === 'ar' ? 'نستثمر في أحدث التقنيات والكفاءات البشرية لضمان عمليات آمنة وفعالة. نحن ملتزمون ببناء علاقات طويلة الأمد مع شركائنا وعملائنا والمجتمعات التي نعمل فيها.' : 'We invest in the latest technologies and human capabilities to ensure safe and efficient operations. We are committed to building long-term relationships with our partners, customers, and the communities where we operate.'}</p>
                  </div>
                  <div className="order-1 lg:order-2 relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-3xl blur-2xl" />
                    <img src="https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="" className="relative rounded-3xl shadow-2xl" />
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">{language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {values.map((value, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card-hover p-8 text-center group">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                      <h4 className="text-lg font-bold text-neutral-900 dark:text-white">{value.title}</h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

export default About