declare let isDev: boolean;

type Product = {
  _id: string;
  name: string;
  category: string;
  image: string;
  new_price: number;
  old_price: number;
  description: string;
  available?: boolean;
  date?: Date;
};
