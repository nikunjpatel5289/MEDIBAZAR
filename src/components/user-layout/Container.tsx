// "use client"
import "@/app/main.css"
import Navbar from "./Header";
import Footer from "./Footer";

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {/* <div> */}
        <Navbar />
        {children}
        <Footer />
      {/* </div> */}
    </>
  );
};

export default Container;
