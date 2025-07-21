import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'competences', label: 'Compétences' },
    { id: 'experiences', label: 'Expériences' },
    { id: 'projets', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
            >
              Mohcine Benkhalifa
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/mohcine_benkhalifa_cv.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-all duration-200 font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg mt-2 shadow-soft">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary transition-all duration-200 rounded-md"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/mohcine_benkhalifa_cv.pdf"
                download
                className="flex items-center w-full px-3 py-2 text-primary-foreground bg-primary hover:bg-primary-hover transition-all duration-200 rounded-md"
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;