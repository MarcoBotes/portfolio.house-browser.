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
          bg-slate-600
          `}>

        <div 
          className="content 
          h-auto w-[calc(100dvw-1rem)] max-w-240
          mx-4 p-4
          absolute left-[calc(50%-16px)] -translate-x-1/2
          space-y-4
          z-10">

          <div className="background -z-1 absolute left-0 top-0 h-full w-full bg-slate-100"></div>

          <header className="w-full flex justify-center">
            <nav className="w-5/6 min-w-60 bg-slate-400/50 flex rounded-xl font-bold">
              <Link className="p-4 rounded-2xl transition-color transition-scale hover:scale-115 duration-100 ease-in-out hover:bg-slate-400/90 hover:shadow hover:text-teal-200" href="/">Home</Link>
              <Link className="p-4 rounded-2xl transition-color transition-scale hover:scale-115 duration-100 ease-in-out hover:bg-slate-400/90 hover:shadow hover:text-teal-200" href="/property/1">Viewer</Link>
            </nav>
          </header>

          <div className="content flex flex-col justify-center">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
