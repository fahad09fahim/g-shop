import React, { useEffect, useState } from "react";
import { popularProducts } from "../data";
import Product from "./Product";
const Products = () => {
  const [products, setProducts] = useState([]);
//   console.log(products)
  useEffect(() => {
    fetch('Products.json')
    .then(res=>res.json())
    .then((data)=>setProducts(data));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
