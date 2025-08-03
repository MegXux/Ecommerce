import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import ProductDetails from "../Components/ProductDetails";
import ProductDescription from "../Components/productDescripton";
import RelatedProduct from "../Components/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));

  if (!product) {
    return <div className="text-center p-10 text-xl">Loading product...</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
      <ProductDescription />
      <RelatedProduct category={product.category} />
    </div>
  );
};

export default Product;
