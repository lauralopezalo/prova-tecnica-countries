import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import CountryList from "../pages/CountryList";

describe("CountryList test: ", () => {
	let countries = [];

	beforeEach(() => {
		countries = [
			{ cca3: "USA", name: { common: "United States of America" }, region: "Americas" },
			{ cca3: "CAN", name: { common: "Canada" }, region: "Americas" },
			{ cca3: "GBR", name: { common: "United Kingdom" }, region: "Europe" },
		];
	});

	afterEach(cleanup);

	it("should render component", () => {
		render(
			<BrowserRouter>
				<CountryList countries={countries} />
			</BrowserRouter>
		);
	});

	it("should render country", () => {
		render(
			<BrowserRouter>
				<CountryList countries={countries} />
			</BrowserRouter>
		);
		expect(screen.getByText("Canada")).toBeTruthy();
	});

	it("should filter countries based on search term", () => {
		render(
			<BrowserRouter>
				<CountryList countries={countries} />
			</BrowserRouter>
		);

		const searchInput = screen.getByLabelText("Search by name");
		fireEvent.change(searchInput, { target: { value: "United" } });

		expect(screen.getByText("United States of America")).toBeTruthy();
		expect(screen.getByText("United Kingdom")).toBeTruthy();
		expect(screen.queryByText("Canada")).toBeNull();
	});

	it("should navigate to country details page on link click", () => {
		render(
			<BrowserRouter>
				<CountryList countries={countries} />
			</BrowserRouter>
		);

		const firstCountryLink = screen.getByText("United States of America");
		fireEvent.click(firstCountryLink);

		expect(window.location.pathname).toBeTruthy("/country/USA");
	});
});
