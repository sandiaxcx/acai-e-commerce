
import Footer from "../components/layout/Footer";
import { useState } from "react";
import productData from "../data/products.json"
import SalesChart from "../components/dashboard/SalesChart";
import ConversionRateChart from "../components/dashboard/ConversionRateChart";
import ReviewsChart from "../components/dashboard/ReviewsChart";

const { products } = productData;

export default function Dashboard() {
    const [selectedProductId, setSelectedProductId] = useState(products[0].id);
    const selectedProduct = products.find(product => product.id === selectedProductId);

    return (
        <section className="dashboardContainer">
            {selectedProduct && (
                <section className="chartsContainer">
                    <div className="midContainer">
                        <SalesChart product={selectedProduct} />    
                        <ConversionRateChart product={selectedProduct} />
                        <ReviewsChart product={selectedProduct} />
                    </div>
                </section>
            )}
            <Footer />
    </section>
    )};