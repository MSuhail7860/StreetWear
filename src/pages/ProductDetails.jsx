import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Minus, Plus, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import { addToCart } from '../store/cartSlice';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);
    const product = products.find(p => p.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div className="text-center py-20">Product not found</div>;
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert('Please select size and color');
            return;
        }

        dispatch(addToCart({
            ...product,
            selectedSize,
            selectedColor,
            quantity
        }));

        alert('Added to cart!');
    };

    return (
        <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-8">
                    <div>
                        <div className="flex gap-2 mb-4">
                            {product.isNew && <Badge variant="primary">New Arrival</Badge>}
                            {product.isTrending && <Badge variant="accent">Trending</Badge>}
                        </div>
                        <h1 className="text-4xl font-bold font-heading mb-2">{product.title}</h1>
                        <p className="text-2xl font-medium text-gray-900">${product.price}</p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Selectors */}
                    <div className="space-y-6">
                        {/* Colors */}
                        <div>
                            <h3 className="font-medium mb-3">Color: <span className="text-gray-500">{selectedColor}</span></h3>
                            <div className="flex gap-3">
                                {product.colors.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color ? 'border-black scale-110' : 'border-transparent hover:scale-105'
                                            }`}
                                        style={{ backgroundColor: color.toLowerCase() === 'white' ? '#f3f4f6' : color.toLowerCase() }}
                                        title={color}
                                    >
                                        {selectedColor === color && <div className="w-2 h-2 bg-white rounded-full shadow-sm" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sizes */}
                        <div>
                            <h3 className="font-medium mb-3">Size: <span className="text-gray-500">{selectedSize}</span></h3>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`min-w-[3rem] h-12 px-4 border rounded-lg font-medium transition-all ${selectedSize === size
                                            ? 'bg-black text-white border-black'
                                            : 'bg-white text-gray-900 border-gray-200 hover:border-black'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <h3 className="font-medium mb-3">Quantity</h3>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-6 border-t border-gray-100">
                        <Button
                            className="flex-1"
                            size="lg"
                            onClick={handleAddToCart}
                        >
                            <ShoppingBag className="w-5 h-5 mr-2" />
                            Add to Cart
                        </Button>
                        <Button variant="outline" size="lg" className="px-4">
                            <ShieldCheck className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Truck className="w-4 h-4" />
                            <span>Free shipping over $100</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            <span>30-day return policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
