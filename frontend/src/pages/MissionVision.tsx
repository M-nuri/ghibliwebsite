import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useLanguageStore } from '@/store'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

const MissionVision = () => {
  const { language } = useLanguageStore()
  const ArrowIcon = language === 'ar' ? ArrowLeftIcon : ArrowRightIcon

  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

  const mainServices = [
    { icon: '', title: language === 'ar' ? 'المشاريع الكبرى' : 'Epic Projects', description: language === 'ar' ? 'تنفيذ المشاريع الضخمة والمعقدة في قطاع الطاقة بأعلى معايير الجودة والسلامة' : 'Execution of large-scale and complex projects in the energy sector with the highest quality and safety standards', color: 'from-secondary-500 to-secondary-600' },
    { icon: '', title: language === 'ar' ? 'الصيانة' : 'Maintenance', description: language === 'ar' ? 'خدمات صيانة شاملة ووقائية لضمان استمرارية العمليات وتقليل فترات التوقف' : 'Comprehensive and preventive maintenance services to ensure operational continuity and minimize downtime', color: 'from-primary-500 to-primary-600' },
    { icon: '', title: language === 'ar' ? 'اللوجستيات' : 'Logistics', description: language === 'ar' ? 'حلول لوجستية متكاملة لنقل المعدات والمواد بكفاءة وأمان' : 'Integrated logistics solutions for efficient and safe transportation of equipment and materials', color: 'from-secondary-500 to-secondary-600' },
    { icon: '', title: language === 'ar' ? 'التنظيف الصناعي' : 'Industrial Cleaning', description: language === 'ar' ? 'خدمات تنظيف صناعي متخصصة باستخدام أحدث التقنيات والمعدات' : 'Specialized industrial cleaning services using the latest technologies and equipment', color: 'from-primary-500 to-primary-600' }
  ]

  const additionalServices = [
    { icon: '', title: language === 'ar' ? 'المساعدة الفنية' : 'Technical Assistance', description: language === 'ar' ? 'دعم فني متخصص واستشارات هندسية لمساعدتكم في تحقيق أهدافكم التشغيلية' : 'Specialized technical support and engineering consultations to help you achieve your operational goals' },
    { icon: '', title: language === 'ar' ? 'خدمات أخرى' : 'Other Services', description: language === 'ar' ? 'مجموعة متنوعة من الخدمات المتخصصة لتلبية احتياجاتكم الفريدة في قطاع الطاقة' : 'A variety of specialized services to meet your unique needs in the energy sector' }
  ]

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'خدماتنا - غيبلي للطاقة' : 'Our Services - Ghibli Energy'}</title>
        <meta name="description" content={language === 'ar' ? 'خدمات فنية شاملة لقطاع الطاقة' : 'End-to-end technical services for the energy sector'} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-dots opacity-20" />
        <motion.div className="absolute top-20 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-[100px]" animate={{ y: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity }} />

        <div className="container-custom relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-xl text-secondary-400 text-sm font-semibold rounded-full mb-8 border border-white/10">
              <span className="w-2 h-2 bg-secondary-500 rounded-full me-3" />
              {language === 'ar' ? 'غيبلي للطاقة' : 'Ghibli Energy'}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">{language === 'ar' ? 'خدماتنا' : 'Our Services'}</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">{language === 'ar' ? 'خدمات فنية شاملة لقطاع الطاقة في ليبيا' : "End-to-end technical services for Libya's energy sector"}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-80 md:h-96">
        <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-transparent to-neutral-50 dark:to-neutral-950" />
      </section>

      {/* Main Services */}
      <section className="section bg-neutral-50 dark:bg-neutral-950 -mt-20 relative z-10">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <span className="badge-secondary mb-6">{language === 'ar' ? 'ما نقدمه' : 'What We Offer'}</span>
            <h2 className="section-title dark:text-white mb-6">{language === 'ar' ? 'خدماتنا الرئيسية' : 'Our Core Services'}</h2>
            <p className="section-subtitle mx-auto">{language === 'ar' ? 'خدمات فنية شاملة لقطاع الطاقة في ليبيا' : "End-to-end technical services for Libya's energy sector"}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <div className="card-hover p-10 h-full bg-white dark:bg-neutral-900 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.color}`} />
                  <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{service.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-custom">
        <div className="h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
      </div>

      {/* Additional Services */}
      <section className="section bg-white dark:bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container-custom relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <span className="badge-primary mb-6">{language === 'ar' ? 'المزيد من الخدمات' : 'More Services'}</span>
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">{language === 'ar' ? 'خدمات إضافية' : 'Additional Services'}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <div className="card-glass p-10 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-secondary-500 to-primary-500 rounded-full" />
                  <div className="relative ps-4">
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{service.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <motion.div className="absolute top-10 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-400/10 rounded-full blur-[100px]" animate={{ y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity }} />

        <div className="container-custom relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{language === 'ar' ? 'هل تبحث عن شريك موثوق في مجال الطاقة' : 'Looking for a Reliable Energy Partner?'}</h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">{language === 'ar' ? 'تواصل معنا اليوم لمعرفة المزيد عن خدماتنا وكيف يمكننا دعم مشاريعكم' : 'Contact us today to learn more about our services and how we can support your projects'}</p>
            <Link to="/about" className="btn-secondary group">
              {language === 'ar' ? 'تعرف علينا' : 'Learn About Us'}
              <ArrowIcon className="w-5 h-5 ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default MissionVision