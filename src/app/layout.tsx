import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://matthicks.design'),
  title: "Matt Hicks | DigitalFish - Creative Design & Development",
  description: "Creative designer and developer specializing in UI/UX design, brand identity, and digital experiences. Available for freelance projects and creative collaboration.",
  keywords: "UI/UX Design, Brand Identity, Freelance Designer, Figma, Web Design, Creative Direction",
  authors: [{ name: "Matt Hicks" }],
  creator: "Matt Hicks",
  openGraph: {
    title: "Matt Hicks | DigitalFish - Creative Design & Development",
    description: "Creative designer and developer specializing in UI/UX design, brand identity, and digital experiences.",
    url: "https://matthicks.design",
    siteName: "Matt Hicks Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matt Hicks - Creative Designer & Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Hicks | DigitalFish - Creative Design & Development",
    description: "Creative designer and developer specializing in UI/UX design, brand identity, and digital experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  );
}
