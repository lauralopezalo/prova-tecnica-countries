import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import CountryDetails from "../components/CountryDetails";

describe("CountryDetails", () => {
	const countries = [
		{
			cca3: "USA",
			name: { common: "United States of America" },
			region: "Americas",
			capital: ["Washington, D.C."],
		},
		{ cca3: "CAN", name: { common: "Canada" }, region: "Americas", capital: ["Ottawa"] },
		{ cca3: "GBR", name: { common: "United Kingdom" }, region: "Europe", capital: ["London"] },
	];

	it('should render "Country not found" when country does not exist', () => {
		render(
			<MemoryRouter initialEntries={["/country/XYZ"]}>
				<CountryDetails countries={countries} />
			</MemoryRouter>
		);

		expect(screen.getByText("Country not found")).toBeTruthy();
	});
});
