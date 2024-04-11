interface prop {
  formik: any;
  // handleSubmit: (val: any) => void;
  // handleChange: (data : any) => void
}

const BillingData = ({ formik }: prop) => {
  return (
    <div className="col-md-6 mb-5 mb-md-0">
      <h2 className="h3 mb-3 text-black">Billing Details</h2>
      <form onSubmit={formik.handleSubmit}>
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
              <label
                htmlFor="c_name"
                className={
                  formik.touched.name && formik.errors.name
                    ? `text-red-600`
                    : `text-black `
                }
              >
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="c_name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-12">
              <label
                htmlFor="c_phone"
                className={
                  formik.touched.phone && formik.errors.phone
                    ? `text-red-600`
                    : `text-black `
                }
              >
                Phone <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="c_phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
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
              <label
                htmlFor="c_address"
                className={
                  formik.touched.address && formik.errors.address
                    ? `text-red-600`
                    : `text-black `
                }
              >
                Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="c_address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="Street address"
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              placeholder="City"
            />
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              <label
                htmlFor="c_state_country"
                className={
                  formik.touched.state && formik.errors.state
                    ? `text-red-600`
                    : `text-black `
                }
              >
                State <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="c_state_country"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                placeholder="State"
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="c_postal_zip"
                className={
                  formik.touched.zip && formik.errors.zip
                    ? `text-red-600`
                    : `text-black `
                }
              >
                Posta / Zip <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="c_postal_zip"
                name="zip"
                value={formik.values.zip}
                onChange={formik.handleChange}
                placeholder="Zip"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-12">
              <label
                htmlFor="c_country"
                className={
                  formik.touched.country && formik.errors.country
                    ? `text-red-600`
                    : `text-black `
                }
              >
                Country <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="c_country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                placeholder="Country"
              />
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingData;
