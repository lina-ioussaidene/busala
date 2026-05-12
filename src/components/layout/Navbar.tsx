import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      // Logic handled in links by pushing to /#id
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'الرئيسية', href: '/#hero', isScroll: true },
    { name: 'الإعلانات', href: '/announcements', isScroll: false },
    { name: 'من نحن', href: '/#about', isScroll: true },
    { name: 'الرؤية و الرسالة', href: '/#vision', isScroll: true },
    { name: 'قيمنا', href: '/#values', isScroll: true },
    { name: 'الفئة المستهدفة', href: '/#target', isScroll: true },
    { name: 'تواصل معنا', href: '/#contact', isScroll: true },
    { name: 'مشاريعنا', href: '/programs', isScroll: false },
    { name: 'الاستشارات', href: '/consultations', isScroll: false },
    { name: 'إصدارات المركز', href: '/books', isScroll: false },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logowithoutbg.png" alt="بوصلة للبناء الرسالي" className="h-25 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 space-x-reverse items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-gray-600 hover:text-primary-800 text-sm font-medium transition-colors ${link.name === 'الاستشارات' ? 'ml-6' : ''}`}
                onClick={(e) => {
                  if (link.isScroll && isHomePage) {
                    e.preventDefault();
                    scrollToSection(link.href.split('#')[1]);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-800 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-800 hover:bg-beige-50"
              onClick={(e) => {
                if (link.isScroll && isHomePage) {
                  e.preventDefault();
                  scrollToSection(link.href.split('#')[1]);
                } else {
                  setIsOpen(false);
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
