const Offices = () => {
  return (
    <div className="site-section bg-gradient-to-r from-cyan-400 to-blue-500">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white mb-4">Offices</h2>
          </div>
          <div className="col-lg-4">
            <div className="p-4 bg-white mb-3 rounded">
              <span className="d-block text-black h6 text-uppercase">
                New York
              </span>
              <p className="mb-0">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 bg-white mb-3 rounded">
              <span className="d-block text-black h6 text-uppercase">
                London
              </span>
              <p className="mb-0">17 Wmbaly, Weast Coast. North London, UK</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 bg-white mb-3 rounded">
              <span className="d-block text-black h6 text-uppercase">
                Canada
              </span>
              <p className="mb-0">90, Navas Cocia, New city Orlando, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;
