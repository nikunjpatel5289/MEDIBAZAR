const BillingData = () => {
  return (
    <div className="col-md-6 mb-5 mb-md-0">
      <h2 className="h3 mb-3 text-black">Billing Details</h2>
      <div className="p-3 p-lg-5 border">
        {/* <div className="form-group">
          <label htmlFor="c_country" className="text-black">
            Country <span className="text-danger">*</span>
          </label>
          <select id="c_country" className="form-control">
            <option value="1">Select a country</option>
            <option value="2">bangladesh</option>
            <option value="3">Algeria</option>
            <option value="4">Afghanistan</option>
            <option value="5">Ghana</option>
            <option value="6">Albania</option>
            <option value="7">Bahrain</option>
            <option value="8">Colombia</option>
            <option value="9">Dominican Republic</option>
          </select>
        </div> */}
        
        <div className="form-group row">
          <div className="col-md-12">
            <label htmlFor="c_name" className="text-black">
              Full Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_name"
              name="name"
              placeholder="Full Name"
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-md-12">
            <label htmlFor="c_phone" className="text-black">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_phone"
              name="phonr"
              placeholder="Phone Number"
            />
          </div>
        </div>

        {/* <div className="form-group row">
          <div className="col-md-6">
            <label htmlFor="c_fname" className="text-black">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_fname"
              name="c_fname"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="c_lname" className="text-black">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_lname"
              name="c_lname"
            />
          </div>
        </div> */}

        {/* <div className="form-group row">
          <div className="col-md-12">
            <label htmlFor="c_companyname" className="text-black">
              Company Name{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="c_companyname"
              name="c_companyname"
            />
          </div>
        </div> */}

        <div className="form-group row">
          <div className="col-md-12">
            <label htmlFor="c_address" className="text-black">
              Address <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_address"
              name="c_address"
              placeholder="Street address"
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="city"
            placeholder="City"
          />
        </div>

        <div className="form-group row">
          <div className="col-md-6">
            <label htmlFor="c_state_country" className="text-black">
              State <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_state_country"
              name="state"
              placeholder="State"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="c_postal_zip" className="text-black">
              Posta / Zip <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_postal_zip"
              name="zip"
              placeholder="Zip"
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-md-12">
            <label htmlFor="c_country" className="text-black">
              Country <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_country"
              name="country"
              placeholder="Country"
            />
          </div>
        </div>

        {/* <div className="form-group row mb-5">
          <div className="col-md-6">
            <label htmlFor="c_email_address" className="text-black">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_email_address"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="c_phone" className="text-black">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_phone"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BillingData;
