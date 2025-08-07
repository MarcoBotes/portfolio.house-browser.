import type { Metadata } from "next";
import { Geist, Geist_Mono, Fjalla_One } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fjallaOne = Fjalla_One({
  weight: "400"
});

export const metadata: Metadata = {
  title: "House Browser",
  description: "View your next forever home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen">
      <body
        className={`
          ${fjallaOne.className} 
          antialiased
          w-screen h-screen
          overflow-x-hidden
          bg-zinc-200`}>

        <div className="fixed top-0 right-0 z-600 w-60 h-48 pointer-events-none">
          <div className="absolute top-5 right-[-45px] w-[200px] rotate-45 bg-gradient-to-t from-red-700 to-red-400 text-white text-center font-bold py-1 shadow-lg">
            Property of<br/>Marco Botes
          </div>
        </div>

        <div className="fixed w-screen h-screen -z-5 bg-[url('/assets/splash.jpg')] bg-cover bg-center" />
        <div className="fixed w-screen h-screen -z-4 bg-slate-100/90 mix-blend-overlay pointer-events-none" />

        <header className="fixed z-50 left-0 w-screen flex justify-center">
          <div className="absolute w-full h-full z-5 bg-[url('/assets/splash.jpg')] bg-cover bg-center" />
          <div className="absolute w-full h-full z-6 bg-slate-900/90 mix-blend-darken pointer-events-none" />

          <nav className="w-full min-w-60 z-7 text-white flex font-bold md:px-[5dvw]">
            <Link className="p-4 transition-color transition-scale duration-100 ease-in-out hover:bg-slate-200 hover:shadow hover:text-teal-900" href="/">Home</Link>
            <Link className="p-4 transition-color transition-scale duration-100 ease-in-out hover:bg-slate-200 hover:shadow hover:text-teal-900" href="/property/1">Viewer</Link>
          </nav>
        </header>

        <div 
          className="content 
          h-auto min-h-screen w-[calc(100dvw-1rem)] max-w-240
          mx-4 p-4 pt-20
          absolute left-[calc(50%-16px)] -translate-x-1/2
          space-y-4
          z-10">

          <div className="background hidden -z-1 absolute left-0 top-0 h-full w-full bg-slate-100"></div>

          <div className="content flex flex-col justify-center gap-4">
            {children}
          </div>
          

          <footer className="w-full bg-gray-100 text-gray-600 text-sm py-6 px-4 border-t">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
              <p>
                © {new Date().getFullYear()} House Browsers. All rights reserved.
              </p>
              <p>
                By using this site, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </footer>

        </div>
        
      </body>
    </html>
  );
}
