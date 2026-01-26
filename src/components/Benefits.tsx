import { Layers, Workflow, Rocket, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Conquiste",
    highlight: "Cargos de Liderança",
  },
  {
    icon: Workflow,
    title: "Aumente seu",
    highlight: "Poder Salarial",
  },
  {
    icon: Rocket,
    title: "Expanda seu",
    highlight: "Networking",
  },
  {
    icon: Clock,
    title: "Atualize suas",
    highlight: "Competências",
  },
];

const highlights = ["Nota Máxima MEC", "Aulas Online", "Conclusão Rápida"];

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="benefits-card-tech relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
          <div className="benefits-content relative z-10">
            <div className="benefits-grid">
              {/* Left side - Main Title */}
              <div className="animate-fade-in text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 md:mb-6 leading-tight">
                  O MERCADO É DOS <span className="gradient-text">ESPECIALISTAS</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-lg text-white/80 leading-relaxed mb-3 md:mb-6">
                  Generalistas são facilmente substituídos. Garanta sua estabilidade e altos salários tornando-se a
                  autoridade que as grandes empresas buscam e valorizam.{" "}
                  <strong className="text-cyan-400">diploma reconhecido pelo MEC</strong>.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:grid md:grid-cols-3 md:gap-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Benefits List */}
              <div
                className="space-y-2 md:space-y-5 animate-fade-in"
                style={{
                  animationDelay: "0.2s",
                }}
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 animate-fade-in ml-2 sm:ml-4 md:ml-8 lg:ml-12"
                    style={{
                      animationDelay: `${0.3 + index * 0.1}s`,
                    }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-cyan-500 to-purple-600 glow-cyan">
                      <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm sm:text-base md:text-lg leading-tight">
                        {benefit.title} <strong className="font-bold text-cyan-300">{benefit.highlight}</strong>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-4 md:pt-6 ml-2 sm:ml-4 md:ml-8 lg:ml-12">
                  <a
                    href="https://www.fasuleducacional.edu.br/posgraduacao/cursos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="benefits-button-tech">
                      QUERO SER ESPECIALISTA
                      <ArrowRight className="inline-block ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
