import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f23]/95 backdrop-blur-md border-b border-violet-500/20 shadow-lg">
      <div className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-bold text-white">
            NoCode<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Pro</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#ferramentas" className="text-base font-medium text-white/80 hover:text-violet-400 transition-all duration-300">
            Ferramentas
          </a>
          <a href="#sobre" className="text-base font-medium text-white/80 hover:text-cyan-400 transition-all duration-300">
            Como Funciona
          </a>
          <a href="#depoimentos" className="text-base font-medium text-white/80 hover:text-pink-400 transition-all duration-300">
            Casos de Sucesso
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className="bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:from-violet-500 hover:to-pink-500 font-semibold rounded-full text-sm md:text-base px-4 md:px-6 py-2.5"
          >
            COMEÇAR GRÁTIS
          </Button>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)} />}

      {/* Mobile menu sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-[#0f0f23] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-violet-500/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">NoCodePro</span>
          </div>
          <button className="p-2 text-white" onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
            <X className="h-7 w-7" />
          </button>
        </div>
        <nav className="px-5 py-7 flex flex-col gap-3">
          <a
            href="#ferramentas"
            className="text-lg font-medium text-white py-3.5 border-b border-violet-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Ferramentas
          </a>
          <a
            href="#sobre"
            className="text-lg font-medium text-white py-3.5 border-b border-violet-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Como Funciona
          </a>
          <a
            href="#depoimentos"
            className="text-lg font-medium text-white py-3.5 border-b border-violet-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Casos de Sucesso
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
