import { getApiEndpoint } from "./apiService";
import { Functions as ApiFunctions } from "../constants/api";

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(getApiEndpoint(ApiFunctions.FeaturedProducts));
        if (!response.ok) {
            throw new Error(`Error fetching products: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return [];
    }
};