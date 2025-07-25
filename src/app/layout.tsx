"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from '../components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/rienk-boonstra', label: 'Rienk Boonstra' },
    { href: '/java-kotlin-development', label: 'Java/Kotlin' },
    { href: '/react-nextjs-development', label: 'React/Nextjs' },
    { href: '/artificial-intelligence', label: 'Artificial Intelligence' },
    { href: '/opdrachtgevers', label: 'Opdrachtgevers' },
    { href: '/contact', label: 'Contact' },
];

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
            <ol id="company-logo">
                <li>
                    boonstra
                </li>
                <li>
                    application
                </li>
                <li>
                    development
                </li>
            </ol>
            <Navbar />
            {/*<ul className="menu">*/}
            {/*    <li>*/}
            {/*        <Link href="/rienk-boonstra">Rienk Boonstra</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link href="/java-kotlin-development">Java/Kotlin</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link href="/react-nextjs-development">React/Nextjs</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link href="/artificial-intelligence"*/}
            {/*              className={clsx(*/}
            {/*                  "#F6BE00 hover:#F6BE00 transition",*/}
            {/*                  pathname === "/artificial-intelligence" && "#F6BE00"*/}
            {/*              )}*/}
            {/*        >Artificial Intelligence</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link href="/opdrachtgevers"*/}
            {/*              className={clsx(*/}
            {/*                  '#F6BE00 hover:#F6BE00 transition',*/}
            {/*                  {*/}
            {/*                      '#F6BE00': currentPath === "/opdrachtgevers",*/}
            {/*                      'white': currentPath !== "/opdrachtgevers"*/}
            {/*                  }*/}
            {/*              )}*/}
            {/*        >Opdrachtgevers</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link href="/contact">Contact</Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </header>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
