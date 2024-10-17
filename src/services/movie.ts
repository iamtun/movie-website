import { movieAPIService } from "@/libs/axios/factories";
import { TMovieResponse, TMovieResponseWrappedData } from "@/types/movie";

class MovieService {
	constructor() {}

	async getNewMovieUpdated(page: number = 1) {
		return movieAPIService.get<TMovieResponse>(
			`/danh-sach/phim-moi-cap-nhat?page=${page}`,
		);
	}

	async searchMoveByKeyword(keyword: string) {
		return movieAPIService.get<TMovieResponseWrappedData>(
			`/v1/api/tim-kiem?keyword=${keyword}`,
		);
	}
}

export default MovieService;
