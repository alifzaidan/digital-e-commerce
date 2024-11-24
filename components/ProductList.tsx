import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ productList }: any) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {productList.map((product: any, index: number) => (
                <div key={index}>
                    <ProductItem product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;
