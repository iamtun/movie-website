import { AxiosResponse } from "axios";
import BaseAPIService from "..";

const movieAPIConfig = {
	baseURL: "https://httpstat.us",
	headers: {
		"Content-Type": "application/json",
	},
};

class MovieAPIService extends BaseAPIService {
	constructor() {
		super(movieAPIConfig);

		this.instance.interceptors.response.use((response: AxiosResponse) => {
			const { status, data } = response;

			if (status === 204) {
				// no content
				return true;
			}

			return data;
		});
	}
}

export default MovieAPIService;
