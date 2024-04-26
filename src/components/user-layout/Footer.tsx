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
                <p className="text-gray-700">
                  A pharmacy store is a crucial component of healthcare
                  infrastructure, providing essential medications and healthcare
                  products to the community.
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
                  <Link href="/contectus">Contect</Link>
                </li>
                <li>
                  <Link href="/">Diet &amp; Home</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                  <li className="address">
                    304 LaNet. Software Soluction PVL.TD
                  </li>
                  <li className="phone">
                    <span>+91 159 357 426</span>
                    {/* <a href="tel://23923929210">+91 159 357 426</a> */}
                  </li>
                  <li className="email">MediBazar@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center text-black">
            <div className="col-md-12">
              <p>
                Copyright &copy;
                {/* <script>document.write(new Date().getFullYear());</script>  */}
                All rights reserved |
                <i className="ms-1 icon-heart" aria-hidden="true"></i> by
                <Link href="/" className="text-orange-600 ms-1">
                  MediBazar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
