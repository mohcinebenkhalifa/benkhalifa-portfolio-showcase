import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('apropos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold hero-text mb-6 text-shadow">
            Mohcine Benkhalifa
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl hero-text/90 mb-8 font-light">
            Développeur Full-Stack & Gestionnaire d'Entreprises
          </p>
          
          {/* Description */}
          <p className="text-lg sm:text-xl hero-text/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expert en développement web moderne et gestion d'entreprises, je combine créativité technique 
            et expertise organisationnelle pour créer des solutions digitales performantes et bien structurées.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 px-8 py-3 text-lg font-medium"
            >
              Découvrir mon profil
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-3 text-lg font-medium"
              asChild
            >
              <a href="/mohcine_benkhalifa_cv.pdf" download>
                Télécharger CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:mohcinebenkhalifa50@gmail.com"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/mohcine-benkhalifa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://github.com/mohcine-benkhalifa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;