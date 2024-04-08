interface prop {
  data: any;
}
const ProductPreviewDescription = ({ data }: prop) => {
  const date = new Date(data.prodExpiryDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = (data.prodExpiryDate !== undefined) ? `${year}-${month}-${day}` : "NO";

  return (
    <div className="mt-5">
      <div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Information</th>
                <th>Description</th>
                {/* <th>Packaging</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Benefit</td>
                <td>{data.prodBenifits}</td>
                {/* <td>1 BT</td> */}
              </tr>
              <tr>
                <td scope="row">Safet Information</td>
                <td>{data.prodSaftyInfo}</td>
                {/* <td>144/CS</td> */}
              </tr>
              <tr>
                <td scope="row">Use Of It</td>
                <td>{data.prodUse}</td>
                {/* <td>1 EA</td> */}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-10">
          <table className="table">
            <tbody>
              <tr>
                <td>Flavour</td>
                <td>
                  {data.prodFlavour?.map((item: string) =>
                    item === "" ? "NO" : `${item} `
                  )}
                </td>
              </tr>
              <tr>
                <td>Sizes</td>
                <td>
                  {data.prodSize?.map((item: string) =>
                    item === "" ? "NO" : `${item} `
                  )}
                </td>
              </tr>
              <tr>
                <td>Expiration Date</td>
                <td>{formattedDate}</td>
              </tr>
              {/* <tr>
                <td>MEDICATION ROUTE</td>
                <td>Topical</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewDescription;
