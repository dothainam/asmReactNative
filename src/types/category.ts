export interface Category {
  id: string | number;
  name: string;
  image: string;
  quatity: number;
}

export type formDataCategory = Pick<Category, "name" | "image">;
