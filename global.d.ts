type Product = {
  _id: string;
  name: string;
  category: string;
  old_price: number;
  new_price: number;
  image: string;
  available?: boolean;
  date?: Date;
};
