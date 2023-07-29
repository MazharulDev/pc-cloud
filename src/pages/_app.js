import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  // const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </SessionProvider>
  );
}
