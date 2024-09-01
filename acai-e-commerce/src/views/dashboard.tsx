
import Footer from "../components/layout/Footer";
import { useState } from "react";
import productData from "../data/products.json"
import SalesChart from "../components/dashboard/SalesChart";
import ConversionRateChart from "../components/dashboard/ConversionRateChart";
import ReviewsChart from "../components/dashboard/ReviewsChart";
import LatestComments from "../components/dashboard/LatestComments";

const { products } = productData;

export default function Dashboard() {
    const [selectedProductId, setSelectedProductId] = useState<number>(products[0]?.id || 1);
    const selectedProduct = products.find(product => product.id === selectedProductId);

    if (!selectedProduct) {
        return <div>No product found</div>;
    }
    return (
        <section className="dashboardContainer">
            {selectedProduct && (
                <section className="chartsContainer">
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