import './main.css'
import Container from "@/components/user-layout/Container";
import PopulerProduct from "@/components/user-layout/PopulerProduct";
import Blog from "@/components/user-layout/homeComponents/Blog";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Container>
        <div className="site-blocks-cover" style={{backgroundImage:`url("./images/hero_1.jpg")`}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
                <div className="site-block-cover-content text-center">
                  <h2 className="sub-title">Effective Medicine, New Medicine Everyday</h2>
                  <h1>Welcome To MediBazar</h1>
                  <p>
                    <Link href="/products" className="btn btn-primary px-5 py-3">Shop Now</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row align-items-stretch section-overlap">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="banner-wrap bg-primary h-100">
                  <a href="#" className="h-100">
                    <h5>Free <br /> Shipping</h5>
                    <p>
                      Amet sit amet dolor 
                      <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="banner-wrap h-100">
                  <a href="#" className="h-100">
                    <h5>Season <br /> Sale 50% Off</h5>
                    <p>
                      Amet sit amet dolor
                      <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="banner-wrap bg-warning h-100">
                  <a href="#" className="h-100">
                    <h5>Buy <br /> A Gift Card</h5>
                    <p>
                      Amet sit amet dolor
                      <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                    </p>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <PopulerProduct />
        {/* <Reviews /> */}
        <Blog />
      </Container>
     
    </>
  );
}
