import { movieAPIService } from "@/libs/axios/factories";
import { TMovieResponse } from "@/types/movie";

class MovieService {
	constructor() {}

	async getNewMovieUpdated(page: number = 1) {
		return movieAPIService.get<TMovieResponse>(
			`/danh-sach/phim-moi-cap-nhat?page=${page}`,
		);
	}
}

export default MovieService;
