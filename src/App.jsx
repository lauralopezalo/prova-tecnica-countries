import { useEffect, useState } from "react";
import Router from "./routes/routes";
import getCountries from "./services/getCountries";

const App = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const countriesData = await getCountries();
			setCountries(countriesData);
		};

		fetchData();
	}, []);

	return (
		<div>
			<Router countries={countries} />
		</div>
	);
};

export default App;
