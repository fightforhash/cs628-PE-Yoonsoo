## Input
The program accepts user input through a web form. Users can add, edit, and delete recipes. Each recipe consists of three fields. The first field is the **Recipe Name**, which is entered as a text input. The second field is **Ingredients**, where users list the required ingredients in a textarea. The third field is **Instructions**, where users provide step-by-step cooking instructions in a textarea.

## Process
The React frontend processes user interactions by managing state with `useState` and handling API calls using `fetch()`. When a user submits a form, the application sends a request (`POST`, `PUT`, or `DELETE`) to the backend, which is powered by an Express server and MongoDB. The backend stores, updates, or removes recipes based on these requests.

## Output
The application displays the list of available recipes and their details dynamically. After adding or updating a recipe, users are redirected to the updated recipe list. If a recipe is deleted, it is removed from the display in real time.