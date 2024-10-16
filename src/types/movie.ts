export type TMovie = {
	_id: string;
	name: string;
	slug: string;
	origin_name: string;
	thumb_url: string;
	poster_url: string;
	year: number;
};

export type TMovieResponse = {
	items: Array<TMovie>;
	pathImage: string;
};
