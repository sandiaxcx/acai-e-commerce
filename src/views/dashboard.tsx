
import Footer from "../components/layout/Footer";
import { useState } from "react";
import productData from "../data/products.json"
import SalesChart from "../components/dashboard/SalesChart";
import ConversionRateChart from "../components/dashboard/ConversionRateChart";
import ReviewsChart from "../components/dashboard/ReviewsChart";
import LatestComments from "../components/dashboard/LatestComments";
import "../styles/dashboard.scss";
import ProductDetail from "../components/dashboard/ProductDetail";

//retrieves products from productData from json file
const { products } = productData;

export default function Dashboard() {

    //initialize state for the selected product id 
    //set the initial value to the id of the first product in the 'products' array, otherweise it will be 1 by default if products array is empty
    const [selectedProductId, setSelectedProductId] = useState<number>(products[0]?.id || 1);
    
    //find the product in the products array that matches the selectedProductId and store it in selectedProduct
    const selectedProduct = products.find(product => product.id === selectedProductId);

    return (
        <section className="dashboardContainer">
            <div className="selectorContainer">
                {/* dropdown selector controlled by the selectedProductId state */}
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
            {/* render the following section only if a selectedProduct exists */}
            {selectedProduct && (
                <section className="chartsContainer">
                    <div className="topContainer">
                        {/* render the ProductDetail component and pass the selectedProduct as a prop */}
                        <ProductDetail product={selectedProduct} />
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