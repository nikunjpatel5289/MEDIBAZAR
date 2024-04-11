"use client";
import Container from "@/components/user-layout/Container";
import CartTotal from "@/components/user-layout/cartComponent/CartTotal";
import Items from "@/components/user-layout/cartComponent/Items";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
  const [cdata, setCdata] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);
  // const [finalTotal, setFinalTotal] = useState<number>(0);
  // const [copenCode, setCoopenCode] = useState<number>(0);

  const getCartData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await axios.get("http://127.0.0.1:3000/cart", config);
      if (response) {
        // console.info(response.data.data.products);
        const data = response.data.data.products;
        const TOTAL = data.map((item: any) => {
          return item.qty * item.productId["prodPrice"];
        });
        const FINALTOTAL = TOTAL.reduce(
          (acc: number, cur: number) => acc + cur,
          0
        );
        setTotal(FINALTOTAL);
        // setFinalTotal(FINALTOTAL)
        // console.info("TOTAL", TOTAL, FINALTOTAL);

        setCdata(response.data.data.products);
      }
    } catch (error: any) {
      // console.info(error.response.data);
    }
  };

  const handelInc = async (id: string) => {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await axios.patch(
        `http://127.0.0.1:3000/cart/incQty/${id}`,
        null,
        config
      );

      if (response) {
        getCartData();
      }
    } catch (error: any) {
      console.info(error.response.data);
    }
  };

  const handelDec = async (id: string) => {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await axios.patch(
        `http://127.0.0.1:3000/cart/decQty/${id}`,
        null,
        config
      );

      if (response) {
        getCartData();
      }
    } catch (error: any) {
      console.info(error.response.data);
    }
  };

  const handelRemoveProduct = async (id: string) => {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await axios.delete(
        `http://127.0.0.1:3000/cart/${id}`,
        config
      );

      if (response) {
        getCartData();
      }
    } catch (error: any) {
      console.info(error.response.data);
    }
  };

  // const handelApplyCoopenCode = async (code: string) => {
  //   try {
  //     // console.info(code);
  //     const result = await axios.post("http://127.0.0.1:3000/promo/apply", {
  //       promcodename: code,
  //     });
  //     if (result.data.data.IsActive === true) {
  //       console.info(result.data.data);
  //       let didectAmount: number;
  //       if (result.data.data.promotype === "Flat") {
  //         setFinalTotal(total - result.data.data.promocodeamount);
  //         setCoopenCode(result.data.data.promocodeamount)
  //       } else {
  //         didectAmount = (total * result.data.data.promocodeamount) / 100;
  //         setCoopenCode(didectAmount)
  //         setFinalTotal(total - didectAmount);
  //       }
  //     }
  //   } catch (error: any) {
  //     console.info(error.response.data.message);
  //   }
  // };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <Container>
      <div className="site-section">
        <div className="container">
          <Items
            data={cdata}
            handelInc={handelInc}
            handelDec={handelDec}
            handelRemoveProduct={handelRemoveProduct}
          />
          {cdata.length > 0 && (
            <CartTotal
              total={total}
              // finalTotal={finalTotal}
              // copenCode={copenCode}
              // handelApplyCoopenCode={handelApplyCoopenCode}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default page;
