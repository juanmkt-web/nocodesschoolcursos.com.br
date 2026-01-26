import { ExternalLink, Linkedin, Twitter } from "lucide-react";

const mentors = [
  {
    name: "Ana Costa",
    role: "Especialista Bubble.io",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    description: "10+ apps lançados",
  },
  {
    name: "Bruno Martins",
    role: "Expert Webflow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    description: "Fundador Agência NoCode",
  },
  {
    name: "Carla Ribeiro",
    role: "Automação & Make",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    description: "500+ automações criadas",
  },
  {
    name: "Daniel Souza",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    description: "Ex-Designer VTEX",
  },
  {
    name: "Elena Vieira",
    role: "Especialista Airtable",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    description: "Consultora Fortune 500",
  },
];

const Faculty = () => {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0d0d1f]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 h-10 md:h-16 lg:h-24 rotate-180">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-gradient-to-r from-violet-500/20 to-pink-500/20 backdrop-blur-sm border border-violet-400/30 rounded-full px-4 py-2 mb-4">
              <span className="text-violet-400 font-semibold text-xs md:text-sm">MENTORES ESPECIALISTAS</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              APRENDA COM OS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                MELHORES DO MERCADO
              </span>
            </h2>
            <p className="text-white/70 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
              Nossos mentores são profissionais atuantes que já lançaram dezenas de produtos e ajudaram centenas de alunos a conquistarem suas metas.
            </p>
          </div>

          {/* Grid de Mentores */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="relative mb-3 md:mb-4 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full aspect-square object-cover object-top rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-white font-bold text-sm md:text-base mb-1">
                  {mentor.name}
                </h3>
                <p className="text-violet-400 text-xs md:text-sm mb-1">{mentor.role}</p>
                <p className="text-white/50 text-xs mb-3">{mentor.description}</p>
                <a 
                  href={mentor.linkedin}
                  className="inline-flex items-center gap-1 text-white/60 hover:text-violet-400 text-xs transition-colors"
                >
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1E2842"
          />
        </svg>
      </div>
    </section>
  );
};

export default Faculty;
