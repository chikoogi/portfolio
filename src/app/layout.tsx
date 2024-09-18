import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chikoogi Portfolio",
  description: "치국이의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <div id={"modal-root"}></div>
      </body>
    </html>
  );
}
