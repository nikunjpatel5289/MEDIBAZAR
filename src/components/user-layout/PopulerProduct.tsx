const PopulerProduct = () => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="title-section text-center col-12">
            <h2 className="text-uppercase">Popular Products</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <span className="tag">Sale</span>
            <a href="shop-single.html">
              {" "}
              <img src="images/product_01.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">Bioderma</a>
            </h3>
            <p className="price">
              <del>95.00</del> &mdash; $55.00
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <img src="images/product_02.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">Chanca Piedra</a>
            </h3>
            <p className="price">$70.00</p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <img src="images/product_03.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">Umcka Cold Care</a>
            </h3>
            <p className="price">$120.00</p>
          </div>

          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <img src="images/product_04.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">Cetyl Pure</a>
            </h3>
            <p className="price">
              <del>45.00</del> &mdash; $20.00
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <img src="images/product_05.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">CLA Core</a>
            </h3>
            <p className="price">$38.00</p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <span className="tag">Sale</span>
            <a href="shop-single.html">
              {" "}
              <img src="images/product_06.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">Poo Pourri</a>
            </h3>
            <p className="price">
              <del>$89</del> &mdash; $38.00
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a href="shop.html" className="btn btn-primary px-4 py-3">
              View All Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerProduct;
