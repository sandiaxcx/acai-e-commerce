
import Footer from "../components/layout/Footer";
import { useState } from "react";
import productData from "../data/products.json"

const { products } = productData;

export default function Dashboard() {
    const [selectedProductId, setSelectedProductId] = useState(products[0].id);
    const selectedProduct = products.find(product => product.id === selectedProductId);
    
    
    return (
        <section className="dashboardContainer">
        <h1>Dashboard</h1>
        {selectedProduct && (
            <>

            </>
        )}
        <Footer />
    </section>
    )};