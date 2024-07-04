
export interface Product {
  id: string;
  name: string;
  description: string;
  logo: string;
  releaseDate: Date;
  reviewDate: Date;
}

export interface RouteParams {
  product: Product;
}

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { productId: string };
  AddProduct: undefined;
  EditProduct: { productId: string };
};

export interface ProductErrors {
  id?: string;
  name?: string;
  description?: string;
  logo?: string;
  releaseDate?: string;
  reviewDate?: string;
}
