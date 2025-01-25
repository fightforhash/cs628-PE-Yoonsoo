Input

The program accepts predefined movie data as its input. Each movie has three attributes: title, genre, and releaseYear. The user interacts with the program by selecting a genre from a dropdown menu (<select>), which serves as the main input mechanism for filtering the movies. The dropdown dynamically lists all unique genres, along with an option for "All Genres" to reset the filter.

Process

When the user selects a genre from the dropdown menu, the program uses the useState hook in React to update the selectedGenre state. The movie list is filtered based on the selected genre using JavaScript’s filter method. If "All Genres" is selected, the entire list of movies is displayed. The program dynamically updates the user interface by re-rendering the filtered movies.

Output

The program outputs a responsive and styled movie list based on the user-selected genre. Each movie is displayed as a card with its title, genre, and releaseYear. The dropdown allows users to toggle between genres dynamically, ensuring the displayed movies are always relevant to the selected category. Additionally, hovering over a movie card highlights it for a more interactive experience.