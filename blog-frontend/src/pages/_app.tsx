import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className="mt-[5rem]">
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </div>
  );
}
