"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Skills", href: "#skills" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1b1f2b] bg-[#08090b]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-1">
          <div className="flex items-center gap-1.5 font-mono text-sm tracking-tight">
            <span className="text-sky-400 font-bold">&lt;/&gt;</span>
            <span className="font-semibold text-white group-hover:text-sky-300 transition-colors">
              Myst1.dev
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400 text-xs">Fullstack</span>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#141824]/60 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Availability Status & CTA */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          {/* Availability Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#10131b] border border-[#1e2333] text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Disponível para freelance</span>
          </div>

          {/* CTA Button with Avatar */}
          <a
            href="#contato"
            className="hidden group lg:block rounded-full bg-white px-3 py-2 text-xs sm:text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-95 shadow-md shadow-black/20"
          >
            <span>Bora conversar</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1b1f2b] bg-[#090b10] px-4 pt-2 pb-5 space-y-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#10131b] border border-[#1e2333] text-xs font-mono text-zinc-300 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Disponível para freelance</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-[#141824]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
