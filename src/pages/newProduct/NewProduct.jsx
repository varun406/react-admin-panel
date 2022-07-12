import "./newProduct.css";

function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New User</h1>
      <form className="newProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" placeholder="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="1,123" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select className="addProductSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}

export default NewProduct;
