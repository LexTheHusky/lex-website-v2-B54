import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Lex The Husky",
  description: "Arctic Aurora Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white font-sans relative overflow-hidden">

        <div className="aurora-bg"></div>

        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
