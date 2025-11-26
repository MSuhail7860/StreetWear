import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import Button from '../components/ui/Button';

const Cart = () => {
    const { items, total } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    if (items.length === 0) {
        return (
            <div className="container-custom py-20 text-center">
                <h2 className="text-3xl font-bold font-heading mb-4">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/shop">
                    <Button>Start Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container-custom py-12">
            <h1 className="text-3xl font-bold font-heading mb-8">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Cart Items */}
                <div className="flex-1 space-y-6">
                    {items.map((item) => (
                        <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-6 p-4 border border-gray-100 rounded-xl">
                            <div className="w-24 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold font-heading text-lg">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                        <div className="flex gap-4 mt-2 text-sm text-gray-600">
                                            <span>Size: {item.selectedSize}</span>
                                            <span className="flex items-center gap-1">
                                                Color: <span className="w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: item.selectedColor }} />
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => dispatch(removeFromCart({ id: item.id, selectedSize: item.selectedSize, selectedColor: item.selectedColor }))}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => dispatch(updateQuantity({ ...item, quantity: Math.max(1, item.quantity - 1) }))}
                                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                                        >
                                            <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="font-medium w-6 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch(updateQuantity({ ...item, quantity: item.quantity + 1 }))}
                                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                                        >
                                            <Plus className="w-3 h-3" />
                                        </button>
                                    </div>
                                    <p className="font-bold text-lg">${item.price * item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:w-96">
                    <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                        <h3 className="text-xl font-bold font-heading mb-6">Order Summary</h3>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${total}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax</span>
                                <span>${(total * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${(total * 1.1).toFixed(2)}</span>
                            </div>
                        </div>

                        <Link to="/checkout">
                            <Button className="w-full">
                                Proceed to Checkout <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
