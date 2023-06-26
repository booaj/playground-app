import axios from 'axios';

const requestCars = async () => {
	try {
		const res = await axios.get(`http://127.0.0.1:5000/`, {
			headers: {},
			params: {}
		});
        return res
	} catch (err) {
		console.log(err);
	}
};

export default requestCars