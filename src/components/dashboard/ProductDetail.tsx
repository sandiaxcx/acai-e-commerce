import { useState } from 'react';
import '../../styles/product-detail.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductInventory from './ProductInventory';

interface Product {
    id: number;
    name: string;
    stock: number;
    image1: string;
    image2: string;
    description: string;
    comments: {
        id: number;
        text: string;
        review: number;
        date: string;
    }[] | {
        id: number;
        text: string;
        review: number;
        date: string;
    }[][];
}

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {

    //state to track the current image in the slider
    const [currentImage, setCurrentImage] = useState(0);

    //array of product images to be used in the slider
    const images = [product.image1, product.image2];

    //move to the next image in the slider
    const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    //move to the previous image in the slider
    const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
};

    return (
        <section className="productDetail">
            <h2>{product.name}</h2>
            <div className="pictureTextContainer">
                <div className="slider">
                    <button onClick={handlePrevImage}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    {/* display current image in the slider */}
                    <img src={images[currentImage]} alt={product.name} />
                    <button onClick={handleNextImage}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div className="descriptionStockContainer">
                    <p><span> Product Description:</span> {product.description}</p>
                    <ProductInventory product={product} />
                </div>
            </div>
        </section>
    );
}