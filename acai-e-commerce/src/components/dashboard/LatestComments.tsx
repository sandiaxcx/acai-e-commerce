import '../../styles/latest-comments.scss';

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

interface LatestCommentsProps {
    product: Product;
}

function convertReviewToStars(review: number): string {
    const fullStars = Math.floor(review);
    const halfStar = review % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return '★'.repeat(fullStars) + '☆'.repeat(emptyStars) + (halfStar ? '☆' : '');
}

export default function LatestComments({ product }: LatestCommentsProps) {
    const comments = product.comments.flat();
    // const latestComments = comments.slice(0, 5);
    const latestComments = comments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

    return (
        <section className='latestCommentsContainer'>
            {latestComments.map(comment => (
                <div key={comment.id} className='individualComment'>
                    <img src="https://i.pinimg.com/originals/91/2c/e1/912ce19bfeadb1e9e2b7cee8f0a4f1bc.jpg" alt="" />
                    <p>{comment.text}</p>
                    <div className='review'>
                        {convertReviewToStars(comment.review)} ({comment.review.toFixed(1)}/5)
                    </div>
                    <p>{comment.date}</p>
                </div>
            ))}
        </section>
    );
}
