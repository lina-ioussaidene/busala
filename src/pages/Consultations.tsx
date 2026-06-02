import { MessageCircle, HeartHandshake, BookOpen, Users, Baby } from 'lucide-react';

export default function Consultations() {
  const whatsappNumber = '+213 793 11 26 71'; // Replace with real number
  const message = 'السلام عليكم، أود حجز استشارة';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="pt-28 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6"> الإستشارات</h1>
          <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تشعر أحيانًا أن الضغوط تتراكم من كل جهة؟
مشاكل أسرية، تحديات تربوية، توتر نفسي، أو حتى أسئلة اجتماعية ودينية تحتاج
إلى فهم أعمق… ومعها تشعر أن الحلول ليست واضحة أو سهلة التطبيق؟
يقدّم المركز باقة من الاستشارات المتخصصة بإشراف كفاءات مؤهلة حلولا عملية
تساعدك على تحقيق التوازن والاستقرار في حياتك وتخطي المشاكل والأزمات التي
تعرقل أدوارك الوظيفية، وتشمل هذه الخدمات:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-beige-100 p-6 rounded-xl text-center border border-gray-100 hover:shadow-md transition">
            <div className="w-16 h-16 bg-white mx-auto rounded-lg flex items-center justify-center text-primary-800 mb-4 shadow-sm">
              <HeartHandshake size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">إستشارات أسرية</h3>
          </div>
          <div className="bg-white p-6 rounded-xl text-center border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 bg-primary-800/10 mx-auto rounded-lg flex items-center justify-center text-primary-800 mb-4">
              <Baby size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">إستشارات تربوية</h3>
          </div>
          <div className="bg-beige-100 p-6 rounded-xl text-center border border-gray-100 hover:shadow-md transition">
            <div className="w-16 h-16 bg-white mx-auto rounded-lg flex items-center justify-center text-primary-800 mb-4 shadow-sm">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">إستشارات إجتماعية</h3>
          </div>
          <div className="bg-white p-6 rounded-xl text-center border border-gray-200 shadow-sm hover:shadow-md transition">
             <div className="w-16 h-16 bg-primary-800/10 mx-auto rounded-lg flex items-center justify-center text-primary-800 mb-4">
               <BookOpen size={32} />
             </div>
            <h3 className="text-xl font-bold text-gray-900">إستشارات دينية</h3>
          </div>
        </div>

        
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-10 text-center border border-gray-200 shadow-sm relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-800/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-800/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative z-10">ابدأ رحلتك معنا</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto relative z-10">احجز استشارتك الآن عبر الواتساب وسيقوم فريقنا بالتواصل معك لتحديد الموعد المناسب.</p>
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-800 text-white rounded-lg font-bold text-lg hover:bg-primary-900 transition-all shadow-lg hover:-translate-y-1 relative z-10"
          >
            <MessageCircle size={24} />
            <span>احجز استشارتك عبر واتساب</span>
          </a>
        </div>

      </div>
    </div>
  );
}
