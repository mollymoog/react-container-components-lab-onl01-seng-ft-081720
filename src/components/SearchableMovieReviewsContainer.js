import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
            `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: "",
            reviews: []
        }
    };

    handleChange = event => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
            .then(resp => resp.json())
            .then(reviews => this.setState({ reviews: reviews.results}))
    };

    render() {
        return  <div className="searchable-movie-review">
                    <form onSubmit={this.handleSubmit}>
                        <input  id="search-input" 
                                type="text"
                                onChange={this.handleChange}
                            />
                        <button type="submit">Search</button>
                    </form>
                    {typeof this.state.reviews === 'object' && this.state.reviews.length > 0}
                    <MovieReviews reviews={this.state.reviews} />
                </div>
    }

}

export default SearchableMovieReviewsContainer