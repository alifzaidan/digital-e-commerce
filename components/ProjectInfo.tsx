import { CartContext } from '@/context/CartContext';
import GlobalApi from '@/utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import { AlertOctagon, BadgeCheck, ShoppingCartIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

function ProjectInfo({ product }: any) {
    const { user } = useUser();
    const router = useRouter();
    const { cart, setCart } = useContext(CartContext);

    const onAddToCartClick = () => {
        if (!user) {
            router.push('/sign-in');
            return;
        } else {
            const data = {
                data: {
                    username: user.fullName,
                    email: user.primaryEmailAddress?.emailAddress,
                    product: product.documentId,
                },
            };

            GlobalApi.addProductToCart(data).then(
                (response) => {
                    console.log('Product added to cart', response);
                    if (response) {
                        setCart((cart: any[]) => [
                            ...cart,
                            {
                                id: response.data.documentId,
                                product: product,
                            },
                        ]);
                    }
                },
                (error) => {
                    console.error('Error adding product to cart', error);
                }
            );
        }
    };

    return (
        <div>
            <h2 className="font-medium text-lg">{product.title}</h2>
            <p className="font-medium text-sm text-gray-400 flex gap-2">{product.category}</p>
            <p className="mt-5 font-medium text-sm text-gray-600 flex gap-2">
                {product.description &&
                    product.description[0] &&
                    product.description[0].children &&
                    product.description[0].children[0] &&
                    product.description[0].children[0].text}
            </p>
            <p className="text-sm font-medium flex gap-2 mt-5 text-gray-500">
                {product.instantDelivery ? <BadgeCheck className="text-green-500 h-5 w-5" /> : <AlertOctagon className="text-red-500 h-5 w-5" />}
                Eligible for Instant Delivery
            </p>
            <h2 className="font-medium text-2xl mt-5">${product.pricing}</h2>
            <button
                onClick={() => onAddToCartClick()}
                className="flex gap-2 mt-5 bg-primary text-white rounded-lg px-6 py-4 hover:bg-red-700 transition"
            >
                <ShoppingCartIcon className="h-5 w-5" />
                Add to Cart
            </button>
        </div>
    );
}

export default ProjectInfo;
