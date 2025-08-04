import axios from 'axios';
import type { Product } from '../interfaces/products.interface';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const {data} = await axios.get<Product[]>(
      'https://fakestoreapi.com/products',
    );
    return data;
  } catch {
    console.log('Error al obtener los productos');
    throw new Error('Error al obtener los productos');
  }
};

