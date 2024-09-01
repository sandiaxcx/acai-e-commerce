import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "../../styles/sales-charts.scss";


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

interface SalesChartProps {
    product: Product;
}

export default function SalesChart({ product }: SalesChartProps) {

    const [months, setMonths] = useState(12);
    const chartRef = useRef<HTMLCanvasElement>(null);

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

    const data = generateData(months);

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
                        },
                    ],
                },
            });
            return () => {
                chart.destroy();
            };
        }
    }, [data]);

    return (
        <section className="salesChartContainer">
            <h2>{product.name} Sales Chart</h2>
            <canvas ref={chartRef}></canvas>
            <div className="buttons">
                <button onClick={() => setMonths(12)}>Last 12 months</button>
                <button onClick={() => setMonths(6)}>Last 6 months</button>
                <button onClick={() => setMonths(3)}>Last 3 months</button>
                <button onClick={() => setMonths(1)}>Last month</button>
            </div>
    </section>
    );
};