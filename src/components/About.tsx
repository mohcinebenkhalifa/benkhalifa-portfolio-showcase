import { GraduationCap, Building, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours unique alliant développement web et gestion d'entreprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Mon parcours professionnel
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Passionné par la technologie et la gestion d'entreprises, j'ai développé une expertise 
                unique qui me permet de comprendre les besoins business et de les transformer en solutions 
                techniques performantes.
              </p>
              <p>
                Fort de mes expériences au Trésor Public, en cabinet comptable et à la Mairie de Sidi Bennour, 
                j'ai acquis une solide compréhension des processus organisationnels et financiers que j'applique 
                maintenant dans le développement de solutions web innovantes.
              </p>
              <p>
                Actuellement en formation développement web full-stack, je me spécialise dans les technologies 
                modernes comme React.js et Laravel pour créer des applications web robustes et évolutives.
              </p>
            </div>
          </div>

          {/* Right side - Education & Experience */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {/* Education */}
              <div className="professional-card p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Formation</h4>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/20 pl-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      2023 - 2025
                    </div>
                    <h5 className="font-semibold text-foreground">Développement Web Full-Stack</h5>
                    <p className="text-muted-foreground">ISTA L'air El Jadida</p>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      Diplômé
                    </div>
                    <h5 className="font-semibold text-foreground">Licence en Gestion d'Entreprises</h5>
                    <p className="text-muted-foreground">FSJES El Jadida</p>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      Diplômé
                    </div>
                    <h5 className="font-semibold text-foreground">DUT Sciences Économiques</h5>
                    <p className="text-muted-foreground">FSJES El Jadida</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="professional-card p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Localisation</h4>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Sidi Bennour, Maroc</span><br />
                  Disponible pour missions sur site ou à distance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;