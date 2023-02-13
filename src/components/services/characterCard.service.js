import axios from 'axios';

export const rickAndMortyAPI = async () => {
	try {
		const URL = 'https://rickandmortyapi.com/api/character';
		// const {data} = await axios.get(URL);
		const response = await axios.get(URL);
		return response.data.results;
	} catch (error) {
		console.log(error);
	}
};
