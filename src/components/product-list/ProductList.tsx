import React from "react";

import { ProductCard } from "../product-card";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { Product } from "../../types";
interface ProductListProps {
  isNextPageLoading: boolean;
  hasNextPage: boolean;
  products: Product[];
  loadNextPage: () => Promise<void>;
}

export const ProductList: React.FC<ProductListProps> = ({
  isNextPageLoading,
  hasNextPage,
  products,
  loadNextPage,
}) => {
  const itemCount = hasNextPage ? products.length + 1 : products.length;

  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  const isItemLoaded = (index: number) => {
    return !hasNextPage || index < products.length;
  };
  const renderRow = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <div style={style}>
      <ProductCard {...products[index]} />
    </div>
  );

  if (!isNextPageLoading && !products.length)
    return <div className="text-lg text-center">Not available</div>;

  if (isNextPageLoading && !products.length)
    return <div className="text-lg text-center">Loading</div>;

  return (
    <>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            height={800}
            width={500}
            itemCount={products.length}
            itemSize={150}
            onItemsRendered={onItemsRendered}
            ref={ref}
          >
            {renderRow}
          </List>
        )}
      </InfiniteLoader>
      {isNextPageLoading && <div className="text-lg text-center">Loading</div>}
    </>
  );
};
