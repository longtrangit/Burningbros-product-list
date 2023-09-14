import React, { useEffect, useState } from "react";
import { SearchSection } from "./components";
import { getProducts, searchProduct } from "./api";
import { Product } from "./types";
import { ProductList } from "./components/product-list/ProductList";

type ProductStatus = {
  products: Product[];
  hasNextPage: boolean;
  isNextPageLoading: boolean;
};

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [productsStatus, setProductsStatus] = useState<ProductStatus>({
    products: [],
    hasNextPage: true,
    isNextPageLoading: false,
  });

  useEffect(() => {
    handleLoadingProduct();
  }, []);

  useEffect(() => {
    if (!searchKeyword) return;

    const timeoutId = setTimeout(handleLoadingProduct, 500);

    return () => clearTimeout(timeoutId);
  }, [searchKeyword]);

  const handleLoadingProduct = async () => {
    const fetchMethod = async () =>
      searchKeyword
        ? await searchProduct(searchKeyword)
        : await getProducts(productsStatus.products.length | 0);

    setProductsStatus((state) => {
      return { ...state, isNextPageLoading: true };
    });

    const result = await fetchMethod();

    setProductsStatus((state) => {
      return {
        isNextPageLoading: false,
        products: searchKeyword ? result : [...state.products, ...result],
        hasNextPage: result ? true : false,
      };
    });
  };

  return (
    <div className="flex flex-col p-16 h-screen">
      <div className="text-6xl">Product List</div>
      <SearchSection
        searchKeyword={searchKeyword}
        onInputChange={setSearchKeyword}
      />
      <ProductList
        isNextPageLoading={productsStatus.isNextPageLoading}
        products={productsStatus.products}
        hasNextPage={productsStatus.hasNextPage}
        loadNextPage={handleLoadingProduct}
      />
    </div>
  );
}

export default App;
