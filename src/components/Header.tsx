import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoFasul from "@/assets/logo-fasul-lp-2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] isolate bg-[hsl(225,50%,8%)]/90 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoFasul} alt="Fasul Educação" className="h-12 md:h-14" />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#cursos" className="text-base font-medium text-white/80 hover:text-cyan-400 transition-colors duration-300">
            Pós-Graduações
          </a>
          <a href="#sobre" className="text-base font-medium text-white/80 hover:text-cyan-400 transition-colors duration-300">
            Como Funciona
          </a>
          <a
            href="#depoimentos"
            className="text-base font-medium text-white/80 hover:text-cyan-400 transition-colors duration-300"
          >
            Alunos
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://www.fasuleducacional.edu.br/posgraduacao/cursos" target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 font-semibold rounded-full text-sm md:text-base px-5 md:px-6 py-2.5 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              COMECE AGORA
            </Button>
          </a>

          {/* Mobile hamburger menu */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 z-[105]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 border-l border-white/10 z-[110] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "hsl(225 50% 8%)" }}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <img src={logoFasul} alt="Fasul Educação" className="h-10" />
          <button className="p-2 text-white" onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
            <X className="h-7 w-7" />
          </button>
        </div>
        <nav className="px-5 py-7 flex flex-col gap-1 bg-[hsl(225,50%,8%)]">
          <a
            href="#cursos"
            className="block text-lg font-medium text-white py-4 border-b border-white/10 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pós-Graduações
          </a>
          <a
            href="#sobre"
            className="block text-lg font-medium text-white py-4 border-b border-white/10 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Como Funciona
          </a>
          <a
            href="#depoimentos"
            className="block text-lg font-medium text-white py-4 border-b border-white/10 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Alunos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
