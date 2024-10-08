"use client";

import { userLogOut } from "@/app/redux/slices/userSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, getCookies } from "cookies-next";

export default function Header() {
  const response = useSelector((state: any) => state.user);
  const reoute = useRouter();
  const route = usePathname();
  const [logIn, setLogIn] = useState(false);
  // const [searchActive, setSearchActive] = useState(false);
  const dispatch = useDispatch();
  const islogin = getCookie("token"); //typeof window !== 'undefined' && localStorage.getItem("token") || null;
  // console.info(response.user.profile);
  // useEffect(() => {
  //   // if (getCookie("token") != undefined) {
  //   //   setLogIn(true);
  //   // }
  //   if (localStorage.getItem("token")) {
  //     setLogIn(true);
  //     // console.log('------------');

  //   }
  // }, []);

  const handleLogOut = () => { 
    dispatch(userLogOut());
    reoute.replace("/login");
    setLogIn(false);
  };

  // const openSearch = () => {
  //   setSearchActive((prev) => !prev);
  // };

  return (
    <div className="site-navbar py-2">
      {/* <div className={`search-wrap ${searchActive && "active"}`}>
        <div className="container">
          <Link href="#" className="search-close js-search-close">
            <span onClick={openSearch} className="icon-close2"></span>
          </Link>
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search keyword and hit enter..."
            />
          </form>
        </div>
      </div> */}

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

            {/* <a
              href="#"
              className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
            >
              <span className="icon-menu"></span>
            </a> */}
            {islogin && ( //response.token && ( //islogin
              <>
                <Link href={{ pathname: "/cart" }}>
                  <div className="icons-btn d-inline-block bag mt-1">
                    <span className="icon-shopping-bag"></span>
                    {/* <span className="number">2</span> */}
                  </div>
                </Link>
                <Link href="/profile">
                <img className="inline-block size-[45px] m-0 rounded-full" src={response.user.profile ? response.user.profile : 'http://res.cloudinary.com/dwqckx7cr/image/upload/v1712302912/Users/nupt0uiro3u8q0moiesj.jpg' } alt="User Profile" />
                  {/* <div className="ms-3 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
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
                  </div> */}
                </Link>
                <span
                  className="ms-2 mt-[11px] text-black cursor-pointer border-none outline-none"
                  // type="button"
                  onClick={handleLogOut}
                >
                  Logout
                </span>
              </>
            )}
            {!islogin && ( //islogin
              <>
                <Link href={{ pathname: "/login"}}>
                  {/* <span className="ms-4">LogIn |</span> */}LogIn |
                </Link>
                <Link
                  className="ms-1"
                  href={{ pathname: "/signup" }}
                >
                  {/* <span className="ms-1">Register</span> */}Register
                </Link>
                {/* <Link href="/login" className="mt-2">
                  <span className="ms-4">LogIn |</span>
                </Link>
                <Link href="/signup" className="mt-2">
                  <span className="ms-1">Register</span>
                </Link> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
