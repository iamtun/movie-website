export type TMovie = {
	_id: string;
	name: string;
	slug: string;
	origin_name: string;
	thumb_url: string;
	poster_url: string;
	year: number;
};

export type TSlug = {
	_id: string;
	name: string;
	slug: string;
};

export type TMovieDetail = TMovie & {
	time: string;
	quality: string;
	lang: string;
	year: number;
	episode_current: string;
	type: string;
	category: Array<TSlug>;
	country: Array<TSlug>;
};

export type TSeoOnPage = {
	og_type: string;
	titleHead: string;
	descriptionHead: string;
	og_image: Array<string>;
	og_url: string;
};

export type TMovieResponse = {
	items: Array<TMovie>;
	pathImage: string;
};

export type TMovieResponseWrappedData = {
	data: {
		seoOnPage: TSeoOnPage;
		titlePage: string;
		items: Array<TMovieDetail>;
		APP_DOMAIN_CDN_IMAGE: string;
	};
};
