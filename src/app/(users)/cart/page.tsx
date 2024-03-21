"use client"
import Container from "@/components/user-layout/Container"
import CartTotal from "@/components/user-layout/cartComponent/CartTotal"
import Items from "@/components/user-layout/cartComponent/Items"

const page = () => {
  return (
    <Container>
        <div className="site-section">
            <div className="container">
                <Items />
                <CartTotal />
            </div>
        </div>
    </Container>
  )
}

export default page