const axios = require('axios');
const baseUrl = 'https://api.themoviedb.org/3';

module.exports = app => {
	app.get('/getNowPlaying', async (req, res) => {
		try {
			const url = `${baseUrl}/movie/now_playing?api_key=${
				process.env.API_KEY
			}&language=en-US&page=1`;
			const response = await axios.get(url);
			res.send(response.data);
		} catch (err) {
			console.error(err);
			res.send(err);
		}
	});
};
