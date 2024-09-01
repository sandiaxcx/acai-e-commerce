
import Footer from "../components/layout/Footer";
import { useState } from "react";
import productData from "../data/products.json"
import SalesChart from "../components/dashboard/SalesChart";
import ConversionRateChart from "../components/dashboard/ConversionRateChart";
import ReviewsChart from "../components/dashboard/ReviewsChart";
import LatestComments from "../components/dashboard/LatestComments";
import ProductInventory from "../components/dashboard/ProductInventory";
import "../styles/dashboard.scss";

const { products } = productData;

export default function Dashboard() {
    const [selectedProductId, setSelectedProductId] = useState<number>(products[0]?.id || 1);
    const selectedProduct = products.find(product => product.id === selectedProductId);

    return (
        <section className="dashboardContainer">
                        <div className="selectorContainer">
                <select 
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(Number(e.target.value))}>
                {products.map(product => (
                    <option key={product.id} value={product.id}>
                        {product.name}
                    </option>
                ))}
                </select>
            </div>
            {selectedProduct && (
                <section className="chartsContainer">
                    <div className="topContainer">
                        <ProductInventory product={selectedProduct} />
                    </div>
                    <div className="midContainer">
                        <SalesChart product={selectedProduct} />    
                        <ConversionRateChart product={selectedProduct} />
                    </div>                    
                    <div className="botContainer">
                        <ReviewsChart product={selectedProduct}/>
                        <LatestComments product={selectedProduct} />
                    </div>
                </section>
                
            )}
            <Footer />
    </section>
    )};