import axios from "axios";

const proxyUrl = 'https://shielded-hamlet-43668.herokuapp.com/'
const host = "https://api.nytimes.com";
const key = "48f0781520b9472aa0a14cc22205d932";

export default {
	getArticles: (topic, startYear, endYear) => {
		const path = "/svc/search/v2/articlesearch.json"
		return axios.get(`${proxyUrl}${host}${path}?
			q=${topic}
			&begin_date=${startYear}0101
			&end_date=${endYear}0101
			&apikey=${key}`)
	}
};