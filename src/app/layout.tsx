"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
import { persister } from "./redux/store";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>MediBazar</title>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
        <PersistGate persistor={persister}>
          {children}
        </PersistGate>
        </Provider>

        <script src="./js/jquery-3.3.1.min.js" async></script>
        <script src="./js/jquery-ui.js" async></script>
        <script src="./js/popper.min.js" defer></script>
        <script src="./js/bootstrap.min.js" async></script>
        {/* <script src="./js/owl.carousel.min.js"></script> */}
        {/* <script src="./js/jquery.magnific-popup.min.js"></script> */}
        <script src="./js/aos.js" ></script>
        <script src="./js/main.js"></script>
      </body>
    </html>
  );
}
