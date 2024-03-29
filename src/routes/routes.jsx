import { BrowserRouter, Route, Routes } from "react-router-dom";

import PropTypes from "prop-types";
import CountryDetails from "../components/CountryDetails";
import CountryList from "../pages/CountryList";

import NotFound from "../pages/NotFound";

const Router = ({ countries }) => (
	<BrowserRouter>
		<Routes>
			<Route
				path='/'
				element={
					<div>
						<CountryList countries={countries} />
					</div>
				}
			/>

			<Route path='/country/:id' element={<CountryDetails countries={countries} />} />

			<Route path='*' element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

Router.propTypes = {
	countries: PropTypes.array.isRequired,
};

export default Router;
