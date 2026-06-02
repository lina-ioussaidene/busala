import { Link } from 'react-router-dom';
import { BookOpen, Target, Heart, Eye, Compass, Users, TrendingUp, HandHeart, CheckCircle, Award, Home as House, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden items-center flex min-h-[90vh] bg-beige-50">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'url("/background withgm.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="text-center mb-12">
            <h3 className="text-5xl md:text-7xl font-black text-primary-800 mb-4 flex justify-center items-center gap-3">
              <span>مركز</span>
              <span className="text-5xl md:text-7xl font-black">بوصلة</span>
            </h3>
            <h3 className="text-5xl md:text-7xl font-black text-primary-800 mb-2 flex justify-center items-center gap-3">
              <span className="text-3xl md:text-2xl font-semibold">للبناء</span>
              <span className="text-3xl md:text-2xl font-semibold">الرسالي</span>
            </h3>
            <div className="text-center mb-8 max-w-4xl mx-auto">
              <h5 className="text-lg md:text-xl text-gray-600 font-light mb-6">من التأهيل إلى التمكين</h5>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal" style={{fontFamily: 'Noto Sans Arabic, sans-serif'}}>
               مركز معرفي ثقافي تربوي يرافقك في رحلة الوعي والإرشاد لبناء إنسانك وضبط بوصلة حياتك نحو مسار الرسالية وتحقيق الفاعلية الحضارية
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/announcements" className="w-full sm:w-auto px-8 py-4 bg-primary-800 text-white rounded-lg font-bold text-lg hover:bg-primary-900 transition-all shadow-lg shadow-primary-900/10">
              الإعلانات
            </Link>
            <Link to="/books" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 border border-gray-300 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all">
              إصدارات المركز
            </Link>
            <Link to="/programs" className="w-full sm:w-auto px-8 py-4 bg-primary-800 text-white rounded-lg font-bold text-lg hover:bg-primary-900 transition-all shadow-lg shadow-primary-900/10">
              
مشاريعنا   
            </Link>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 border border-gray-300 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all">
              تواصل معنا
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6">من نحن</h2>
            <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
            مركز بوصلة مساحة معرفية ثقافية تربوية تدريبية، تعنى ببناء الإنسان الرسالي
وفق رؤية شمولية ومنهجية عملية متكاملة تجمع بين التأهيل المعرفي والثقافي
والتربوي وتعزيز سبل التمكين الحضاري، لتمتزج المعرفة بالوعي، والتربية
بالفعل، والثقافة بالسلوك ضمن رؤية تنظر إلى الإنسان ككل متكامل بمنهجية علمية
عملية تجديدية تنقل الفرد من التلقي إلى التأثير، ومن الإمكان إلى الإنجاز بتطوير
المهارات وتفعيلها، وبغرس القيم وتحويلها إلى قوة دافعة نحو التمكين الحضاي
لنبني إنسانًا يعرف غايته، ويملك أدواته، ويصنع أثره باتجاه واضح وخطوات
عملية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 bg-beige-100 rounded-xl transition hover:shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-primary-800/10 rounded-lg flex flex-col items-center justify-center text-primary-800 mb-6 hover:scale-105 transition duration-300">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">المعرفة</h3>
              <p className="text-gray-500">تأصيل وبناء معرفي رصين يواكب العصر ويواجه التحديات.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl transition hover:shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-primary-800/10 rounded-lg flex flex-col items-center justify-center text-primary-800 mb-6 hover:scale-105 transition duration-300">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">المهارات</h3>
              <p className="text-gray-500">صقل القدرات وتنمية المهارات لتعزيز الفاعلية والتأثير.</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-beige-100 rounded-xl transition hover:shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-primary-800/10 rounded-lg flex flex-col items-center justify-center text-primary-800 mb-6 hover:scale-105 transition duration-300">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">القيم</h3>
              <p className="text-gray-500">غرس القيم الأصيلة وتزكية النفس لبناء شخصية متوازنة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-24 bg-beige-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6"> الرؤية و الرسالة</h2>
            <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-6">
                <div className="p-4 bg-primary-800/10 rounded-lg text-primary-800">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">الرؤية</h3>
              </div>
              <div className="text-xl text-gray-600 leading-relaxed font-medium">
              <p>
        يقوم مركز بوصلة على قناعة أساسية أن بناء الإنسان لا يتحقق بالمعرفة وحدها،
بل برحلة متكاملة تجمع بين العلم، التدريب، التطبيق، والمرافقة، برحلة تضبط
البوصلة من الداخل، لتصنع إنسانًا:
              </p>
              <ul className="mt-4 space-y-3 text-right">
                <li className="flex items-start">
                  <span className="text-primary-800 ml-2">•</span>
                  <span>واضح الرؤية، لا تائه بين الاتجاهات.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-800 ml-2">•</span>
                  <span>قوي المهارة، قادر على الإنجاز لا الاكتفاء بالنظريات.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-800 ml-2">•</span>
                  <span>فاعلًا في واقعه، يصنع أثرًا حضاريًا إيجابيًا ومستدامًا في مجتمعه.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-800 ml-2">•</span>
                  <span>إنسانًا رساليًا مؤثرًا بوعي وقدرة وفعل حضاري حقيقي.</span>
                </li>
              </ul>
            </div>
            </div>

            <div className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-6">
                <div className="p-4 bg-primary-800/10 rounded-lg text-primary-800">
                  <Mail size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">الرسالة</h3>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
              مركز بوصلة للبناء الرسالي ليس مجرد مركز تكوين، بل هو رحلة تغيير إنساني
متكامل، تنتقل بالمستفيد من مرحلة التوجيه إلى مرحلة التمكين، ومن التعلم إلى
صناعة الأثر بتأهيل وتمكين الأفراد و تحويل المعرفة إلى سلوك والسلوك إلى أثر.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6">قيمنا</h2>
            <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'الرسالية في العمل', desc: 'نؤمن أن كل جهد يجب أن يحمل معنى وأثرًا يتجاوز الفرد إلى المجتمع' },
              { title: 'الأصالة والجودة والاحترافية', desc: 'لا مكان للعشوائية، بل عمل متقن بمعايير عالية' },
              { title: 'الأثر قبل الكم', desc: 'النجاح لا يُقاس بعدد الأنشطة، بل بعمق تأثيرها' },
              { title: 'الالتزام والاستمرارية', desc: 'التغيير الحقيقي لا يُبنى في لحظة، بل عبر مسار ثابت' },
              { title: 'البناء المتوازن للإنسان', desc: 'نهتم بالعقل، والسلوك، والمهارة بشكل متكامل لتصنع فرقًا حقيقيًا ومستدامًا في حياتك.' },
            ].map((val, idx) => (
              <div key={idx} className={`p-6 rounded-xl border hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'bg-beige-100 border-gray-100' : 'bg-white border-gray-200'}`}>
                <div className="w-10 h-10 bg-primary-800/10 rounded flex items-center justify-center mb-4 text-primary-800">
                  <CheckCircle size={20} />
                </div>
                <h3 className="font-bold mb-2 text-gray-900">{val.title}</h3>
                <p className="text-sm text-gray-500 leading-normal">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="target" className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">الفئة المستهدفة</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {[
               { title: 'الشباب الطموح وطلبة العلم', icon: <Users size={32} /> },
               { title: 'رواد الأعمال ', icon: <Target size={32} /> },
               { title: 'المقبلين على الزواج', icon: <House size={32} /> },
               { title: 'أفراد شغوفين بتطوير مهاراتهم والارتقاء بذواتهم', icon: <Award size={32} /> },
               { title: 'الوالدية والولدية لتفعيل الأدوار الوظيفية الرسالية', icon: <Compass size={32} /> },
               { title: 'المدمنين وأشخاص في طريق التعافي يبحثون عن الدعم و بوصلة التغيير', icon: <Eye size={32} /> },
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-beige-100 hover:border-primary-200 transition">
                 <div className="text-primary-700 mb-4">{item.icon}</div>
                 <h4 className="text-lg font-bold text-gray-800 text-center leading-relaxed whitespace-pre-line">{item.title}</h4>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6">تواصل معنا</h2>
            <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600">نسعد باستقبال استفساراتكم وملاحظاتكم</p>
          </div>

          <div className="bg-beige-50 p-8 md:p-12 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <a 
                href="https://wa.me/qr/YZAU7SOYGS3LD1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-primary-800 rounded-xl border border-primary-800 hover:bg-white hover:border-primary-800 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 group-hover:bg-primary-800 transition">
                  <svg className="w-6 h-6 text-primary-800 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-center group-hover:text-primary-800 transition">واتساب</span>
              </a>

              <a 
                href="https://t.me/busalacentre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:bg-primary-800 hover:border-primary-800 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mb-3 group-hover:bg-white transition">
                  <svg className="w-6 h-6 text-white group-hover:text-primary-800 transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <span className="text-primary-800 font-bold text-center group-hover:text-white transition">تيليجرام</span>
              </a>

              <a 
                href="https://www.instagram.com/busala_centre?utm_source=qr&igsh=ZGY2dzQxMWM3Zmhz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-primary-800 rounded-xl border border-primary-800 hover:bg-white hover:border-primary-800 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 group-hover:bg-primary-800 transition">
                  <svg className="w-6 h-6 text-primary-800 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-center group-hover:text-primary-800 transition">انستغرام</span>
              </a>

              <a 
                href="https://www.facebook.com/profile.php?id=61589626752270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:bg-primary-800 hover:border-primary-800 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mb-3 group-hover:bg-white transition">
                  <svg className="w-6 h-6 text-white group-hover:text-primary-800 transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-primary-800 font-bold text-center group-hover:text-white transition">فيسبوك</span>
              </a>

              <a 
                href="https://www.tiktok.com/@manada738?_r=1&_d=dhhe6h4bhbgl4f&sec_uid=MS4wLjABAAAA06Zj3voYvAeBnPDzLS0OifxiG9C8c5N6lpd2TATKCuSxYKXaZDSrVQC0KA3kOVXx&share_author_id=7392972606993286150&sharer_language=ar&source=h5_m&u_code=ef82ld00acmk4f&timestamp=1778964746&user_id=7392972606993286150&sec_user_id=MS4wLjABAAAA06Zj3voYvAeBnPDzLS0OifxiG9C8c5N6lpd2TATKCuSxYKXaZDSrVQC0KA3kOVXx&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7637164212515309329&share_link_id=f5362550-5bb9-4a3e-b4d6-4aad1e6f8c51&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-primary-800 rounded-xl border border-primary-800 hover:bg-white hover:border-primary-800 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 group-hover:bg-primary-800 transition">
                  <svg className="w-6 h-6 text-primary-800 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.56.02 5.12.02 7.68-.03 1.74-.46 3.5-1.35 4.97-1.41 2.31-3.92 3.81-6.58 3.99-1.42.08-2.86-.26-4.08-.97-2.02-1.19-3.44-3.28-3.65-5.62-.05-.42-.06-.85-.06-1.28.01-1.86.9-3.68 2.4-4.86 1.49-1.18 3.48-1.59 5.3-1.14.03 1.46-.06 2.92-.02 4.38-.61-.25-1.29-.32-1.94-.14-.96.25-1.74 1.09-1.89 2.08-.06.41-.04.83.04 1.23.3 1.22 1.54 2.15 2.79 2.01 1.09-.13 2.02-.92 2.18-1.97.04-.23.05-.46.05-.69.01-3.53.01-7.06 0-10.59z"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-center group-hover:text-primary-800 transition">تيك توك</span>
              </a>

              <a 
                href="https://www.youtube.com/@info.busalacentre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:bg-primary-800 hover:border-primary-800 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mb-3 group-hover:bg-white transition">
                  <svg className="w-6 h-6 text-white group-hover:text-primary-800 transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-primary-800 font-bold text-center group-hover:text-white transition">يوتيوب</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
