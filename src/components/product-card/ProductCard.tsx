import React from "react";
import { ProductCardProps } from "../../types";

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  stock,
  brand,
  thumbnail,
}) => {
  return (
    <div className="flex border p-5 max-w-md">
      <img className="w-32 h-32" src={thumbnail} />
      <div className="px-5">
        <div className="text-lg font-semibold">{title}</div>
        <div>Price: {price}</div>
        <div>Brand: {brand}</div>
        <div className="text-red-600">There is {stock} pcs left</div>
      </div>
    </div>
  );
};
