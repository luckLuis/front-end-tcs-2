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
  Home: {authorId?: string};
  ProductDetails: {product: Product};
  AddProduct: undefined;
};

export interface ProductErrors {
  id?: string;
  name?: string;
  description?: string;
  logo?: string;
  releaseDate?: string;
  reviewDate?: string;
}
