import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Myst1 Dev",
  description:
    "Transformando ideias complexas em software rápido, escalável e resiliente. Portfólio de engenharia de software de alta performance.",
    keywords: [
      'Myst1 Dev',
      'myst1 dev',
      'Crio sites',
      'quero um site',
      'quero um app',
      'quero um aplicativo',
      'front end',
      'back end',
      'full stack',
      'desenvolvedor',
      'Desenvolvedor',
    ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#08090b] text-[#f1f3f5]">{children}</body>
    </html>
  );
}

