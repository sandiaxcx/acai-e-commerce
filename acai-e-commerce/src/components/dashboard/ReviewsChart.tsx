import { Chart } from "chart.js";
import { useRef, useEffect } from "react";
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
    const reviews = product.comments.flat().map((comment) => ({
        review: comment.review,
        date: comment.date,
    }));

    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                type: "line",
                data: {
                    labels: reviews.map((review) => review.date),
                    datasets: [
                        {
                            label: "Ratings",
                            data: reviews.map((review) => review.review),
                            backgroundColor: "#6c319c76",
                            borderColor: "#6c319c",
                            borderWidth: 2,
                            fill: true,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            return () => {
                chart.destroy();
            };
        }
    }, [reviews]);
    
    return (
        <section className='reviewsChartContainer'>
            <h2>Reviews Ratings Chart</h2>
            <canvas ref={chartRef}></canvas>
            <p>These ratings are over the course of the last 12 months.</p>
        </section>
    );
}
