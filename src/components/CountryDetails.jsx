import {
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const CountryDetails = ({ countries }) => {
	const { id } = useParams();
	const country = countries.find((c) => c.cca3 === id);

	return (
		<Container
			sx={{
				minHeight: "100vh",
				minWidth: "100vw",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Card sx={{ maxWidth: 650, padding: "20px" }}>
				<CardContent>
					{country ? (
						<>
							<Typography variant='h2' align='center' sx={{ mb: 3 }}>
								{country.name.common}
							</Typography>
							<Grid container spacing={4}>
								<Grid item xs={12} md={6}>
									<ListItem>
										<ListItemText
											primaryTypographyProps={{ variant: "body2" }}
											secondaryTypographyProps={{ variant: "h6" }}
											primary='Official Name'
											secondary={country.name.official}
										/>
									</ListItem>
								</Grid>
								<Grid item xs={12} md={6}>
									<ListItem>
										<ListItemText
											primaryTypographyProps={{ variant: "body2" }}
											secondaryTypographyProps={{ variant: "h6" }}
											primary='Capital'
											secondary={country.capital?.[0]}
										/>
									</ListItem>
								</Grid>
							</Grid>
							<Grid container spacing={4}>
								<Grid item xs={12} md={6}>
									<List>
										<ListItem>
											<ListItemText
												primaryTypographyProps={{ variant: "body2" }}
												secondaryTypographyProps={{ variant: "body1" }}
												primary='Region'
												secondary={country.region}
											/>
										</ListItem>
										<ListItem>
											<ListItemText
												primaryTypographyProps={{ variant: "body2" }}
												secondaryTypographyProps={{ variant: "body1" }}
												primary='Subregion'
												secondary={country.subregion}
											/>
										</ListItem>
										<ListItem>
											<ListItemText
												primaryTypographyProps={{ variant: "body2" }}
												secondaryTypographyProps={{ variant: "body1" }}
												primary='Language'
												secondary={Object.values(country.languages).join(", ")}
											/>
										</ListItem>
									</List>
								</Grid>
								<Grid item xs={12} md={6}>
									<List>
										<ListItem>
											<ListItemText
												primaryTypographyProps={{ variant: "body2" }}
												secondaryTypographyProps={{ variant: "body1" }}
												primary='Currency'
												secondary={Object.values(country.currencies)
													.map((currency) => `${currency.name} (${currency.symbol})`)
													.join(", ")}
											/>
										</ListItem>
										<ListItem>
											<ListItemText
												primaryTypographyProps={{ variant: "body2" }}
												secondaryTypographyProps={{ variant: "body1" }}
												primary='Timezone'
												secondary={country.timezones?.[0]}
											/>
										</ListItem>
										<ListItem>
											<ListItemText
												primaryTypographyProps={{ variant: "body2" }}
												secondaryTypographyProps={{ variant: "body1" }}
												primary='Borders'
												secondary={country.borders?.join(", ")}
											/>
										</ListItem>
									</List>
								</Grid>
							</Grid>
							<CardActions sx={{ justifyContent: "center" }}>
								<Button variant='outlined' href={country?.maps?.googleMaps} target='_blank'>
									View on Google Maps
								</Button>
								<Button variant='outlined' href={country?.maps?.openStreetMaps} target='_blank'>
									View on OpenStreetMap
								</Button>
							</CardActions>
						</>
					) : (
						<Typography variant='h4'>Country not found</Typography>
					)}
				</CardContent>
			</Card>
		</Container>
	);
};

CountryDetails.propTypes = {
	countries: PropTypes.array.isRequired,
};

export default CountryDetails;
