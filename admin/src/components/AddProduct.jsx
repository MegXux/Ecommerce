import React, { useState } from "react";
import upload_area from '../assets/upload_area.svg'

const AddProduct = () => {
  const [image, setImage] = useState(false);

  const [productDetails, setproductDetails] = useState({
    name: "",
    image: "",
    category: "",
    old_price: "",
    new_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setproductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();   //Formdata is a function that handles image automatically, storing this function in variable called formdata
    formData.append('product', image);  //Stroing the image in product  name:"",image:"" etc....

    await fetch('http://localhost:3000/upload', {
        method: 'POST',
        headers:{
            Accept: 'application/json',
        },
        body:formData,
    }).then((resp) => resp.json()).then((data) => {
        responseData = data;
    })

    if(responseData.success){
        product.image = responseData.image_url; //If the return was succes the image url will be added to the product
        console.log(product);
        await fetch('http://localhost:3000/add-product', {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json', 
            },
            body:JSON.stringify(product), //Sending it to the backend after converting the product into json format 
        }).then((res) => res.json()).then((data) => {        //When the server replies, this converts the response back into json so to use in code  getting it from the backend 
            data.success?alert("Product Added"):alert("Failed")
        })
    }
    
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Add New Product
      </h2>

      {/* Product Title */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Product Title</label>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Price Fields */}
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-gray-600 mb-1">Price</label>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type the price"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-600 mb-1">Offer Price</label>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type the price"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Category Select */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Product Category</label>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Kids">Kid</option>
        </select>
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <label htmlFor="file-input" className="block text-gray-600 mb-2">
          Product Image
        </label>
        <label
          htmlFor="file-input"
          className="cursor-pointer border-2 border-dashed border-gray-300 p-6 rounded-md flex justify-center items-center hover:bg-gray-50 transition"
        >
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="Upload"
            className="h-16 w-16 object-contain"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      {/* Submit Button */}
      <button onClick={() => {Add_Product()}} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
