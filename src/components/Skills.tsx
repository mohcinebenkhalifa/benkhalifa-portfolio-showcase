import { Code, Database, Briefcase, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Frontend",
      icon: Monitor,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
      color: "bg-blue-500"
    },
    {
      title: "Développement Backend",
      icon: Code,
      skills: ["Laravel", "PHP", "Python", "API REST"],
      color: "bg-green-500"
    },
    {
      title: "Base de données",
      icon: Database,
      skills: ["MySQL", "Gestion BDD", "Optimisation requêtes"],
      color: "bg-purple-500"
    },
    {
      title: "Gestion d'entreprises",
      icon: Briefcase,
      skills: ["Gestion financière", "Organisation", "MS Office", "Facturation", "Déclarations fiscales"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="competences" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Compétences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un mix unique de compétences techniques et managériales pour des solutions complètes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="professional-card p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 ${category.color} rounded-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge inline-block mx-1 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Technologies & Outils
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "GitHub", "VS Code", "Composer", "npm", "Postman",
              "Linux", "Windows", "Excel avancé", "Gestion de projet"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;