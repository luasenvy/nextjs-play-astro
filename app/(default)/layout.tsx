import { Inter } from "next/font/google";

import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MadeWithButton from "@/components/layout/MadeWithButton";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
    <body className={`${inter.className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      {"development" === process.env.NODE_ENV && <MadeWithButton />}
    </body>
  );
}
