export interface Product {
  id: number | string;
  name: string;
  image: string;
  price: number;
  category: string | number;
  description: string;
}

export type formData = Pick<
  Product,
  "name" | "category" | "image" | "price" | "description"
>;
