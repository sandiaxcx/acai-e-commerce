import DownArrow from '../../assets/images/down.webp';
import '../../styles/product-inventory.scss';

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
interface ProductInventoryProps {
    product: Product;
}

export default function ProductInventory({ product }: ProductInventoryProps) {
    return (
        <section className="productInventory">
            <h1>Current Inventory available</h1>
            <p>Stock: {product.stock} units<img src={DownArrow} alt="" id="downArrow"/></p>
        </section>
    );
}