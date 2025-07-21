import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Mairie de Sidi Bennour",
      position: "Agent administratif",
      period: "2024 - 2025",
      location: "Sidi Bennour, Maroc",
      description: [
        "Traitement des droits de fourrière",
        "Gestion de la plateforme ROKHAS",
        "Amélioration des processus administratifs",
        "Interface avec les citoyens et services municipaux"
      ],
      type: "Gestion publique"
    },
    {
      company: "Cabinet Comptable",
      position: "Assistant comptable",
      period: "2020 - 2023",
      location: "Sidi Bennour, Maroc",
      description: [
        "Facturation et gestion de la paie",
        "Déclarations fiscales et sociales",
        "Tenue de comptabilité",
        "Conseil aux entreprises",
        "Optimisation des processus financiers"
      ],
      type: "Comptabilité"
    },
    {
      company: "TGR (Trésor Public)",
      position: "Agent de recouvrement",
      period: "2020 - 2023",
      location: "Sidi Bennour, Maroc",
      description: [
        "Gestion des recettes fiscales",
        "Recouvrement des créances publiques",
        "Interface avec les contribuables",
        "Reporting et suivi administratif",
        "Respect des procédures réglementaires"
      ],
      type: "Administration fiscale"
    }
  ];

  return (
    <section id="experiences" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Expériences Professionnelles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un parcours riche en gestion financière et administrative, fondement de mon expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="professional-card p-6 animate-fade-in-up">
                    {/* Company and position */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                        <div className="flex items-center text-primary font-semibold mb-2">
                          <Building2 className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Period and location */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Compétences Acquises</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="professional-card p-6">
              <h4 className="font-semibold text-foreground mb-2">Gestion Administrative</h4>
              <p className="text-muted-foreground">Maîtrise des processus administratifs et réglementaires</p>
            </div>
            <div className="professional-card p-6">
              <h4 className="font-semibold text-foreground mb-2">Expertise Financière</h4>
              <p className="text-muted-foreground">Comptabilité, fiscalité et gestion des ressources</p>
            </div>
            <div className="professional-card p-6">
              <h4 className="font-semibold text-foreground mb-2">Relation Client</h4>
              <p className="text-muted-foreground">Interface avec divers publics et accompagnement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;