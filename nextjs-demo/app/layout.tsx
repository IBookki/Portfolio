import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/Header';
import { Side } from '@/components/Side';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/Contact-form';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Theo Jublou | Full Stack Developer",
  description: "Portfolio of Theo Jublou - Full Stack Developer and Digital Project Manager. Specializing in Next.js, TypeScript, and PHP development.",
  keywords: ["Full Stack Developer", "Next.js", "TypeScript", "PHP", "Project Management", "Web Development"],
  openGraph: {
    title: 'Theo Jublou | Full Stack Developer',
    description: 'Full Stack Developer and Digital Project Manager',
    url: 'https://localhost:3000',
    siteName: 'Theo Jublou Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased gradient-bg`}>
        <Header />
        <Side />
        <main className="p-4 mt-[60px] md:ml-[55vh]">
          {children}
          <ContactForm />
        </main>
        <Footer />
      </body>
    </html>
  );
}
