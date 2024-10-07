"use client";
const { default: Link } = require("next/link");
import { useEffect, useState } from "react";

export default  function  products({ }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {   
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products); 
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <h1>Product List</h1>
      <div className="flex flex-wrap mx-auto w-[calc(100%-5%)] justify-center  gap-5">
        {products.map((data) => (
           <Link key={data.id} href={`/products/${data.id}`} className="w-1/5 flex flex-col justify-start items-center border-2 ">
            <div>
            <img src={data.thumbnail} className="obj" alt="" />
            <div className=" bg-emerald-200 w-full px-2">
              <h1 className="text-lg truncate text-left">{data.title}</h1>
              <h3 className="text-2xl text-left">${data.price}</h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
