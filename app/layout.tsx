import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Parvez Shaik | Software Developer Portfolio",
  description:
    "Portfolio for Parvez Shaik, a Software Developer focused on full-stack web applications, backend APIs, SQL databases, cloud deployments, testing, and AI retrieval systems.",
  metadataBase: new URL("https://parvezshaik.me"),
  openGraph: {
    title: "Parvez Shaik | Software Developer Portfolio",
    description:
      "Full-stack, backend, cloud, and AI retrieval portfolio for Parvez Shaik.",
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
