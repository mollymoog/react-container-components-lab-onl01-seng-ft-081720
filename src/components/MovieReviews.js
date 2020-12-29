import React from 'react';

const Review = ({headline}) => {
    return <h3 key={headline}>{headline}</h3>
};

const MovieReviews = ({reviews}) => {
    return (<div className="review-list">
                {reviews.map(Review)}
            </div>
    )
};

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews;
