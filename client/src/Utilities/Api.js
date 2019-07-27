import axios from 'axios';
const baseUrl = 'http://localhost:5000';

export default {
	movies() {
		const url = baseUrl + '/getNowPlaying';
		return {
			getMoviesList: () => {
				return axios.get(url);
			},
			buyTickets: payload => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						if (payload.card === '0000') reject({ status: 500 });
						resolve({ status: 200 });
					}, 4000);
				});
			}
		};
	}
};
