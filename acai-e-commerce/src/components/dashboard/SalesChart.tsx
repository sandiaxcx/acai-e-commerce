import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "../../styles/sales-charts.scss";


//define structure of Product object
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

//define structure of the props that SalesChart expects (from the dashboard component)
interface SalesChartProps {
    product: Product;
}

export default function SalesChart({ product }: SalesChartProps) {

    //state that keeps track of the number of months to display in the chart
    const [months, setMonths] = useState(12);

    //canvas element where the chart will be rendered
    const chartRef = useRef<HTMLCanvasElement>(null);

    //generate random sales data for the specified number of months
    const generateData = (months: number) => {
        const data = [];
        const now = new Date();
        for (let i = 0; i < months; i++) {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            data.unshift({
                date: date.toISOString().slice(0, 7),
                sales: Math.floor(Math.random() * 1000) + 500,            
            });
        }
        return data;
    };

    //generate sales data based on number of months
    const data = generateData(months);

    // hook to create the chart
    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                type: "line",
                data: {
                    labels: data.map((data) => data.date),
                    datasets: [
                        {
                            label: "Sales",
                            data: data.map((data) => data.sales),
                            borderColor: "#6c319c",
                            borderWidth: 2,
                            fill: false,
                            pointRadius: 5,
                            pointHoverRadius: 8,
                            pointBackgroundColor: "#6c319c",
                            pointHoverBackgroundColor: "rgba(108, 49, 156, 0.1)",
                            pointStyle: "circle",
                            pointHoverBorderColor: "#6c319c",
                            pointHoverBorderWidth: 2,
                        },
                    ],
                },
            });
            return () => {
                //destroy the chart when data is unmounted or updated
                chart.destroy();
            };
        }
    }, 
    //re-run the chart when data changes
    [data]);

    return (
        <section className="salesChartContainer">
            <h2>{product.name} Sales Chart</h2>
            <canvas ref={chartRef}></canvas>
            <div className="buttons">
                {/* change the number of months to display data accordingly on the chart */}
                <button onClick={() => setMonths(12)}>Last 12 months</button>
                <button onClick={() => setMonths(6)}>Last 6 months</button>
                <button onClick={() => setMonths(3)}>Last 3 months</button>
                <button onClick={() => setMonths(1)}>Last month</button>
            </div>
    </section>
    );
};