import { Heart, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Expériences', href: '#experiences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:mohcinebenkhalifa50@gmail.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mohcine-benkhalifa',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/mohcine-benkhalifa',
      label: 'GitHub'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Mohcine Benkhalifa</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Développeur Full-Stack & Gestionnaire d'Entreprises passionné par la création 
              de solutions web innovantes et la gestion efficace des organisations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+212 6 53 72 58 06</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">mohcinebenkhalifa50@gmail.com</span>
              </div>
              <a
                href="/mohcine_benkhalifa_cv.pdf"
                download
                className="inline-flex items-center mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-primary-foreground/80">
                © {currentYear} Mohcine Benkhalifa. Tous droits réservés.
              </span>
            </div>
            <div className="flex items-center text-primary-foreground/60">
              <span>Développé avec</span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span>à Sidi Bennour, Maroc</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;