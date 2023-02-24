export type errorHandling = {
	error: boolean;
	message: string;
};
export type DoujindesuLatest = {
	title: string;
	chapter: string;
	thumbnail: string;
	url: string | any;
	tags: any | string;
}[];
export type DoujindesuSearch = {
	title: string;
	type: string;
	status: string;
	score: string;
	thumbnail: string;
	url: string;
	tags: any | string;
}[];
export type DoujindesuDetail = {
	title: string;
	titles: string;
	thumbnail: string;
	metadata?: {};
	links: {
		title: string;
		url: string;
	}[];
};
export type OtakudesuLatest = {
	title: string;
	day: string;
	date: string;
	url: string;
	thumbnail: string;
}[];
export type OtakudesuSearch = {
	title: string;
	genres: string;
	status: string;
	rating: string;
	url: string;
	thumbnail: string;
}[];
export type OtakudesuDetail = {};
export type YoutubeSearchResult = {
	title: string;
	thumbnail: string;
	duration: string;
	uploaded: string;
	views: string;
	url: string;
}[];
export type AnoboyLatest = {
	title: string;
	update: string;
	thumbnail: string;
	url: string;
}[];
export type AnoboyDetail = {
	title: string;
	judi: string;
	urls: { source: string; url: string; resolution: string }[];
};
export type StatusWaIndonesiaAny = {
	id: string;
	title: string;
	video_thumb: string;
	video_url: string;
	download: string;
	date_time_i?: string;
}[];
export type UnsplashSearchResults = {
	id: string;
	created_at: string;
	updated_at: string;
	urls: { [key: string]: any };
	links: {
		download: string;
	};
	user: {
		username: string;
		bio: string;
		social: { [key: string]: any };
	};
}[];
