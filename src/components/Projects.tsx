import { Github, ExternalLink, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Plateforme de Gestion Financière",
      description: "Application web pour la gestion des finances d'entreprise avec dashboard interactif et reporting automatisé.",
      technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
      status: "En développement",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Système de Facturation",
      description: "Solution complète de facturation avec gestion clients, devis et suivi des paiements.",
      technologies: ["React.js", "Node.js", "PostgreSQL"],
      status: "Planifié",
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord pour l'analyse des données business avec visualisations dynamiques.",
      technologies: ["React.js", "Chart.js", "PHP", "MySQL"],
      status: "Concept",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En développement":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "Planifié":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "Concept":
        return "bg-purple-500/10 text-purple-700 border-purple-200";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  return (
    <section id="projets" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Projets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes projets alliant développement web et expertise en gestion d'entreprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="professional-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Démo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Plus className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Projets en cours de développement
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Je travaille actuellement sur plusieurs projets innovants qui combinent mes compétences 
            en développement web et en gestion d'entreprises. N'hésitez pas à me contacter pour 
            découvrir mes dernières réalisations ou discuter de vos besoins.
          </p>
          <Button
            size="lg"
            className="px-8"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Discutons de votre projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;