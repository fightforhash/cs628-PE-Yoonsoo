# Input

The "Cities Application" takes user input through form fields and navigation links. Users can add a new city by entering its name, country, population, and additional details on the Add City page. They can also click on city names in the Cities List to view detailed information about each city. All user inputs are handled using controlled form components and React's state management.

# Process

The application uses React Router to manage navigation between different views: Cities List, Add City, and City Details. When users add a city, the new data is stored in the app's state, and the user is redirected back to the updated Cities List. The useParams hook fetches route parameters to display specific city details. The component structure ensures that the app dynamically updates based on user actions without reloading the page.

# Output

The output includes three main views: Cities List, which displays all cities as clickable links; City Details, which shows selected city details like country and population; and Add City, where users can add new city data. After adding a city, the user is redirected to the updated Cities List, now including the new city. The app provides a clean interface for viewing and managing city information.
