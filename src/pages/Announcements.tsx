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
      title: 'دورة تدبر القرآن الكريم',
      date: '15 مايو 2026',
      time: '19:00',
      location: 'قاعة المؤتمرات - المركز الرئيسي',
      description: 'دورة مكثفة في فهم وتدبر آيات القرآن الكريم مع الشيخ الدكتور أحمد محمد',
      image: 'https://images.unsplash.com/photo-1580015238078-a492e51f9318?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'ورشة تطوير الذات',
      date: '20 مايو 2026',
      time: '14:00',
      location: 'مركز التدريب',
      description: 'ورشة عملية في تطوير المهارات الشخصية والمهنية للشباب',
      image: 'https://images.unsplash.com/photo-1515378791036-bafc5e651e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'مخيم صيفي للشباب',
      date: '1-3 يونيو 2026',
      time: 'مخيم داخلي',
      location: 'مخيمات الجبل',
      description: 'مخيم تربوي وثقافي لتطوير شخصية الشباب وبناء القيم',
      image: ''
    }
  ];

  // Past activities
  const pastActivities = [
    {
      id: 1 ,
      image: '/images/1777578827044.jpg'
    },
    {
      id: 2,
      image: '/images/1777578827055.jpg'
    },
    {
      id: 3,
      image: '/images/1777578827061.jpg'
    },
    {
      id: 4,
      image: '/images/1777578827066.jpg'
    },
    {
      id: 5,
      image: '/images/1777578827070.jpg'
    },
    {
      id: 6, 
      image: '/images/1777578827082.jpg'
    },
    {
      id: 7,
      image: '/images/1777578827088.jpg'
    },
    {
      id: 8,
      image: '/images/1777578827092.jpg'
    },
    {
      id: 9,
      image: '/images/1777578827112.jpg'
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
                <div className="relative h-48">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover"
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
                      <Clock size={16} className="text-primary-800" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary-800" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 py-3 bg-primary-800 text-white rounded-lg font-bold hover:bg-primary-900 transition">
                    التسجيل في النشاط
                  </button>
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
                    className="snap-start shrink-0 min-w-full sm:min-w-[50%] lg:min-w-[33.333%]"
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
