export type Cart = {
  id: number | string;
  userId: number | string;
  products: [
    {
      productId: number | string;
      quantity?: number;
    }
  ];
};
