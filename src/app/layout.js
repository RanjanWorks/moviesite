import Footer from "@/Components/Footer";
import Header from "../Components/Header";

import { Toaster } from "@/components/ui/toaster"

import "./globals.css";
export const metadata = {
  title: "Ranjan's Flix",
  description: "Free Movie Downloads | Download Movies Online | Movie Downloader | Best Movie Download Site",
  openGraph: {
    url: "https://ranjanworks.github.io/flix",
    type: "website",
    title: "Ranjan's Flix",
    description: "Free Movie Downloads | Download Movies Online | Movie Downloader",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/ca286b0e-3ef7-4455-82e0-810bf94cc7ec.png?token=qqfQxZByTepXkN9hRwYm0KNAU7GjQ6fPs8IwP46QRZ4&height=630&width=1200&expires=33267247824",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "ranjanworks.github.io",
    url: "https://ranjanworks.github.io/moviesite",
    title: "Ranjan's Flix",
    description: "Free Movie Downloads | Download Movies Online | Movie Downloader",
    image: "https://opengraph.b-cdn.net/production/images/ca286b0e-3ef7-4455-82e0-810bf94cc7ec.png?token=qqfQxZByTepXkN9hRwYm0KNAU7GjQ6fPs8IwP46QRZ4&height=630&width=1200&expires=33267247824",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 ">
     
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
