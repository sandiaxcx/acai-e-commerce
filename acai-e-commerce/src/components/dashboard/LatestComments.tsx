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
//convert number reviews into string of stars
function convertReviewToStars(review: number): string {
    const fullStars = Math.floor(review); //calculate full stars
    const halfStar = review % 1 >= 0.5 ? 1 : 0; //calculate if there should be a half stars
    const emptyStars = 5 - fullStars - halfStar; //calculate empty stars

    // return stars string according to reviews
    return '★'.repeat(fullStars) + '☆'.repeat(emptyStars) + (halfStar ? '☆' : '');
}

export default function LatestComments({ product }: LatestCommentsProps) {
    //flatten comments array because of nested array
    const comments = product.comments.flat();

    //sort comments by date and get the latest 5
    const latestComments = comments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

    return (
        <section className='latestCommentsContainer'>
            {latestComments.map(comment => (
                <div key={comment.id} className='individualComment'>
                    <img src="https://i.pinimg.com/originals/91/2c/e1/912ce19bfeadb1e9e2b7cee8f0a4f1bc.jpg" alt="Anonymous profile picture" />
                    <div className="reviewContainer">
                        <div className='review'>
                            {convertReviewToStars(comment.review)} ({comment.review.toFixed(1)}/5)
                            <p>{comment.date}</p>
                        </div>
                        <div className="textContainer">
                            <p>{comment.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
