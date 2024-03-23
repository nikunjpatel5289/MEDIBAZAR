import '@/app/main.css'
import Container from '@/components/user-layout/Container'
import FilterSideBar from '@/components/user-layout/productComponent/FilterSideBar'

const page = () => {
  return (
    <Container>
         {/* <div className="site-section"> */}
            <FilterSideBar>
                <div className="row">
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                        <span className="tag">Sale</span>
                        <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
                        <p className="price"><del>95.00</del> &mdash; $55.00</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                        <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
                        <p className="price">$70.00</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                        <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                        <p className="price">$120.00</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                
                        <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
                        <p className="price"><del>45.00</del> &mdash; $20.00</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                        <a href="shop-single.html"> <img src="images/product_05.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">CLA Core</a></h3>
                        <p className="price">$38.00</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                        <span className="tag">Sale</span>
                        <a href="shop-single.html"> <img src="images/product_06.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
                        <p className="price"><del>$89</del> &mdash; $38.00</p>
                    </div>

                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                        <span className="tag">Sale</span>
                        <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
                        <p className="price"><del>95.00</del> &mdash; $55.00</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                        <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
                        <p className="price">$70.00</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                        <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                        <p className="price">$120.00</p>
                    </div>
                    
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                    
                        <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
                        <p className="price"><del>45.00</del> &mdash; $20.00</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                        <a href="shop-single.html"> <img src="images/product_05.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">CLA Core</a></h3>
                        <p className="price">$38.00</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 text-center item mb-4">
                        <span className="tag">Sale</span>
                        <a href="shop-single.html"> <img src="images/product_06.png" alt="Image" /></a>
                        <h3 className="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
                        <p className="price"><del>$89</del> &mdash; $38.00</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <div className="site-block-27">
                            <ul>
                                <li><a href="#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </FilterSideBar>
        {/* </div> */}
    </Container>
  )
}

export default page