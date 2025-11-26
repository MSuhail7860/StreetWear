import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import Badge from './Badge';

const ProductCard = ({ product }) => {
    const { id, title, price, image, category, featured } = product;

    return (
        <div className="group relative">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 relative">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                    {featured && <Badge variant="accent">Featured</Badge>}
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="p-3 bg-white rounded-full shadow-lg hover:bg-black hover:text-white transition-colors">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`/product/${id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {title}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
