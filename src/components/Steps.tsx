import { Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Aprenda as Ferramentas",
    description:
      "Comece do zero com nossos cursos estruturados. Domine Bubble, Webflow, Make e outras ferramentas essenciais.",
  },
  {
    icon: Code2,
    title: "Construa Projetos Reais",
    description: 
      "Aplique o conhecimento criando aplicações, sites e automações. Cada módulo tem projetos práticos.",
  },
  {
    icon: Rocket,
    title: "Lance e Escale",
    description: 
      "Coloque seus projetos no ar e comece a gerar resultados. Monetize suas habilidades como freelancer ou empreendedor.",
  },
];

const Steps = () => {
  return (
    <section id="sobre" className="py-12 md:py-24 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-violet-100 to-pink-100 rounded-full px-4 py-2 mb-4">
            <span className="text-violet-600 font-semibold text-xs md:text-sm">METODOLOGIA PRÁTICA</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
            DO ZERO AO LANÇAMENTO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 font-extrabold">
              EM 3 ETAPAS
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa metodologia foi criada para você sair do zero e lançar seu primeiro produto digital rapidamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative mb-6 md:mb-10">
                <div className="w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0d0d1f] rounded-full flex items-center justify-center mx-auto shadow-2xl relative z-10 group hover:scale-110 transition-transform">
                  <step.icon className="h-12 w-12 md:h-20 md:w-20 text-white" strokeWidth={1.5} />
                  <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-3xl border-4 border-white shadow-xl z-10">
                    {index + 1}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[60%] w-full h-1 bg-gradient-to-r from-violet-600/50 to-pink-600/20 z-0 rounded-full"></div>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">{step.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
