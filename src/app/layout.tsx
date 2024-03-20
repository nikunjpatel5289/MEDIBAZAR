import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediBazar",
  description: "MediBazar The Pharmecy App",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <script src="./js/jquery-3.3.1.min.js"></script>
        <script src="./js/jquery-ui.js"></script>
        <script src="./js/popper.min.js"></script>
        <script src="./js/bootstrap.min.js"></script>
        {/* <script src="./js/owl.carousel.min.js"></script> */}
        <script src="./js/jquery.magnific-popup.min.js"></script>
        <script src="./js/aos.js"></script>
        <script src="./js/main.js"></script>
      </body>
    </html>
  );
}
