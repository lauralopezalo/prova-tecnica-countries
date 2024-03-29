import {
	Box,
	Container,
	FormControl,
	Grid,
	InputLabel,
	Link,
	List,
	ListItem,
	ListItemText,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const chunk = (arr, size) =>
	Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => arr.slice(index * size, index * size + size));

const CountryList = ({ countries }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedRegion, setSelectedRegion] = useState("");

	const regions = [...new Set(countries.map((country) => country.region))];

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleRegionChange = (event) => {
		setSelectedRegion(event.target.value);
	};

	const filteredCountries = countries.filter(
		(country) =>
			country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(selectedRegion === "" || country.region === selectedRegion)
	);

	const columnsCount = 3;
	const columnsData = chunk(filteredCountries, Math.ceil(filteredCountries.length / columnsCount));

	return (
		<Container
			sx={{
				minHeight: "100vh",
				minWidth: "100vw",
			}}>
			<Box>
				<Grid container spacing={3}>
					<Grid
						item
						xs={12}
						md={6}
						lg={3}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							maxHeight: "100vh",
						}}>
						<FormControl fullWidth>
							<TextField
								id='search'
								label='Search by name'
								value={searchTerm}
								onChange={handleSearchChange}
								fullWidth
								margin='normal'
							/>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel>Region</InputLabel>
							<Select
								id='region'
								value={selectedRegion}
								label='region'
								onChange={handleRegionChange}
								fullWidth>
								<MenuItem value=''>All</MenuItem>
								{regions.map((region) => (
									<MenuItem key={region} value={region}>
										{region}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12} md={6} lg={9}>
						<Typography variant='h2' sx={{ my: 3 }}>
							Countries List
						</Typography>
						<Grid container spacing={3}>
							{columnsData.map((column, index) => (
								<Grid key={index} item xs={12} sm={6} md={4}>
									<List>
										{column.map((country) => (
											<ListItem key={country.cca3}>
												<Link
													component={RouterLink}
													to={`/country/${country.cca3}`}
													underline='hover'>
													<ListItemText primary={country.name.common} />
												</Link>
											</ListItem>
										))}
									</List>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

CountryList.propTypes = {
	countries: PropTypes.array.isRequired,
};

export default CountryList;
