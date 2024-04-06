import Link from "next/link";

interface prop {
  readonly title?: string;
  readonly description?: string;
}

const Blog = (prop: prop) => {
  return (
    <div
      className="site-section bg-secondary bg-image"
      style={{ backgroundImage: `url("./images/bg_2.jpg")` }}
    >
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <Link
              href="/about"
              className="banner-1 h-100 d-flex"
              style={{ backgroundImage: `url("./images/bg_1.jpg")` }}
            >
              <div className="banner-1-inner align-self-center">
                <h2>{prop?.title || "MediBazar Products"}</h2>
                <p>
                  {prop?.description ||
                    "A pharmacy store is a crucial component of healthcare infrastructure, providing essential medications and healthcare products to the community."}
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <Link
              href="/about"
              className="banner-1 h-100 d-flex"
              style={{ backgroundImage: `url("./images/bg_2.jpg")` }}
            >
              <div className="banner-1-inner ml-auto  align-self-center">
                <h2>Rated by Experts</h2>
                <p>
                  Expertly crafted, offering premium quality and reliability.
                  Trusted by professionals worldwide for exceptional
                  performance.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
