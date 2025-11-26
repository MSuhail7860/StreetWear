import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.items);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
            <div className="container-custom flex justify-between items-center h-20">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tighter font-heading">
                    STREET<span className="text-accent">WEAR</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="font-medium hover:text-accent transition-colors">Home</Link>
                    <Link to="/shop" className="font-medium hover:text-accent transition-colors">Shop</Link>
                    <Link to="/about" className="font-medium hover:text-accent transition-colors">About</Link>
                    <Link to="/contact" className="font-medium hover:text-accent transition-colors">Contact</Link>
                </div>

                {/* Icons */}
                <div className="hidden md:flex items-center space-x-6">
                    <button className="hover:text-accent transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <Link to="/cart" className="hover:text-accent transition-colors relative">
                        <ShoppingBag className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <Link to="/login" className="hover:text-accent transition-colors">
                        <User className="w-5 h-5" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 animate-fade-in">
                    <div className="container-custom py-4 flex flex-col space-y-4">
                        <Link to="/" className="font-medium hover:text-accent" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/shop" className="font-medium hover:text-accent" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                        <Link to="/about" className="font-medium hover:text-accent" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/contact" className="font-medium hover:text-accent" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        <div className="border-t border-gray-100 pt-4 flex items-center space-x-6">
                            <Link to="/cart" className="flex items-center space-x-2 font-medium hover:text-accent" onClick={() => setIsMenuOpen(false)}>
                                <ShoppingBag className="w-5 h-5" />
                                <span>Cart ({cartCount})</span>
                            </Link>
                            <Link to="/login" className="flex items-center space-x-2 font-medium hover:text-accent" onClick={() => setIsMenuOpen(false)}>
                                <User className="w-5 h-5" />
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
