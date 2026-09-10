import React from "react";
import { Terminal, MessageSquare } from "lucide-react";


export default function Footer() {
  return (
    <footer className="border-t border-[#161a26] bg-[#07080b] pt-16 pb-12 text-zinc-400 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#161a26]">
          
          {/* Column 1: Terminal ID & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 font-mono text-sm text-sky-400 font-semibold">
              <span className="text-zinc-500">💻</span>
              <span>jvsoftdev15@gmail.com</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
              Fullstack Engineer &amp; especializado em sistemas distribuídos de alta escala, arquiteturas cloud-native e interfaces minimalistas com engenharia rigorosa.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>LATAM UTC-3 • Production Grade Engineering</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="font-bold text-zinc-300 uppercase tracking-wider mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sobre" className="hover:text-sky-400 transition-colors">
                  Sobre mim
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition-colors">
                  Competências &amp; Skills
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-sky-400 transition-colors">
                  Serviços de Consultoria
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-sky-400 transition-colors">
                  Cases &amp; Projetos
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Channels */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="font-bold text-zinc-300 uppercase tracking-wider mb-4">
              CANAIS OFICIAIS
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/Myst1-Dev1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-zinc-600">$</span> github.com/Myst1-Dev1
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/myst1-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-zinc-600">$</span> linkedin.com/in/myst1-dev
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            © 2026 Myst1 Dev. • MIT License Core
          </div>
          {/* <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400">All systems nominal</span>
            <span className="text-zinc-600">|</span>
            <span>v4.8.2-prod</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
