import {
  GraduationCap,
  Monitor,
  Clock,
  Layers,
  Workflow,
  Globe,
  Smartphone,
  Palette,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "MBA em Desenvolvimento NoCode",
    description: "Domine Bubble, Webflow, Airtable e outras ferramentas para criar aplicações completas sem código.",
    modality: "EAD",
    hours: "420 HORAS",
    duration: "12 MESES",
    price: "R$ 189,00",
    url: "https://www.fasuleducacional.edu.br/posgraduacao/cursos",
    icon: Layers,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Automação e Integração de Processos",
    description: "Aprenda a automatizar fluxos de trabalho com Make, Zapier, n8n e conectar sistemas empresariais.",
    modality: "EAD",
    hours: "360 HORAS",
    duration: "10 MESES",
    price: "R$ 169,00",
    url: "https://www.fasuleducacional.edu.br/posgraduacao/cursos",
    icon: Workflow,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Design de Produtos Digitais",
    description: "Crie interfaces incríveis com Figma, prototipe com Framer e publique sites profissionais com Webflow.",
    modality: "EAD",
    hours: "360 HORAS",
    duration: "10 MESES",
    price: "R$ 169,00",
    url: "https://www.fasuleducacional.edu.br/posgraduacao/cursos",
    icon: Palette,
    gradient: "from-pink-500 to-orange-500",
  },
];

const careerAreas = [
  { icon: Layers, title: "Desenvolvedor NoCode", description: "Crie apps completos sem programar" },
  { icon: Smartphone, title: "Product Builder", description: "Lance MVPs em semanas, não meses" },
  { icon: Workflow, title: "Especialista em Automação", description: "Conecte e automatize sistemas" },
  { icon: Zap, title: "Growth Hacker", description: "Escale negócios com ferramentas ágeis" },
  { icon: Palette, title: "UI/UX NoCode", description: "Design e desenvolvimento integrados" },
  { icon: Globe, title: "Consultor Digital", description: "Transforme empresas com NoCode" },
];

const Courses = () => {
  return (
    <section id="cursos" className="pb-12 md:pb-24 dark-section relative">
      <div className="absolute top-0 left-0 right-0 h-6 md:h-16 lg:h-20 rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-10 sm:pt-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 text-white animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4">
            NOSSAS <span className="gradient-text">PÓS-GRADUAÇÕES</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Especialize-se nas ferramentas mais poderosas do mercado NoCode e acelere sua carreira na era digital.
          </p>
        </div>

        {/* Course Cards */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-20">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${course.gradient}`} />
                
                <div className="p-5 md:p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <course.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Info */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Monitor className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs text-white/70">{course.modality}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs text-white/70">{course.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs text-white/70">{course.duration}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-2xl md:text-3xl font-bold text-white">{course.price}</span>
                    <span className="text-white/50 text-sm">/mês</span>
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 text-white font-bold rounded-full py-5 transition-all`}
                    asChild
                  >
                    <a href={course.url} target="_blank" rel="noopener noreferrer">
                      SAIBA MAIS <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Areas */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-10">
            ÁREAS DE <span className="gradient-text">ATUAÇÃO</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {careerAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center hover:bg-white/[0.06] transition-all duration-300 border border-white/5 hover:border-cyan-500/20"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <area.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-white font-bold text-xs sm:text-sm mb-1">{area.title}</h4>
                <p className="text-white/50 text-[10px] sm:text-xs">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-6 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="hsl(225, 50%, 8%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Courses;
