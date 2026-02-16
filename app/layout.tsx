import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistem Pakar Rekomendasi Bahasa Pemrograman - UMC",
  description:
    "Sistem pakar untuk membantu pemula memilih bahasa pemrograman yang tepat",
  icons: {
    icon: "/umc-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          <main className="min-h-screen w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
              {children}
            </div>
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
