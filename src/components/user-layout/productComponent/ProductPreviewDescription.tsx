const ProductPreviewDescription = () => {
  return (
    <div className="mt-5">
      <div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Description</th>
                <th>Packaging</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">OTC022401</td>
                <td>
                  Pain Management: Acetaminophen PM Extra-Strength Caplets, 500
                  mg, 100/Bottle
                </td>
                <td>1 BT</td>
              </tr>
              <tr>
                <td scope="row">OTC022401</td>
                <td>
                  Pain Management: Acetaminophen PM Extra-Strength Caplets, 500
                  mg, 100/Bottle
                </td>
                <td>144/CS</td>
              </tr>
              <tr>
                <td scope="row">OTC022401</td>
                <td>
                  Pain Management: Acetaminophen PM Extra-Strength Caplets, 500
                  mg, 100/Bottle
                </td>
                <td>1 EA</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-10">
          <table className="table">
            <tbody>
              <tr>
                <td>HPIS CODE</td>
                <td>999_200_40_0</td>
              </tr>
              <tr>
                <td>HEALTHCARE PROVIDERS ONLY</td>
                <td>No</td>
              </tr>
              <tr>
                <td>LATEX FREE</td>
                <td>Yes, No</td>
              </tr>
              <tr>
                <td>MEDICATION ROUTE</td>
                <td>Topical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewDescription;
