import { Chart } from "chart.js";
import { useEffect, useRef, useState } from "react";
import "../../styles/conversion-rate-chart.scss";

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

interface ConversionRateChartProps {
    product: Product;
}

export default function ConversionRateChart({ product }: ConversionRateChartProps) {
    
    const [months, setMonths] = useState(12);

    const generateData = (months: number) => {
        const data = [];
        const now = new Date();
        for (let i = 0; i < months; i++) {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            data.unshift({
                date: date.toISOString().slice(0, 7),
                conversionRate: Math.random() * 0.1 + 0.05,
            });
        }
        return data;
    };

    const data = generateData(months);

    const chartRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                type: "line",
                data: {
                    labels: data.map((data) => data.date),
                    datasets: [
                        {
                            label: "Conversion Rate",
                            data: data.map((data) => data.conversionRate),
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
                chart.destroy();
            };
        }
    }, [data]);

    return (
        <section className="conversionRateChartContainer">
            <h2>{product.name} Conversion Rate</h2>
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