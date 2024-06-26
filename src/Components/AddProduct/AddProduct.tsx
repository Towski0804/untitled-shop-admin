import { useState } from "react";
import upload_area from "../../assets/upload_area.svg";
import "./AddProduct.scss";
import { ajax } from "../lib/ajax";

interface ProductDetails {
  name: string;
  image: string;
  old_price: number | "";
  new_price: number | "";
  category: string;
  description: string;
}

const AddProduct = () => {
  const [image, setImage] = useState<File>();
  const [productDetails, setProductDetails] = useState<ProductDetails>({
    name: "",
    image: "",
    old_price: 0,
    new_price: 0,
    category: "women",
    description: "",
  });
  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setImage(e.target.files[0]);
  };
  const changeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (product: ProductDetails) => {
    const message = [];
    if (product.name === "") {
      message.push("Product Name is required");
    }
    if (!image) {
      message.push("Product Image is required");
    }
    if (product.old_price === "") {
      message.push("Product Price is required");
    } else if (isNaN(Number(product.old_price))) {
      message.push("Price must be a number");
    }
    if (product.new_price === "") {
      message.push("Product Offer Price is required");
    } else if (isNaN(Number(product.new_price))) {
      message.push("Offer Price must be a number");
    }
    if (message.length > 0) {
      alert(message.join("\n"));
      return false;
    }
    return true;
  };

  const addProduct = async () => {
    if (!validate(productDetails)) {
      return;
    }
    const product = productDetails;
    const formData = new FormData();
    formData.append("product", image as File);
    await ajax
      .post("/upload", formData)
      .then((res) => {
        if (res.data.success) {
          product.image = res.data.image_url;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    product.new_price = Number(product.new_price);
    product.old_price = Number(product.old_price);
    await ajax
      .post("/product", product)
      .then((res) => {
        alert("Product Added");
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
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

      <div>
        <p>Product Description</p>
        <textarea
          value={productDetails.description}
          onChange={changeHandler}
          name="description"
          placeholder="Product Description"
          className="w-full h-[100px] rounded p-4 border border-slate-300 outline-none text-sm align-top"
        />
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
        <label htmlFor="file-input" className="inline-block">
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
        className="add-product-btn mt-5 w-[160px] h-[50px] rounded-md bg-blue-500 border-none cursor-pointer text-white font-medium hover:bg-blue-300 transition-all duration-[250ms] ease-in-out"
        onClick={addProduct}
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
