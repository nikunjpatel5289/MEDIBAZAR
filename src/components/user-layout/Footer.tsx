"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="block-7">
                <h3 className="footer-heading mb-4">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  quae reiciendis distinctio voluptates sed dolorum excepturi
                  iure eaque, aut unde.
                </p>
              </div>
            </div>
            <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
              <h3 className="footer-heading mb-4">Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="#">Contect</Link>
                </li>
                <li>
                  <a href="#">Diet &amp; Nutrition</a>
                </li>
                <li>
                  <a href="#">Tea &amp; Coffee</a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                  <li className="address">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </li>
                  <li className="phone">
                    <a href="tel://23923929210">+2 392 3929 210</a>
                  </li>
                  <li className="email">emailaddress@domain.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                Copyright &copy;
                {/* <script>document.write(new Date().getFullYear());</script>  */}
                All
                rights reserved | This template is made with
                <i className="icon-heart" aria-hidden="true"></i> by
                <Link
                  href="/"
                  target="_blank"
                  className="text-primary"
                >
                  MediBazar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <footer className="bg-white dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                MediBazar
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              MediBazar™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;
