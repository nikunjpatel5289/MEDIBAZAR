import "@/app/main.css";
import Container from "@/components/user-layout/Container";
import ContectUs from "@/components/user-layout/contectComponent/ContectUs";
import Offices from "@/components/user-layout/contectComponent/Offices";

const page = () => {
  return (
    <Container>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="title-section text-center col-12">
              <h2 className="text-uppercase">Get In Touch</h2>
            </div>
          </div>
          <ContectUs />
        </div>
      </div>
      <Offices />
    </Container>
  );
};

export default page;
