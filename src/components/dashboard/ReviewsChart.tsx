import { Chart } from "chart.js";
import { useRef, useEffect, useState } from "react";
import "../../styles/reviews-chart.scss";

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

interface ReviewsChartProps {
    product: Product;
}

export default function ReviewsChart({ product }: ReviewsChartProps) {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [months, setMonths] = useState(12);

    const generateData = (months: number) => {
        const now = new Date();
        const monthlyReviews = Array(months).fill(0).map((_, i) => {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const dateString = date.toISOString().slice(0, 7);
            return { date: dateString, reviews: 0 };
        }).reverse();

        //add reviews into the monthlyReviews array
        product.comments.flat().forEach(comment => {
            const commentDate = new Date(comment.date).toISOString().slice(0, 7);
            const monthData = monthlyReviews.find(m => m.date === commentDate);
            if (monthData) {
                monthData.reviews += comment.review;
            }
        });

        return monthlyReviews;
    };

    const data = generateData(months);

    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                type: "line",
                data: {
                    labels: data.map(data => data.date),
                    datasets: [
                        {
                            label: "Reviews",
                            data: data.map(data => data.reviews),
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
        <section className="reviewsChartContainer">
            <h2>{product.name} Reviews</h2>
            <canvas ref={chartRef}></canvas>
            <div className="buttons">
                <button onClick={() => setMonths(12)}>Last 12 months</button>
                <button onClick={() => setMonths(6)}>Last 6 months</button>
                <button onClick={() => setMonths(3)}>Last 3 months</button>
                <button onClick={() => setMonths(1)}>Last month</button>
            </div>
        </section>
    );
}