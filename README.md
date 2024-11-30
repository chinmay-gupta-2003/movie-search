# Cinema Time 🎥

Cinema Time is a responsive web application that allows users to search for movies using The Movie Database (TMDb) API. The application is built using **React** and includes features like caching, sorting, pagination, and cast display for a seamless user experience.

---

## Features 🚀

### 🔍 **Movie Search**

- Type at least **3 characters** in the search bar to start searching for movies.
- The search is case-insensitive and provides real-time results from the TMDb API.

### 📄 **Movie Details**

- View key information about a movie, including:
  - Title
  - Overview
  - Average Rating
  - Poster Image
- Option to display the **cast** of the movie with up to 5 actors shown initially. A tooltip displays additional cast members.

### 📊 **Sorting by Rating**

- Users can **sort movies by their rating** (highest to lowest) with a single click.

### 🔄 **Pagination**

- Navigate through movie results using **Previous** and **Next** buttons.
- Displays the current page and total pages available.

### ⚡ **Caching**

- Results are **cached** to reduce redundant API calls, improving performance and reducing latency.
- Cache is keyed based on the search query and the page number.

### ⏳ **Loading State**

- A **loading spinner** (via `react-spinners`) is displayed while fetching data from the API to enhance user feedback.

### 🎨 **Responsive Design**

- Fully responsive layout for an optimal experience on desktop, tablet, and mobile devices.

---

## Installation

1. Clone the repository:
   ```bash
   https://github.com/chinmay-gupta-2003/movie-search.git
   cd cinema-time
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the app in your browser at `http://localhost:3000`.

---

## Folder Structure 📂

```plaintext
src/
├── components/
│   ├── Header.js          # Header component with search bar
│   ├── Pagination.js      # Pagination controls
│   └── MovieDetails.js    # Movie details and cast
├── pages/
│   └── MovieList.js       # Main movie list page
├── restClient.js          # Axios instance for API calls
├── constants.js           # API constants
└── App.js                 # Main application entry point
```

---

## Components 🧩

### `Header`

- Displays the search bar and movie count.
- Updates the query state on input change.

### `MovieDetails`

- Renders details for a single movie.
- Fetches and displays the movie cast on button click.

### `Pagination`

- Controls for navigating between pages.
- Disables buttons when on the first or last page.

---

## API Integration 🌐

The app integrates with TMDb API using `Axios`. The following endpoints are used:

- **Search Movies**: `/search/movie`
- **Movie Credits**: `/movie/{movie_id}/credits`

All API requests include necessary parameters like `query`, `page`, and language settings.

---

## Customization 🎨

### Styling

- Uses Tailwind CSS for a modern and responsive design.
- You can customize the theme or styles in the `tailwind.config.js` file.

---

### Future Enhancements

- Add filters for genres, release year, etc.
- Implement infinite scrolling.
- Allow users to favorite or bookmark movies.
- Add a detailed movie page.

---

Happy Movie Searching! 🍿
