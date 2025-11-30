import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-heading tracking-tighter">
                            STREET<span className="text-accent">WEAR</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium streetwear for the modern generation. Quality, style, and comfort in every stitch.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-bold mb-6">Shop</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/shop?category=men" className="hover:text-accent transition-colors">Men</Link></li>
                            <li><Link to="/shop?category=women" className="hover:text-accent transition-colors">Women</Link></li>
                            <li><Link to="/shop?category=kids" className="hover:text-accent transition-colors">Kids</Link></li>
                            <li><Link to="/shop?sort=newest" className="hover:text-accent transition-colors">New Arrivals</Link></li>
                            <li><Link to="/shop?sort=trending" className="hover:text-accent transition-colors">Trending</Link></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="font-bold mb-6">Help</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/track-order" className="hover:text-accent transition-colors">Track Order</Link></li>
                            <li><Link to="/returns" className="hover:text-accent transition-colors">Returns & Exchanges</Link></li>
                            <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping Info</Link></li>
                            <li><Link to="/faqs" className="hover:text-accent transition-colors">FAQs</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold mb-6">Stay in the Loop</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-accent transition-colors"
                            />
                            <button className="btn-accent w-full">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Streetwear Brand. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
