import "@/app/main.css";
import Container from "@/components/user-layout/Container";
import MainContent from "@/components/user-layout/about/MainContent";
import Services from "@/components/user-layout/about/Services";
import OurTeam from "@/components/user-layout/about/OurTeam";

const AboutUs = () => {
  return (
    <>
      <Container>
        <div
          className="site-blocks-cover inner-page"
          style={{ backgroundImage: `url("./images/hero_1.jpg")` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto align-self-center">
                <div className=" text-center">
                  <h1>About Us</h1>
                  <p className="text-cyan-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum obcaecati natus iure voluptatum eveniet harum
                    recusandae ducimus saepe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MainContent />
        <Services />
        <OurTeam />
      </Container>
    </>
  );
};

export default AboutUs;
