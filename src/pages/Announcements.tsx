import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';

export default function Announcements() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Upcoming activities
  const upcomingActivities = [
    {
      id: 1,
      title: 'مخيم أنوار البيان',
      date: 'ينطلق المخيم في 10/07/2026',
     // time: '19:00',
      location: 'إلكترونيا',
      description: 'يسرنا أن نعلن عن افتتاح التسجيل في مخيمنا الصيفي الإلكتروني "أنوار البيان" ، المصمم خصيصًا لمساعدتكن على حفظ وتفسير و تدبر جزء عم من القرآن الكريم بفعالية و بخطة مدروسة ',
      image: '/images/1ere annonce.jpeg',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe0llNUmre36FNLqARLka8DpgoM8m_a4MdiCaw_bo7sj8jz8w/viewform'
    },
   // {
      //id: 2,
      //title: 'ورشة تطوير الذات',
      //date: '20 مايو 2026',
     // time: '14:00',
     // location: 'مركز التدريب',
     // description: 'ورشة عملية في تطوير المهارات الشخصية والمهنية للشباب',
      //image: 'https://images.unsplash.com/photo-1515378791036-bafc5e651e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    //},
    //{
     // id: 3,
     // title: 'مخيم صيفي للشباب',
     // date: '1-3 يونيو 2026',
     // time: 'مخيم داخلي',
     // location: 'مخيمات الجبل',
     // description: 'مخيم تربوي وثقافي لتطوير شخصية الشباب وبناء القيم',
     // image: ''
   // }
  ];

  // Past activities
  const pastActivities = [
    {
      id: 1 ,
      image: '/images/1778874441158.jpg'
    },
    {
      id: 2,
      image: '/images/WhatsApp Image 2026-06-02 at 10.17.09.jpeg'
    },
    {
      id: 3,
      image: '/images/1778874441178.jpg'
    },
    {
      id: 4,
      image: '/images/1778874441189.jpg'
    },
    {
      id: 5,
      image: '/images/1778874441215.jpg'
    },
    {
      id: 6, 
      image: '/images/1778874441224.jpg'
    },
    {
      id: 7,
      image: '/images/1778874441232.jpg'
    },
    {
      id: 8,
      image: '/images/1778874441239.jpg'
    },
    {
      id: 9,
      image: '/images/1778874441246.jpg'
    },
    {
      id: 10,
      image: '/images/1778874441255.jpg'
    },
    {
      id: 11,
      image: '/images/1778874441264.jpg'
    },
    {
      id: 12,
      image: '/images/1778874441272.jpg'
    },
  ];

  const scrollToSlide = (index: number) => {
    const slide = slideRefs.current[index];
    if (sliderRef.current && slide) {
      sliderRef.current.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % pastActivities.length;
    setCurrentSlide(nextIndex);
    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + pastActivities.length) % pastActivities.length;
    setCurrentSlide(prevIndex);
    scrollToSlide(prevIndex);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-800 text-white pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">الإعلانات</h1>
          
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        {/* Upcoming Activities */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6">الأنشطة القادمة</h2>
            <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingActivities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-[450px] bg-gray-50 p-4 border-b border-gray-100 flex items-center justify-center">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="max-w-full max-h-full object-contain drop-shadow-md rounded-md"
                  />
                  <div className="absolute top-4 right-4 bg-primary-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                    قادم
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{activity.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary-800" />
                      <span>{activity.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary-800" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  
                  {activity.registrationLink && (
                    <a 
                      href={activity.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full mt-6 py-3 bg-primary-800 text-white rounded-lg font-bold hover:bg-primary-900 transition cursor-pointer"
                    >
                      التسجيل في النشاط
                    </a>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Activities Slider */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6">أنشطة سابقة</h2>
            <div className="w-24 h-1 bg-primary-300 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
              >
                {pastActivities.map((activity, index) => (
                  <div
                    key={activity.id}
                    ref={(el) => (slideRefs.current[index] = el)}
                    className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <div className="overflow-hidden rounded-xl shadow-lg bg-white h-72">
                      <img
                        src={activity.image}
                        alt="صورة نشاط سابق"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-800 p-3 rounded-full shadow-lg transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-800 p-3 rounded-full shadow-lg transition"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {pastActivities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    scrollToSlide(index);
                  }}
                  className={`w-3 h-3 rounded-full transition ${
                    currentSlide === index ? 'bg-primary-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
