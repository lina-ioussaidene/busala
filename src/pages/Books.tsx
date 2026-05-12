import { ShoppingBag } from 'lucide-react';

export default function Books() {
  const books = [
    {
      id: 1,
      title: 'دليل التاهيل الاسري ',
      desc: 'دليلك العملي لبناء أسرة مستقرة ورسالية.',
      image: 'images/livre famille.png',
    },
    {
      id: 2,
      title: 'دليل التاهيل الحضاري للمراهق ',
      desc: 'مرجعك لتوجيه المراهقين نحو الهوية الرسالية.',
      image: 'images/livre ado.png',
    },
    {
      id: 3,
      title: 'دليل التاهيل الحضاري لمرحله الطفوله',
      desc: 'أدواتك التربوية لمرحلة الطفولة المبكرة.',
      image: 'images/livre enfant.png',
    },
    {
      id: 4,
      title: 'دليل التاهيل الحضاري للمعلمين',
      desc: 'منهجيتك لتأهيل المعلمين الرساليين.',
      image: 'images/livre prof.png',
    },
  ];

  const articles = [
    {
      id: 1,
      title: 'المسألة التربوية وإعداد إنسان الحضارة وفق النموذج الحضاري عند مالك بن نبي',
      desc: 'رؤية في التنظير والتطبيق لإعداد الإنسان الحضاري.',
      pdfUrl: 'articlepdf/المسألة-التربوية-وإعداد-إنسان-الحضارة-وفق-النموذج-الحضاري-عند-مالك-بن-نبي_-رؤية-في-التنظير-والتطبيق (1) (1).pdf'
    },
    {
      id: 2,
      title: 'مداخلة دليلة قيراد',
      desc: 'تحليل معمق لمفاهيم التزكية والتوجيه.',
      pdfUrl: 'articlepdf/مداخلة دليلة قيراد (2).pdf'
    },
    {
      id: 3,
      title: 'واقع التكفل النفسي والتربوي بالطفل المصاب بالإعاقة الذهنية',
      desc: 'دراسة ميدانية حول رعاية الأطفال ذوي الإعاقة.',
      pdfUrl: 'articlepdf/واقع التكفل النفسي والتربوي بالطفل المصاب بالإعاقة الذهنية.pdf'
    },
    {
      id: 4,
      title: 'منظومة الطيب برغوث السننية وفاعليتها في التأصيل لفقه النهضة الحضارية',
      desc: 'الوعي السني كنموذج للنهضة الحضارية المعاصرة.',
      pdfUrl: 'articlepdf/منظومة-الطيب-برغوث-السننية-وفاعليتها-في-التأصيل-لفقه-النهضة-الحضارية-الوعي-السنني-...ational-renaissance.---sunni-consciousness-as-a-modle- - ٢٠٢٦-٠٥-٠٢T٠٨٣٩٢٠.٩٦٩.pdf'
    },
  ];

  const whatsappNumber = '966501234567';

  return (
    <div className="pt-28 pb-24 min-h-screen bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6">مكتبة الإصدارات</h1>
          <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            مجموعة من الكتب والاصدارات التي تساهم في بناء الوعي والمعرفة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => {
            const message = `السلام عليكم، أود شراء كتاب: ${book.title}`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            
            return (
              <div key={book.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group border border-gray-200">
                <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                   <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{book.desc}</p>
                  
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-primary-800 text-white rounded-lg font-bold hover:bg-primary-900 transition shadow-sm"
                  >
                    <ShoppingBag size={20} />
                    <span>شراء عبر واتساب</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Articles Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">المقالات</h2>
            <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{article.desc}</p>
                
                <a 
                  href={article.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg font-bold hover:bg-primary-900 transition text-sm"
                >
                  <ShoppingBag size={16} />
                  تحميل PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
