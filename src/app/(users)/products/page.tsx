"use client";

import "@/app/main.css";
import Container from "@/components/user-layout/Container";
import ProductList from "@/components/user-layout/productComponent/ProductList";
import SideFilterBar from "@/components/user-layout/productComponent/SideFilterBar";
import TopFilterBar from "@/components/user-layout/productComponent/TopFilterBar";
import axios from "axios";
import { useEffect, useState } from "react";
// import FilterSideBar from '@/components/user-layout/productComponent/FilterSideBar'

const Page = () => {
  const [data, setData] = useState<any>([]);
  const [cat, setCat] = useState<any>("");
  const [search, setSearch] = useState<any>("");
  const [max, setMax] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [order,setOrder] = useState<number>(1)

  const handleSearchData = (data?: string) => {
    setPage(1)
    setSearch(data);
  };

  const handelCateSearch = (data?: string) => {
    setPage(1)
    setCat(data);
  };

  const handlePgination = (data: number) => {
    setPage(data);
  };

  const handelGetProductData = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:3000/product?cat=${cat}&sort=${order}&keyword=${search}&page=${page}`
      );
      if (result) {
        // console.info(result.data);

        setData(result.data.data);
        setMax(result.data.MAXCOUNT);
      }
    } catch (error: any) {
      console.info(error.response.data);
    }
  };

  useEffect(() => {
    handelGetProductData();
  }, [search, cat, page, order]);

  return (
    <Container>
      <div className="bg-white">
        <div>
          <main className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
            <TopFilterBar handleSearchData={handleSearchData} />
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <SideFilterBar handelCateSearch={handelCateSearch} setOrder={setOrder}/>
                <div className="lg:col-span-3">
                  <ProductList
                    data={data}
                    MAXCOUNT={max}
                    handlePgination={handlePgination}
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      {/* <div className="site-section"> */}
      {/* <FilterSideBar>
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
            </FilterSideBar> */}
      {/* </div> */}
    </Container>
  );
};

export default Page;
