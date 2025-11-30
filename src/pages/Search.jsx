import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(lowerCaseQuery) ||
            product.category.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
    }, [searchQuery]);

    return (
        <div className="container-custom py-12 min-h-[60vh]">
            <div className="max-w-2xl mx-auto mb-12">
                <h1 className="text-3xl font-heading font-bold mb-6 text-center">
                    SEARCH <span className="text-accent">PRODUCTS</span>
                </h1>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for t-shirts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-lg"
                        autoFocus
                    />
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                </div>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500">No products found for "{searchQuery}"</p>
                    <p className="text-gray-400 mt-2">Try checking your spelling or using different keywords.</p>
                </div>
            )}
        </div>
    );
};

export default Search;
