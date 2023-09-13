export const getProducts = async (currentProductIndex: number) => {
  const result = await fetch(
    `https://dummyjson.com/products?limit=20&skip=${currentProductIndex}&select=title,price,thumbnail,stock`
  );

  const parsedResult = await result.json();

  return parsedResult.products;
};

export const searchProduct = async (keyword: string) => {
  const result = await fetch(
    `https://dummyjson.com/products/search?q=${keyword}&select=title,price,thumbnail,stock`
  );

  const parsedResult = await result.json();

  return parsedResult.products;
};
