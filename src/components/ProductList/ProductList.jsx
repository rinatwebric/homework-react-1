import { images, products } from '../../data/data.js';
import { ProductCard } from '../ProductCard/ProductCard.jsx';

export const ProductList = () => {
    return (
        <div>
            {products.map((product) => {
                const randomIndex = Math.floor(Math.random() * images.length)
                const randomImage = images[randomIndex]

                return (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={randomImage}
                    />
                )
            })}
        </div>
    )
}