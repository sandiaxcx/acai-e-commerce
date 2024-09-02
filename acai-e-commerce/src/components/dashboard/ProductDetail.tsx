import { useState } from 'react';
import '../../styles/product-detail.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface Product {
    id: number;
    name: string;
    image1: string;
    image2: string;
    description: string;
}

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {

    const [currentImage, setCurrentImage] = useState(0);

    const images = [product.image1, product.image2];

    const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
};

    return (
        <section className="productDetail">
            <h2>{product.name}</h2>
            <div className="slider">
            <button onClick={handlePrevImage}>
                <i className="fas fa-arrow-left"></i>
                </button>
                <img src={images[currentImage]} alt={product.name} />
                <button onClick={handleNextImage}>
                <i className="fas fa-arrow-right"></i>
                </button>
            </div>
            <p><span> Product Description:</span> {product.description}</p>
        </section>
    );
}