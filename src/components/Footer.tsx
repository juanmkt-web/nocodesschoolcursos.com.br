import { Sparkles, Mail, MapPin, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { title: "Cursos", href: "#ferramentas" },
    { title: "Comunidade", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Projetos", href: "#" },
    { title: "Certificados", href: "#" },
  ];

  const toolsLinks = [
    { title: "Bubble.io", href: "#" },
    { title: "Webflow", href: "#" },
    { title: "Framer", href: "#" },
    { title: "Make", href: "#" },
    { title: "Airtable", href: "#" },
  ];

  const supportLinks = [
    { title: "Central de Ajuda", href: "#" },
    { title: "Termos de Uso", href: "#" },
    { title: "Política de Privacidade", href: "#" },
    { title: "Reembolso", href: "#" },
  ];

  return (
    <footer className="bg-[#0f0f23] border-t border-white/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                NoCode<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Pro</span>
              </span>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              A plataforma líder em educação NoCode do Brasil. Transformando criadores em empreendedores digitais.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-violet-500/50 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-violet-500/50 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-violet-500/50 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-violet-500/50 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Plataforma</h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-white/60 hover:text-violet-400 text-sm transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Ferramentas</h3>
            <ul className="space-y-3">
              {toolsLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-white/60 hover:text-violet-400 text-sm transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Suporte</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-white/60 hover:text-violet-400 text-sm transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-violet-400" />
                contato@nocodepro.com.br
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-violet-400 mt-0.5" />
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/50 text-sm">
              © {currentYear} NoCodePro. Todos os direitos reservados.
            </p>
            <p className="text-white/50 text-sm">
              Feito com 💜 100% NoCode
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
