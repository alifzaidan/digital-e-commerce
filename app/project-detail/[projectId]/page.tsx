'use client';

import Breadcrumb from '@/components/Breadcrumb';
import ProductList from '@/components/ProductList';
import ProjectBanner from '@/components/ProjectBanner';
import ProjectInfo from '@/components/ProjectInfo';
import GlobalApi from '@/utils/GlobalApi';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function ProjectDetail({ params }: any) {
    const path = usePathname();
    const [product, setProduct] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = () => {
        GlobalApi.getProductById(params.projectId).then((response) => {
            // console.log(response.data.data);
            setProduct(response.data.data);
            getProductByCategory(response.data.data.category);
        });
    };

    const getProductByCategory = (category: any) => {
        GlobalApi.getProductsByCategory(category).then((response) => {
            // console.log(response.data.data);
            setProducts(response.data.data);
        });
    };

    return (
        <div className="px-12 md:px-28 lg:px-40 py-12 md:py-16">
            <Breadcrumb path={path} />
            <div className="flex flex-col sm:flex-row mt-10 gap-5 lg:gap-8">
                <ProjectBanner product={product} />
                <ProjectInfo product={product} />
            </div>

            <div className="mt-20">
                <h2 className="text-xl font-medium mb-4">Similiar Project</h2>
                <ProductList productList={products} />
            </div>
        </div>
    );
}

export default ProjectDetail;
