import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = 'http://localhost:1337/api';

const axiosClient = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${apiKey}`,
    },
});

const getLatestProducts = () => axiosClient.get('/products?populate=*');

const getProductById = (id: any) => axiosClient.get(`/products/${id}?populate=*`);

const getProductsByCategory = (category: any) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

const addProductToCart = (productId: any) => axiosClient.post('/carts', productId);

const getUserCartItem = (email: any) => axiosClient.get(`/carts?populate[product][populate][0]=banner&filters[email][$eq]=${email}`);

const deleteCartItem = (id: any) => axiosClient.delete(`/carts/${id}`);

export default {
    getLatestProducts,
    getProductById,
    getProductsByCategory,
    addProductToCart,
    getUserCartItem,
    deleteCartItem,
};
