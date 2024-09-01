import '../../styles/product-detail.scss';

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
    return (
        <section className="productDetail">
            <h2>{product.name}</h2>
            <img src={product.image1} alt={product.name} />
            <p>{product.description}</p>
        </section>
    );
}