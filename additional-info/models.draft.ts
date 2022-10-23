// Product
interface Product {
  id: number;
  name: string;
  note: string;
}

// ProductWithPrice
interface ProductWithPrice extends Product {
  price: number;
  history: { id: number; date: string | Date; price: number };
}

// ProductWithPriceAndQuantity
interface ProductWithPriceAndQuantity extends ProductWithPrice {
  quantity: number;
}

// Check
interface Check {
  id: number;
  date: string | Date;
  products: Array<ProductWithPriceAndQuantity>;
  totalPrice: number;
}

// Store
interface ProductsStore {
  id: number;
  name: string;
  products: Array<ProductWithPrice>;
  checks: Array<Check>;
  info: any;
}
