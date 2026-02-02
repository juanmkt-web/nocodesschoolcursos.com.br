import { Search, ClipboardCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Escolha sua Pós",
    description:
      "Explore nossas Especializações em: Automação, Desenvolvimento, Design de Produtos. Escolha a que combina com seus objetivos.",
  },
  {
    icon: ClipboardCheck,
    title: "Faça sua Matrícula",
    description:
      "Processo 100% online e simplificado. Em poucos minutos você já está matriculado e pronto para dominar.",
  },
  {
    icon: Rocket,
    title: "Torne-se Especialista",
    description:
      "Estude no seu próprio ritmo, domine o que há de mais recente no mercado e garanta seu Certificado de Pós-Graduação reconhecido pelo MEC.",
  },
];

const Steps = () => {
  return (
    <section id="sobre" className="py-10 md:py-24 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
            SUA CARREIRA NOCODE <span className="gradient-text font-extrabold">EM 3 PASSOS</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            O caminho para se tornar um Especialista começa aqui.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative mb-6 md:mb-8">
                <div className="w-24 h-24 md:w-36 md:h-36 nocode-gradient rounded-full flex items-center justify-center mx-auto shadow-2xl relative z-10 glow-cyan">
                  <step.icon className="h-10 w-10 md:h-16 md:w-16 text-white" strokeWidth={2} />
                  <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl border-3 md:border-4 border-white shadow-xl z-10">
                    {index + 1}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[60%] w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500/20 z-0"></div>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">{step.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
