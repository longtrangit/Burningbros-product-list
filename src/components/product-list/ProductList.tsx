import React from "react";

import { ProductListProps } from "../../types";
import { ProductCard } from "../product-card";

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products) return <div className="text-lg text-center">Loading</div>;
  return (
    <div>
      {products.map((product) => {
        const { id, ...rest } = product;
        return <ProductCard key={id} {...rest} />;
      })}
    </div>
  );
};
