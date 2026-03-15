import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRightIcon, ArrowLeftIcon, BuildingOffice2Icon, WrenchScrewdriverIcon, TruckIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useLanguageStore } from '@/store'

const Home = () => {
  const { language } = useLanguageStore()
  const ArrowIcon = language === 'ar' ? ArrowLeftIcon : ArrowRightIcon

  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
  const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }
  const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

  const services = [
    { icon: <BuildingOffice2Icon className="w-8 h-8 text-secondary-500" />, title: language === 'ar' ? 'النزاهة والتفتيش' : 'Integrity & Inspection', description: language === 'ar' ? 'حملات سلامة الأصول، ومسح التآكل، ورسم خرائط السماكة، وتحديد نطاق العمل الخاص بالعيوب عبر الخزانات والأوعية وخطوط الأنابيب والشبكات الميدانية.' : 'Asset integrity campaigns, corrosion surveys, thickness mapping, and defect workscoping across tanks, vessels, pipelines, and field networks.' },
    { icon: <WrenchScrewdriverIcon className="w-8 h-8 text-secondary-500" />, title: language === 'ar' ? 'الصيانة والإيقافات' : 'Maintenance & Shutdowns', description: language === 'ar' ? 'صيانة ميكانيكية عند الطلب، وتنفيذ عمليات الصيانة الدورية، وإصلاح الصمامات، ودعم حالات انقطاع الخدمة - مع التحكم في أوامر العمل والإغلاق الموثق.' : 'Call-off mechanical maintenance, turnaround execution, valve overhauls, and outage support - with work-order control and documented close-out.' },
    { icon: <TruckIcon className="w-8 h-8 text-secondary-500" />, title: language === 'ar' ? 'E&1، أنظمة التحكم والسلامة' : 'E&1, Controls & Safety Systems', description: language === 'ar' ? 'تعديلات أنظمة التحكم الموزعة/أنظمة التحكم الإشرافي وجمع البيانات/وحدات التحكم المنطقية القابلة للبرمجة، وأجهزة القياس، وأنظمة الحريق والغاز، ودعم التشغيل، ووثائق الامتثال.' : 'DCS/SCADA/PLC modifications, instrumentation, fire & gas systems,commissioning support, and compliance documentation.' },
    { icon: <SparklesIcon className="w-8 h-8 text-secondary-500" />, title: language === 'ar' ? 'خدمات المشتريات والمواقع' : 'Procurement & Site Services', description: language === 'ar' ? 'مصادر المواد، والخدمات اللوجستية، والتنسيق الجمركي، والمخيمات الجاهزة، والإقامة، وإدارة الغازات الصناعية.' : 'Materials sourcing, logistics, customs coordination, modular camps, accommodation, and industrial gas management.' }
  ]

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'غيبلي للطاقة' : 'Ghibli Energy'} - {language === 'ar' ? 'الرئيسية' : 'Home'}</title>
        <meta name="description" content={language === 'ar' ? 'شركة رائدة في مجال الطاقة' : 'A leading energy company'} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Oil Field Background Image - Pumpjack */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-neutral-900/90" />
        <div className="absolute inset-0 bg-black/30" />
        <motion.div className="absolute top-20 left-10 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[100px]" animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary-400/10 rounded-full blur-[100px]" animate={{ y: [0, -30, 0], scale: [1, 0.9, 1] }} transition={{ duration: 8, repeat: Infinity }} />

        <div className="container-custom relative z-10 pt-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-xl text-secondary-400 text-sm font-semibold rounded-full mb-8 border border-white/10">
                <span className="w-2 h-2 bg-secondary-500 rounded-full me-3 animate-pulse" />
                {language === 'ar' ? 'مصمَّم لتحقيق الإنجاز.' : 'Engineered to Deliver.'}
              </motion.span>
<motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-4 leading-relaxed max-w-xl">
                {language === 'ar' ? 'خدمات النفط والغاز في ليبيا' : 'Libya-Based Oil & Gas Services'}
              </motion.p>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                {language === 'ar' ? 'قيبلي للطاقة' : 'Ghibli Energy'}
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-4 leading-relaxed max-w-xl">
                {language === 'ar' ? 'خدمات متكاملة للمواقع والمرافق في قطاع الطاقة الليبي' : 'Integrated Field & Facility Services Across Libya\'s Energy Sector'}
              </motion.p>

              <motion.p variants={fadeInUp} className="text-lg text-secondary-400/90 mb-10 max-w-lg leading-relaxed">
                {language === 'ar' ? 'ندعم العمليات في حقول التنقيب والإنتاج، ومرافق الإنتاج المبكر، والمحطات، ومصانع التكرير والتصنيع، ونقدم خدمات الصيانة، والسلامة، والإيقافات، والكهرباء والأجهزة، والمشتريات، والبنية التحتية للموقع من خلال واجهة واحدة. يتم التحكم في كل نطاق وتوثيقه وإغلاقه بشكل صحيح.' : 'We support operations across upstream fields, early production facilities, terminals, and downstream plants — delivering maintenance, integrity, shutdowns, E&I, procurement, and site infrastructure under one interface. Every scope is controlled, documented, and closed out properly.'}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-secondary group">
                  {language === 'ar' ? 'من نحن' : 'About Us'}
                  <ArrowIcon className="w-5 h-5 ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
                <Link to="/mission-vision" className="btn-outline-white">
                  {language === 'ar' ? 'خدماتنا' : 'Our Services'}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-3xl blur-2xl" />
                <img src="https://images.unsplash.com/photo-1578356058390-f58c575337a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt={language === 'ar' ? 'منصة نفطية' : 'Offshore Oil Platform'} className="relative rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <motion.div className="w-1.5 h-3 bg-secondary-500 rounded-full" animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="section relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1578356058390-f58c575337a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-neutral-100/95 dark:from-neutral-900/95 dark:via-neutral-900/90 dark:to-neutral-950/95" />
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} transition={{ duration: 0.6 }}>
              <span className="badge-secondary mb-6">{language === 'ar' ? 'من نحن' : 'About Us'}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8 leading-tight">
                {language === 'ar' ? 'تم بناؤه من أجل البنية التحتية للطاقة في ليبيا' : 'Built for Libya\'s Energy Infrastructure'}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-lg leading-relaxed">
                {language === 'ar' ? 'تقدم شركة جيبلي للطاقة خدمات متكاملة للمواقع والمرافق تشمل أصول التنقيب والإنتاج، ومرافق الإنتاج المبكر، والمحطات، ومصانع التكرير والتوزيع. نجمع بين التنفيذ الفني والمشتريات والخدمات اللوجستية والبنية التحتية للموقع، مما يوفر للعملاء جهة اتصال واحدة مسؤولة من مرحلة التجهيز وحتى الإغلاق.' : 'Ghibli Energy delivers integrated field and facility services across upstream assets, early production facilities, terminals, and downstream plants. We combine technical execution with procurement, logistics, and site infrastructure - giving clients a single accountable interface from mobilisation to close-out.'}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mb-10 text-lg leading-relaxed">
                {language === 'ar' ? 'يتم تنفيذ كل نطاق عمل وفقًا لإجراءات الصحة والسلامة والبيئة وضمان الجودة/مراقبة الجودة المعتمدة، مع توثيق الأدلة وتسليم المشروع بشكل سليم. نعمل كمقاول رئيسي أو مقاول فرعي متخصص، حسب ما يناسب المشروع.' : 'Every scope is executed under controlled HSE and QA/QC procedures, with documented evidence and clean handover. We operate as a prime contractor or specialist subcontractor — whichever fits the job.'}
              </p>
              <Link to="/about" className="btn-primary group">
                {language === 'ar' ? 'استكشف الخدمات' : 'Explore Services'}
                <ArrowIcon className="w-5 h-5 ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight} transition={{ duration: 0.6 }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1578356058390-f58c575337a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="" className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl p-6 text-white">
                    <p className="text-4xl font-bold mb-1"></p>
                    <p className="text-white/80 text-sm">{language === 'ar' ? 'هل أنتم مستعدون للتعبئة؟' : 'Ready to Mobilise?'}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1624771002998-4aadfd43e7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/95 via-neutral-100/90 to-white/95 dark:from-neutral-950/95 dark:via-neutral-900/90 dark:to-neutral-950/95" />
        <div className="container-custom relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
            <span className="badge-secondary mb-6">{language === 'ar' ? 'ما نقدمه' : 'What We Offer'}</span>
            <h2 className="section-title dark:text-white mb-6">{language === 'ar' ? 'خدماتنا الرئيسية' : 'Our Core Services'}</h2>
            <p className="section-subtitle mx-auto">{language === 'ar' ? 'خدمات فنية شاملة لقطاع الطاقة في ليبيا' : "End-to-end technical services for Libya's energy sector"}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <div className="card-hover p-8 h-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-100 dark:border-neutral-800">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-100 to-secondary-50 dark:from-secondary-900/30 dark:to-secondary-800/20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1578356058390-f58c575337a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-neutral-900/90" />
        <div className="absolute inset-0 bg-black/20" />
        <motion.div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <div className="container-custom relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{language === 'ar' ? 'اكتشف خدماتنا' : 'Discover Our Services'}</h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">{language === 'ar' ? 'أخبرنا بما تحتاجه وسنعود إليك بنهج منظم وعرض أسعار.' : 'Tell us what you need and we\'ll come back with a structured approach and quotation.'}</p>
            <Link to="/mission-vision" className="btn-secondary group">
              {language === 'ar' ? 'احصل على عرض سعر' : 'Get a Quote'}
              <ArrowIcon className="w-5 h-5 ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home