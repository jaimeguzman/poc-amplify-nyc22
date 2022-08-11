import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StoreAddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class StoreAddress {
  readonly id: string;
  readonly streetAddress1?: string | null;
  readonly streetAddress2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zipcode?: string | null;
  readonly country?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StoreAddress, StoreAddressMetaData>);
  static copyOf(source: StoreAddress, mutator: (draft: MutableModel<StoreAddress, StoreAddressMetaData>) => MutableModel<StoreAddress, StoreAddressMetaData> | void): StoreAddress;
}

export declare class Cart {
  readonly id: string;
  readonly CartItems?: (CartItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Cart, CartMetaData>);
  static copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

export declare class CartItem {
  readonly id: string;
  readonly quantity?: number | null;
  readonly Product?: Product | null;
  readonly cartID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartItemProductId?: string | null;
  constructor(init: ModelInit<CartItem, CartItemMetaData>);
  static copyOf(source: CartItem, mutator: (draft: MutableModel<CartItem, CartItemMetaData>) => MutableModel<CartItem, CartItemMetaData> | void): CartItem;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly current_stock?: number | null;
  readonly image?: string | null;
  readonly rating?: number | null;
  readonly style?: string | null;
  readonly categoryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly styles?: (string | null)[] | null;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}