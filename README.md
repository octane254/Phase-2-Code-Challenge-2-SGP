# Smart Goal Planner App

This is a React-based Goal Tracker application built with Vite. The app allows users to add, list, and manage their goals in a simple and intuitive interface.

## Features

- Add new goals using a form
- View a list of goals
- Manage individual goal items
- Overview of all goals
- Built with React functional components and hooks
- Fast development with Vite and hot module replacement (HMR)
- ESLint configured for code quality

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Development Server

Start the development server with hot reloading:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port shown in the terminal) to view the app.

## Building for Production

To build the app for production, run:
```bash
npm run build
```
The production-ready files will be generated in the `dist` directory.

## Project Structure

```
/src
  ├── main.jsx          # Entry point of the React app
  ├── Components/       # React components
  │   ├── App.jsx       # Main app component
  │   ├── GoalForm.jsx  # Form to add new goals
  │   ├── GoalList.jsx  # List of goals
  │   ├── GoalItem.jsx  # Individual goal item
  │   └── Overview.jsx  # Overview component
  ├── assets/           # Static assets like images
/public                 # Public files served as-is
index.html              # Main HTML file
package.json            # Project metadata and scripts
vite.config.js          # Vite configuration
db.json                 # Local data file (if used)
```

## Dependencies and Tools

- React
- Vite
- ESLint
- Other dependencies as listed in `package.json`

## Notes

- This project uses Vite for fast development and build.
- ESLint is configured for code quality and consistency.
- The `db.json` file may be used for local data or mock API purposes.

## License

This project is open source and available under the MIT License.
