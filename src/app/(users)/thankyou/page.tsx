import "@/app/main.css"
import Footer from "@/components/user-layout/Footer";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="site-wrap">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <span className="icon-check_circle display-3 text-success"></span>
                <h2 className="display-3 text-black">Thank you!</h2>
                <p className="lead mb-5">
                  You order was successfuly completed.
                </p>
                <p>
                  <Link
                    href="/products"
                    className="btn btn-md height-auto px-4 py-3 btn-primary"
                  >
                    Back to store
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
