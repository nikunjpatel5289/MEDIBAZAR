"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

export default function Header() {
  const route = usePathname();
  const [logIn, setLogIn] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const ISSERVER = typeof window === "undefined";

  useEffect(() => {
    const isData = localStorage.length > 0;

    if (isData) {
      setLogIn(!logIn);
    }
  }, []);

  const openSearch = () => {
    setSearchActive((prev) => !prev);
  };

  return (
    <div className="site-navbar py-2">
      <div className={`search-wrap ${searchActive && "active"}`}>
        <div className="container">
          <a className="search-close js-search-close">
            <span onClick={openSearch} className="icon-close2"></span>
          </a>
          <form action="#" method="post">
            <input
              type="text"
              className="form-control"
              placeholder="Search keyword and hit enter..."
            />
          </form>
        </div>
      </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <Link href="/" className="js-logo-clone">
                MediBazar
              </Link>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav
              className="site-navigation text-right text-md-center"
              role="navigation"
            >
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className={route === "/" ? "active" : ""}>
                  <Link href="/">Home</Link>
                </li>
                <li className={route === "/products" ? "active" : ""}>
                  <Link href="/products">Store</Link>
                </li>
                {/* <li className="has-children">
                  <a href="#">Dropdown</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Supplements</a>
                    </li>
                    <li className="has-children">
                      <a href="#">Vitamins</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Supplements</a>
                        </li>
                        <li>
                          <a href="#">Vitamins</a>
                        </li>
                        <li>
                          <a href="#">Diet &amp; Nutrition</a>
                        </li>
                        <li>
                          <a href="#">Tea &amp; Coffee</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Diet &amp; Nutrition</a>
                    </li>
                    <li>
                      <a href="#">Tea &amp; Coffee</a>
                    </li>
                  </ul>
                </li> */}
                <li className={route === "/about" ? "active" : ""}>
                  <Link href="/about">About</Link>
                </li>
                <li className={route === "/contectus" ? "active" : ""}>
                  <Link href="/contectus">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="icons flex">
            {/* <a className="icons-btn d-inline-block js-search-open">
              <span onClick={openSearch} className="icon-search"></span>
            </a> */}
            <Link href="/cart" className="icons-btn d-inline-block bag">
              <span className="icon-shopping-bag"></span>
              {/* <span className="number">2</span> */}
            </Link>
            {/* <a
              href="#"
              className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
            >
              <span className="icon-menu"></span>
            </a> */}
            {logIn && (
              <>
                <Link href="/profile">
                  <div className="ms-3 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      className="absolute w-12 h-12 text-gray-400 -left-1 cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </>
            )}
            {!logIn && (
              <>
                <Link href="/login" className="mt-2">
                  <span className="ms-4">LogIn |</span>
                </Link>
                <Link href="/signup" className="mt-2">
                  <span className="ms-1">Register</span>
                </Link>
              </>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
