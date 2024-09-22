import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarik | Ethiopia's History",
  description: "Tarik - An interactive, bilingual platform delving into Ethiopia's rich history centered around the 'Fetha Negest'. Explore the Ethiopian Empire's eras, engage with AI-driven learning tools, and embark on a journey through Ethiopia's timeless heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
