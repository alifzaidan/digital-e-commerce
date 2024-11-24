import Image from 'next/image';
import React from 'react';

function ProjectBanner({ product }: any) {
    return (
        <div>
            <Image src={product.banner && product.banner.url} alt={product.title} width={700} height={700} className="rounded-lg object-cover" />
        </div>
    );
}

export default ProjectBanner;
