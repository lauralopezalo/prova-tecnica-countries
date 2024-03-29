# My React Country App

This is a sample React application that displays a list of countries and allows users to view details of each country.

## Project Structure

The project is structured as follows:

- **`components/`**: Contains reusable UI components used in the application.
- **`pages/`**: Includes page components representing different routes of the application.
- **`services/`**: Contains a service function `getCountries.js` to fetch country data.
- **`routes/`**: Defines the routing configuration for the application using `react-router-dom`.
- **`App.js`**: Main component that fetches country data and renders the router component.
- **`index.js`**: Entry point of the React application.
- **`tests/`**: Contains unit tests for components using `@testing-library/react` and `vitest` for testing utilities.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lauralopezalo/prova-tecnica-countries.git
2. Navigate to the project directory:

   ```bash
   cd prova-tecnica-countries
3. Install dependencies:

   ```bash
   npm install
4. Start the development server:

   ```bash
   npm run dev
## Testing
To run the unit tests for components, use the following command:

    
     npm run test


## Technologies Used

- React
- React Router
- Material-UI
- Axios
- Vitest
- Testing Library
