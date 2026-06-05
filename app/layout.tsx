import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Parvez Shaik | SDE, SRE & Cloud Engineer",
  description:
    "Portfolio for Parvez Shaik, a software engineer focused on backend systems, cloud reliability, DevOps automation, and AI retrieval infrastructure.",
  metadataBase: new URL("https://parvez-portfolio.vercel.app"),
  openGraph: {
    title: "Parvez Shaik | SDE, SRE & Cloud Engineer",
    description:
      "Production-minded engineer building reliable cloud deployments, backend services, CI/CD systems, and AI retrieval infrastructure.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var storedTheme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : (prefersDark ? 'dark' : 'light');
                document.documentElement.dataset.theme = theme;
              } catch (_) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
