'use client';

import { useEffect, useState } from 'react';
import GlobalApi from '@/utils/GlobalApi';
import ProductList from './ProductList';

function ProductSection() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getLatestProducts();
    }, []);

    const getLatestProducts = () => {
        GlobalApi.getLatestProducts().then((response) => {
            // console.log(response.data.data);
            setProducts(response.data.data);
        });
    };

    const filterProduct = (category: any) => {
        const result = products.filter((product: any) => product.category === category);
        return result;
    };

    console.log(filterProduct('mobile'));

    return (
        <div className="px-10 md:px-20">
            <h2 className="font-bold text-xl mb-2 mt-6">All Product</h2>
            <ProductList productList={products} />

            <h2 className="font-bold text-xl mb-2 mt-6">Mobile App</h2>
            <ProductList productList={filterProduct('mobile')} />

            <h2 className="font-bold text-xl mb-2 mt-6">Web App</h2>
            <ProductList productList={filterProduct('web')} />
        </div>
    );
}

export default ProductSection;
