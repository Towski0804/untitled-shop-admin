import { useState } from "react";
import upload_area from "../../assets/upload_area.svg";
import "./AddProduct.scss";

interface ProductDetails {
  name: string;
  image: string;
  old_price: number;
  new_price: number;
  category: string;
}

const AddProduct = () => {
  const [image, setImage] = useState<File>();
  const [productDetails, setProductDetails] = useState<ProductDetails>({
    name: "",
    image: "",
    old_price: 0,
    new_price: 0,
    category: "women",
  });
  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setImage(e.target.files[0]);
  };
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };
  const addProduct = async () => {
    let responseData: { success: boolean; imageURL: string };
    const product = productDetails;

    const formData = new FormData();
    formData.append("product", image as File);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json)
      .then((data) => (responseData = data));
    if (responseData) {
      product.image = responseData.imageURL;
      console.log(product);
    }
  };
  return (
    <div
      className="add-product w-full max-w-[800px] p-[30px_50px] m-[20px_30px] rounded-md bg-white space-y-2
  max-md:w-auto max-md:p-8 max-md:m-5"
    >
      <div className="itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Product Title"
        />
      </div>
      <div className="price flex gap-10">
        <div className="itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Price"
          />
        </div>
        <div className="itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Offer Price"
          />
        </div>
      </div>
      <div className="itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="category_selector p-[10px] w-[100px] h-[50px] text-sm border rounded bg-white"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="Kid">Kid</option>
        </select>
      </div>
      <div className="itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="upload-indicator size-[120px] object-contain my-3 cursor-pointer"
          />
          <input
            type="file"
            id="file-input"
            name="image"
            hidden
            onChange={imageHandler}
          />
        </label>
      </div>
      <button
        className="add-product-btn mt-5 w-[160px] h-[50px] rounded-md bg-blue-500 border-none cursor-pointer text-white font-medium"
        onClick={addProduct}
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
