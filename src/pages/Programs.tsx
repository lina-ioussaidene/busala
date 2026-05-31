import { BookOpen, Target, Users, Award, HandHeart, X } from 'lucide-react';
import { useState } from 'react';

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const programs = [
    {
      id: 1,
      telegramLink: 'https://t.me/maqraatalnaim',
      title: 'مقرأة نعيم| لحفظ وتفسير وتدبر القرآن الكريم',
      desc: 'مشروع قرآني يعنى بربط الأفراد بكتاب الله تعالى، من خلال منهج متكامل يحقق الواجبات الخمس تجاه القرآن الكريم تجمع بين التلاوة، الحفظ، الفهم، التدبر والعمل. ترى أن علاقتك بالقرآن تبقى أحيانًا محصورة في التلاوة فقط؟ تقرأ..لكن دون أن يتحول ذلك إلى فهم عميق، أو أثر واضح في سلوكك وحياتك؟ نقدم لك من خلال مقرأة نعيم منهج متكامل يؤصل للعلاقة المنهجية بالقرآن الكريم في إطار تفعيل الواجبات الخمسة من التلاوة، الحفظ، الفهم، التدبر، والعمل.',
      image: '/images/naim coran.png',
      details: {
        objectives: [
          'ترسيخ العلاقة مع القرآن الكريم منهجًا وسلوكًا',
          'تمكين المشاركين من الحفظ المتقن',
          'فتح أبواب الفهم والتدبر العميق للقرآن الكريم',
          'بناء شخصية قرآنية رسالية على نور الوحي تحمل القيم القرآنية في وعيها وسلوكها وفاعليتها'
        ],
        components: [
          'مخيمات حفظ دورية',
          'دروس تفسير مبسطة',
          'مجالس تدبر قرآنية',
          'دورات في أحكام التلاوة'
        ]
      }
    },
    {
      id: 2,
      telegramLink: 'https://t.me/+Wc3AUNK0JBEzZTM0',
      title: 'صاحبة الرسالة |لتكوين المرأة الرسالية',
      desc: 'تشعر كثير من النساء أن الأدوار تتزاحم عليهن؟ بين مسؤوليات الأسرة، وتحديات الأبناء ومشاكلهم، ومتطلبات الحياة وطموح الذات يصبح السؤال: كيف يمكن أن أكون مؤثرة صاحبة فعل رسالي دون أن أضيع بين هذه الضغوط؟ مشروع صاحبة الرسالة لتكوين المرأة الرسالية يقدم لك بوصلة تربوية معرفية نفسية سلوكية ثقافية تأسس لمنطلق رسالي يعزز عندك الوعي بأدوارك الوظيفية الوجودية، ويمنحك منهجية متكاملة لمواجهة التحديات الأسرية والحياتية بوعي وتحقيق ثمرة رسالية في بناء أجيال وفي التأثير الإيجابي في مسار مجتمع وأمة.',
      image: '/images/projet femme.png',
      details: {
        objectives: [
          'تعزيز الوعي الذاتي والرسالي لدى المرأة',
          'تطوير المهارات الشخصية والقيادية',
          'تمكين المرأة من أداء دورها الأسري والمجتمعي بوعي واتزان',
          'إعادة صياغة رؤية المرأة لنفسها، لتصبح صاحبة رسالة، وفاعلة في بيتها ومجتمعها، بوعي وقوة وأثر'
        ],
        components: [
          'دورات تربوية متخصصة',
          'ورشات تطوير مهارات',
          'جلسات إرشادية',
        ]
      }
    },
    {
      id: 3,
      telegramLink: 'https://t.me/+LN5PywgabXpiMzJk',
      title: 'منتدى شاب متعافي واعي عامل',
      desc: 'تحاول التوقف أو التغيير، لكنك تعود لنفس الدائرة مرة بعد مرة! تشعر أحيانًا أن الأمور خرجت عن سيطرتك! أنت لست "ضعيف" بل أنت عالق في حلقة تحتاج إلى فهم، دعم، وإعادة بناء من جديد، بعيدًا عن الحكم أو الإدانة. من هنا يأتي منتدى شاب متعافي واعي عامل كفضاء آمن مخصص لك، يساعدك على استعادة توازنك وتعافيك وفاعليتك خطوة بخطوة، وبناء ذات جديدة أكثر وعيًا واستقرارًا قادرة على العطاء والعمل.',
      image: '/images/addictif.png',
      details: {
        objectives: [
          'مساعدتك على التعافي الفكري والسلوكي والخروج من دائرة الإدمان',
          'التكملة في إعادة بناء الثقة وتخطي الهشاشة النفسية',
          'وتبادل الخبرات مع شباب متعافين حققوا الفاعلية)',
          'تفعيل زاوية الإمكان: أنك قادر على التعافي، وإعادة بناء نفسك، والعودة أقوى مما كنت'
        ],
        components: [
          'لقاءات توعوية دورية مع مختصين تساعدك على الفهم والتغيير',
          'ورشات تطوير الذات والمهارات لإعادة بناء الثقة',
          'جلسات نقاش وتبادل تجارب مع أشخاص يمرّون بتجارب مشابهة',
          'برامج دعم نفسي واجتماعي'
        ]
      }
    },
    {
      id: 4,
      telegramLink: 'https://t.me/+lq5ThGnaSZ9jNjc0',
      title: 'برنامج ألفة للتأهيل الأسري',
      desc: 'تشعر أن التحديات الأسرية اليوم لم تعد بسيطة مع سوء الفهم، والضغوط اليومية، واختلاف في أساليب التربية، عدم تكامل أدوار الوالدية، وصعوبة إدارة العلاقة الزوجية، وتفاقم مشاكل الأبناء وتحدياتهم مما يؤثر على استقرار الأسرة وهدوئها؟ المشكل ليس في الأسرة نفسها، بل في غياب التأهيل الذي يمنح أفرادها أدوات الفهم، التواصل، وإدارة الحياة المشتركة بوعي واتزان. من هنا يأتي برنامج ألفة للتأهيل الأسري، وهو برنامج تدريبي شامل يأهل المقبلين على الزواج والمتزوجين لبناء حياة زوجية مستقرة، من خلال تنمية مهارات التواصل وحل الخلافات، وتربية الأبناء والتعامل مع تحدياتهم العمرية وبناء أسرة مستقرة رسالية بأساليب تربوية حضارية.',
      image: '/images/projet olfa.png',
      details: {
        objectives: [ 
         'بناء علاقة زوجية صحية',
          'تعزيز استقرار الأسرة وتقوية الروابط الأسرية',
          'تقديم نموذج عملي في التربية الحضارية للأبناء',
          'تطوير علاقة زوجية صحية قائمة على الفهم والتواصل',
          'تقليل النزاعات الأسرية وتعزيز الوعي بالحقوق والواجبات',
          'التعامل مع التحديات السلوكية لدى الأطفال والمراهقين'
        ],
        components: [
          'دورات تأهيل ما قبل الزواج',
          'ورشات تواصل زوجي',
          'برامج تربية الأبناء',
          'جلسات إرشادية أسرية'
        ]
      }
    },
    {
      id: 5,
  telegramLink: 'https://t.me/VOTRE_LIEN_PROJET5',
  title: 'برنامج البناء الرسالي',
  desc: 'إذا شعرت يوماً أن تفاصيل حياتك خرجت عن السيطرة، فاعلم أنك لست ضعيفاً بل أنت عالق في مكان لا يشبهك. رحلة التغيير الحقيقي تبدأ هنا. نظام الدفعات (Cohorts) في مركز بوصلة هو مسار معرفي، تربوي، وثقافي متكامل، مصمم لانتشالك من الركود ومساعدتك على استعادة السيطرة. عبر برامج ودورات منهجية ومحددة المدة، نرافقك في مراحل مدروسة تنطلق من التأهيل وتصل بك إلى التمكين، لنبني معاً شخصية متوازنة، تعيش وعيها وقيمها، وتمضي في الحياة بأثر عميق يخدم الأمة.',
      image: '/images/projet construction.png',
      details: {
        objectives: [
          'تأهيل وتمكين الإنسان بشكل متكامل',
          'التكملة إعادة بناء الثقة وتخطي الهشاشة النفسية',
          'وتبادل الخبرات مع شباب متعافين حققوا الفاعلية)',
          'ترك أثر إيجابي في المجتمع'
        ],
        components: [
          'برامج تدريبية متخصصة',
          'ورشات تطوير مهارات',
          'دورات تأهيلية',
          'مشاريع تطبيقية'
        ]
      }
    },
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6">مشاريعنا</h1>
          <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           انطلاقاً من رؤيتنا في التأهيل والتمكين ، يقدم مركز بوصلة مجموعة من المشاريع
النوعية التي تستهدف بناء اإلنسان الرسالي من مختلف الجوانب الفكرية ،الإيمانية ،
التربوية، الثقافية، السلوكية، المعرفية 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 flex flex-col group md:max-w-none max-w-full w-80">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className={`w-full h-full transition duration-500 ${
                    program.id === 2 || program.id === 3 || program.id === 5
                      ? 'object-cover group-hover:scale-110' 
                      : 'object-contain group-hover:scale-105'
                  }`}
                  style={program.id === 2 || program.id === 3 || program.id === 5 ? { objectPosition: 'center 30%' } : {}}
                />
                <div className="absolute inset-0 bg-primary-950/20 group-hover:bg-transparent transition duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-sm text-gray-500 leading-normal mb-8 flex-1">{program.desc}</p>
                <button 
                  onClick={() => setSelectedProgram(program)}
                  className="w-full py-3 bg-beige-50 text-primary-800 rounded-lg font-bold hover:bg-primary-800 hover:text-white transition"
                >
                  التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProgram.title}</h3>
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            {selectedProgram.details && (
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">أهداف المشروع:</h4>
                  <ul className="space-y-2">
                    {selectedProgram.details.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-800 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">مكونات البرنامج:</h4>
                  <ul className="space-y-2">
                    {selectedProgram.details.components.map((component, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-800 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a 
                    href={selectedProgram.telegramLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-primary-800 text-white rounded-lg font-bold hover:bg-primary-900 transition text-center block"
                  >
                    انضم إلى قناة تيليجرام
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
