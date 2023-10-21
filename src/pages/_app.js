import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Layout from "@/components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500" ,"700"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
    </Layout>

  );
}
