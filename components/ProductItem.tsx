import { ChevronRightSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ProductItem({ product }: any) {
    return (
        <Link href={`/project-detail/${product.documentId}`}>
            <div className="hover:border-gray-300 border border-white p-1 rounded-lg">
                <Image src={product.banner.url} alt={product.title} width={400} height={350} className="rounded-t-lg h-32 md:h-52 object-cover" />
                <div className="flex justify-between items-center gap-3 p-3 bg-gray-100 rounded-b-lg">
                    <div>
                        <h2 className="font-medium line-clamp-1">{product.title}</h2>
                        <p className="font-medium text-sm text-gray-400 flex gap-2">
                            <ChevronRightSquare className="h-5 w-5" />
                            {product.category}
                        </p>
                    </div>
                    <h2 className="font-medium">${product.pricing}</h2>
                </div>
            </div>
        </Link>
    );
}

export default ProductItem;
