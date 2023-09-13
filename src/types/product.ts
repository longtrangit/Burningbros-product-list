export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  brand: string;
  thumbnail: string;
}

export interface ProductCardProps extends Omit<Product, "id"> {}

export interface ProductListProps {
  products: Product[];
}
