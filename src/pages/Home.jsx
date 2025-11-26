import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../components/ui/ProductGrid';
import Button from '../components/ui/Button';

const Home = () => {
    const products = useSelector(state => state.products.items);

    if (!products) {
        console.error('Products not found in state');
        return <div className="p-8 text-center">Loading products...</div>;
    }

    const menProducts = products.filter(p => p.category === 'Men').slice(0, 6);
    const womenProducts = products.filter(p => p.category === 'Women').slice(0, 6);
    const kidsProducts = products.filter(p => p.category === 'Kids').slice(0, 6);

    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80&w=1920"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
                <div className="relative z-10 text-center space-y-6 max-w-3xl px-4 animate-slide-up">
                    <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter">
                        REDEFINE YOUR <span className="text-accent">STYLE</span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        Premium T-shirts for the modern rebel. Quality that speaks for itself.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/shop">
                            <Button variant="accent" size="lg">Shop Now</Button>
                        </Link>
                        <Link to="/shop?category=men">
                            <Button variant="secondary" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                                Men's Collection
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="container-custom">
                <h2 className="text-3xl font-bold font-heading mb-8 text-center">Shop by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Men', 'Women', 'Kids'].map((category) => (
                        <Link
                            key={category}
                            to={`/shop?category=${category.toLowerCase()}`}
                            className="group relative h-96 overflow-hidden rounded-xl"
                        >
                            <img
                                src={
                                    category === 'Men' ? 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' :
                                        category === 'Women' ? 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&q=80&w=800' :
                                            'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800'
                                }
                                alt={category}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="text-3xl font-bold font-heading mb-2">{category}</h3>
                                <span className="flex items-center text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Men's Collection */}
            <ProductGrid products={menProducts} title="Men's Collection" />

            {/* Banner */}
            <section className="bg-accent py-20">
                <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white space-y-4 max-w-xl">
                        <h2 className="text-4xl font-bold font-heading">Summer Collection 2025</h2>
                        <p className="text-lg opacity-90">Get ready for the heat with our latest summer drops. Breathable fabrics, bold prints, and unmatched comfort.</p>
                        <Button variant="secondary" className="bg-white text-accent border-white hover:bg-gray-100">
                            Check it Out
                        </Button>
                    </div>
                </div>
            </section>

            {/* Women's Collection */}
            <ProductGrid products={womenProducts} title="Women's Collection" />

            {/* Kids' Collection */}
            <ProductGrid products={kidsProducts} title="Kids' Collection" />
        </div>
    );
};

export default Home;
