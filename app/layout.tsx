import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Genova Hover",
  description: "Componente modular de hover para imagenes en Next.js"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
