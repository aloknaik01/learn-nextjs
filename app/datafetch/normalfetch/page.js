import Image from "next/image";
import React from "react";

const page = async () => {
  const data = await fetch("https://fakestoreapi.com/products/1");
  const product = await data.json();

  console.log(product);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 mb-2 capitalize">
            Category: {product.category}
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="text-xl font-bold text-green-600">
            ${product.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
