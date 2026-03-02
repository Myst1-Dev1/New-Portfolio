import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import whiteLogo from '../../assets/images/white-logo.png';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-gray-400 py-4 mt-10 border-t border-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">

                    {/* Lado Esquerdo: Logo e Bio */}
                    <div className="max-w-xs space-y-6">
                        <img className="w-40 grayscale brightness-200" src={whiteLogo} alt="Logo Myst1 Dev" />
                        <p className="text-sm leading-relaxed">
                            Desenvolvedor Full Stack focado em criar experiências digitais de alto impacto com performance e elegância.
                        </p>

                        {/* Redes Sociais */}
                        <div className="flex gap-4">
                            {[
                                { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/myst1-dev/" },
                                { icon: <FaGithub />, url: "https://github.com/Myst1-Dev1" },
                                { icon: <FaInstagram />, url: "https://www.instagram.com/jv1555_dev/" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 text-gray-400 hover:bg-cyan-600 hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links de Navegação */}
                    <div className="grid grid-cols-2 gap-10 md:gap-20">
                        <div className="space-y-4">
                            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Navegação</h4>
                            <nav className="flex flex-col gap-3">
                                <a href="#home" className="no-underline text-gray-400 hover:text-cyan-500 transition-colors text-sm">Início</a>
                                <a href="#about" className="no-underline text-gray-400 hover:text-cyan-500 transition-colors text-sm">Sobre</a>
                                <a href="#services" className="no-underline text-gray-400 hover:text-cyan-500 transition-colors text-sm">Serviços</a>
                            </nav>
                        </div>
                        <div className="space-y-4 pt-8 md:pt-0">
                            <nav className="flex flex-col gap-3 md:mt-8">
                                <a href="#projects" className="no-underline text-gray-400 hover:text-cyan-500 transition-colors text-sm">Portfolio</a>
                                <a href="#contact" className="no-underline text-gray-400 hover:text-cyan-500 transition-colors text-sm">Contato</a>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Linha Final: Copyright */}
                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest">
                    <p>© {currentYear} — feito com ❤️ por <span className="text-cyan-500">Myst1 Dev</span></p>
                </div>
            </div>
        </footer>
    );
}