import axios from "axios";

const getCountries = async () => {
	try {
		const url = "https://restcountries.com/v3.1/all";
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Error fetching countries:", error);
	}
};

export default getCountries;
