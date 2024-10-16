import BaseAPIService from "..";

const movieAPIConfig = {
	baseURL: process.env.NEXT_PUBLIC_MOVIE_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
};

class MovieAPIService extends BaseAPIService {
	constructor() {
		super(movieAPIConfig);
	}
}

export default MovieAPIService;
