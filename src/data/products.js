export const products = [
    // Men's T-Shirts
    {
        id: 101,
        title: 'Midnight Void Tee',
        category: 'Men',
        price: 45,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'White'],
        featured: true,
        description: 'Premium heavyweight cotton tee in deep black with minimal branding.'
    },
    {
        id: 102,
        title: 'Electric Pulse Graphic Tee',
        category: 'Men',
        price: 55,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
        sizes: ['M', 'L', 'XL'],
        colors: ['Black'],
        featured: true,
        description: 'Oversized fit with striking electric blue back print.'
    },
    {
        id: 103,
        title: 'Urban Essential White Tee',
        category: 'Men',
        price: 35,
        image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=800',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White'],
        featured: false,
        description: 'The perfect white tee. Soft, durable, and tailored fit.'
    },
    {
        id: 104,
        title: 'Cyberpunk Glitch Tee',
        category: 'Men',
        price: 48,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
        sizes: ['M', 'L', 'XL'],
        colors: ['Black', 'Charcoal'],
        featured: false,
        description: 'Futuristic glitch art print on a vintage wash black tee.'
    },
    {
        id: 105,
        title: 'Monochrome Box Logo Tee',
        category: 'Men',
        price: 42,
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=80&w=800',
        sizes: ['S', 'M', 'L'],
        colors: ['Black', 'White'],
        featured: false,
        description: 'Classic box logo design in monochrome.'
    },
    {
        id: 106,
        title: 'Neon Edge Performance Tee',
        category: 'Men',
        price: 50,
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black/Blue'],
        featured: true,
        description: 'Moisture-wicking fabric with neon blue accents.'
    },

    // Women's T-Shirts
    {
        id: 201,
        title: 'Cropped Electric Tee',
        category: 'Women',
        price: 38,
        image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&q=80&w=800',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Black', 'White'],
        featured: true,
        description: 'Boxy crop top with electric blue stitching details.'
    },
    {
        id: 202,
        title: 'Minimalist Boyfriend Tee',
        category: 'Women',
        price: 40,
        image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=800',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['White'],
        featured: true,
        description: 'Relaxed boyfriend fit in ultra-soft cotton.'
    },
    {
        id: 203,
        title: 'Noir Fitted Ribbed Tee',
        category: 'Women',
        price: 35,
        image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&q=80&w=800',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Black'],
        featured: false,
        description: 'Form-fitting ribbed tee, perfect for layering.'
    },
    {
        id: 204,
        title: 'Abstract Line Art Tee',
        category: 'Women',
        price: 45,
        image: 'https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&w=800',
        sizes: ['S', 'M', 'L'],
        colors: ['White', 'Black'],
        featured: false,
        description: 'Features a unique abstract line art print.'
    },
    {
        id: 205,
        title: 'V-Neck Essential',
        category: 'Women',
        price: 32,
        image: 'https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?auto=format&fit=crop&q=80&w=800',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'White', 'Grey'],
        featured: false,
        description: 'Classic V-neck silhouette for everyday wear.'
    },
    {
        id: 206,
        title: 'Sheer Overlay Mesh Tee',
        category: 'Women',
        price: 55,
        image: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?auto=format&fit=crop&q=80&w=800',
        sizes: ['S', 'M', 'L'],
        colors: ['Black'],
        featured: true,
        description: 'Edgy sheer mesh overlay tee for night outs.'
    },

    // Kids' T-Shirts
    {
        id: 301,
        title: 'Mini Rebel Graphic Tee',
        category: 'Kids',
        price: 25,
        image: 'https://images.pexels.com/photos/3662762/pexels-photo-3662762.jpeg?auto=compress&cs=tinysrgb&w=800',
        sizes: ['4Y', '6Y', '8Y', '10Y'],
        colors: ['Black', 'White'],
        featured: true,
        description: 'Cool graphic tee for the little rebels.'
    },
    {
        id: 302,
        title: 'Future Star Tee',
        category: 'Kids',
        price: 28,
        image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80&w=800',
        sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
        colors: ['White/Blue'],
        featured: true,
        description: 'Bright and bold design for future stars.'
    },
    {
        id: 303,
        title: 'Basic Soft Cotton Tee',
        category: 'Kids',
        price: 18,
        image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&q=80&w=800',
        sizes: ['2Y', '4Y', '6Y', '8Y', '10Y'],
        colors: ['Black', 'Grey', 'White'],
        featured: false,
        description: 'Super soft cotton tee for sensitive skin.'
    },
    {
        id: 304,
        title: 'Striped Street Tee',
        category: 'Kids',
        price: 22,
        image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800',
        sizes: ['4Y', '6Y', '8Y'],
        colors: ['Black/White'],
        featured: false,
        description: 'Classic black and white stripes.'
    },
    {
        id: 305,
        title: 'Pocket Detail Tee',
        category: 'Kids',
        price: 24,
        image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=800',
        sizes: ['6Y', '8Y', '10Y', '12Y'],
        colors: ['Navy', 'Black'],
        featured: false,
        description: 'Tee with a functional chest pocket.'
    },
    {
        id: 306,
        title: 'Logo Print Tee',
        category: 'Kids',
        price: 26,
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=800',
        sizes: ['4Y', '6Y', '8Y', '10Y'],
        colors: ['Black', 'White'],
        featured: true,
        description: 'Signature brand logo print.'
    }
];
