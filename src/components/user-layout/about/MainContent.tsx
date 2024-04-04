const MainContent = () => {
  return (
    <>
      <div
        className="site-section bg-light custom-border-bottom"
        data-aos="fade"
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="block-16">
                <figure>
                  <img
                    src="/images/bg_1.jpg"
                    alt="Image placeholder"
                    className="img-fluid rounded"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="site-section-heading pt-3 mb-4">
                <h2 className="text-black">How We Started</h2>
              </div>
              <p>
                Phermecy began with a vision to revolutionize the pharmaceutical
                industry. Our founders, driven by a passion for healthcare
                accessibility, embarked on a journey to create an online
                platform that would simplify the process of obtaining essential
                medications and healthcare products. With a blend of innovation,
                dedication, and industry expertise, Phermecy was born. Today, we
                stand as a testament to our commitment to enhancing the
                well-being of our customers worldwide.
              </p>
              {/* <p>
              Accusantium dolor ratione maiores est deleniti nihil? Dignissimos
              est, sunt nulla illum autem in, quibusdam cumque recusandae,
              laudantium minima repellendus.
            </p> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-section bg-light custom-border-bottom"
        data-aos="fade"
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 order-md-2">
              <div className="block-16">
                <figure>
                  <img
                    src="images/hero_1.jpg"
                    alt="Image placeholder"
                    className="img-fluid rounded"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-5 mr-auto">
              <div className="site-section-heading pt-3 mb-4">
                <h2 className="text-black">We Are Trusted Company</h2>
              </div>
              <p className="text-black">
                Discover peace of mind with our trusted pharmacy company. With a
                proven track record of excellence, we prioritize your health and
                well-being. Shop confidently with us today for high-quality
                products and reliable service you can depend on.
              </p>
              <p className="text-black">
                Our pharmacy partners are trusted names in the industry,
                renowned for quality and reliability. With rigorous quality
                control measures and a commitment to safety, we ensure that
                every product meets the highest standards. Your health and
                satisfaction are our top priorities. Shop confidently with us
                today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
