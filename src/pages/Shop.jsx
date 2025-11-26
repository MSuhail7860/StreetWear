import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Filter, Search, X } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Shop = () => {
    const products = useSelector(state => state.products.items);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Filter States
    const [search, setSearch] = useState(searchParams.get('search') || '');
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [selectedSizes, setSelectedSizes] = useState([]);

    // Constants
    const categories = ['All', 'Men', 'Women', 'Kids'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', '4Y', '6Y', '8Y', '10Y'];

    // Filter Logic
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesSize = selectedSizes.length === 0 || product.sizes.some(s => selectedSizes.includes(s));

            return matchesSearch && matchesCategory && matchesPrice && matchesSize;
        });
    }, [search, selectedCategory, priceRange, selectedSizes, products]);

    const toggleSize = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    return (
        <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Mobile Filter Toggle */}
                <div className="md:hidden flex justify-between items-center">
                    <h1 className="text-2xl font-bold font-heading">Shop</h1>
                    <Button variant="outline" size="sm" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                        <Filter className="w-4 h-4 mr-2" /> Filters
                    </Button>
                </div>

                {/* Sidebar Filters */}
                <aside className={`md:w-64 space-y-8 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
                    <div>
                        <h3 className="font-bold mb-4 flex items-center justify-between">
                            Filters
                            <button className="md:hidden" onClick={() => setIsFilterOpen(false)}>
                                <X className="w-4 h-4" />
                            </button>
                        </h3>

                        {/* Search */}
                        <div className="mb-6">
                            <div className="relative">
                                <Input
                                    placeholder="Search products..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="pl-10"
                                />
                                <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="mb-6">
                            <h4 className="font-medium mb-3">Category</h4>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={selectedCategory === cat}
                                            onChange={() => setSelectedCategory(cat)}
                                            className="text-black focus:ring-black"
                                        />
                                        <span>{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="mb-6">
                            <h4 className="font-medium mb-3">Price Range: ${priceRange[0]} - ${priceRange[1]}</h4>
                            <input
                                type="range"
                                min="0"
                                max="200"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                className="w-full accent-black"
                            />
                        </div>

                        {/* Sizes */}
                        <div>
                            <h4 className="font-medium mb-3">Size</h4>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => toggleSize(size)}
                                        className={`px-3 py-1 text-sm border rounded-md transition-colors ${selectedSizes.includes(size)
                                            ? 'bg-black text-white border-black'
                                            : 'bg-white text-gray-700 border-gray-200 hover:border-black'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="mb-6 hidden md:flex justify-between items-center">
                        <h1 className="text-3xl font-bold font-heading">
                            {selectedCategory === 'All' ? 'All Products' : `${selectedCategory}'s Collection`}
                        </h1>
                        <span className="text-gray-500">{filteredProducts.length} results</span>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                            <Button
                                variant="outline"
                                className="mt-4"
                                onClick={() => {
                                    setSearch('');
                                    setSelectedCategory('All');
                                    setPriceRange([0, 200]);
                                    setSelectedSizes([]);
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
