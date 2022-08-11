// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StoreAddress, Cart, CartItem, Product, Category } = initSchema(schema);

export {
  StoreAddress,
  Cart,
  CartItem,
  Product,
  Category
};