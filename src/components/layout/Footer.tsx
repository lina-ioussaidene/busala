import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-beige-100/50 border-t border-gray-200 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
             <Link to="/" className="text-2xl font-bold text-primary-800 flex items-center">
              مركز بوصلة
              <span className="font-light text-gray-400 text-lg mr-1 tracking-wide">للبناء الرسالي</span>
            </Link>
            
            <div className="flex space-x-4 space-x-reverse pt-2">
              <a href="https://www.facebook.com/profile.php?id=61589626752270" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary-800 hover:border-primary-800 transition">
                <Facebook size={18} />
              </a>
              
              <a href="https://www.instagram.com/busala_centre?utm_source=qr&igsh=ZGY2dzQxMWM3Zmhz" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary-800 hover:border-primary-800 transition">
                <Instagram size={18} />
              </a>
              
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-base font-bold mb-6 text-gray-900">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><Link to="/#about" className="text-gray-500 hover:text-primary-800 transition font-medium">من نحن</Link></li>
              <li><Link to="/announcements" className="text-gray-500 hover:text-primary-800 transition font-medium">الإعلانات</Link></li>
              <li><Link to="/programs" className="text-gray-500 hover:text-primary-800 transition font-medium">برامجنا</Link></li>
              <li><Link to="/consultations" className="text-gray-500 hover:text-primary-800 transition font-medium">الاستشارات</Link></li>
              <li><Link to="/books" className="text-gray-500 hover:text-primary-800 transition font-medium">الكتب والإصدارات</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-6 text-gray-900">تواصل معنا</h3>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-800 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-500">الجزائر</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-800 flex-shrink-0" size={18} />
                <span className="text-gray-500" dir="ltr">+213 793 11 26 71</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-800 flex-shrink-0" size={18} />
                <span className="text-gray-500">busalacentre.info@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-xs tracking-widest uppercase flex flex-col md:flex-row justify-between items-center gap-4">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} بوصلة للبناء الرسالي</p>
          <div className="flex gap-4">
            <span>المعرفة</span><span>•</span><span>المهارات</span><span>•</span><span>القيم</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
