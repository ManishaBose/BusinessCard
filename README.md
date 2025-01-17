# E-Business Card App

This project is a simple full-stack app that allows users to create, view, update and delete e-business cards.

## Features

### Frontend

- **Reusable Card Component**:
  - Displays a person's:
    - Name
    - Short description
    - Interests section
    - Social Media Handle buttons (LinkedIn, Twitter, etc.)
  - Accepts props to customize content.
- **Card Management Page**:
  - Users can add new cards by providing input through a form.
  - Cards are displayed dynamically on the page.
- **CRUD Operations**:
  - Users can create, read, update, and delete cards directly from the frontend.

### Backend

- **CRUD API**:
  - Backend server handles all basic CRUD operations for the cards.
  - Data is stored in a mongodb database.
- **JWT Authentication**:
  - Users must authenticate to perform certain operations.
  - Tokens are used to secure API endpoints.

### Additional Features

- Designed using Material UI.
- Backend and frontend are fully integrated.

## Technologies Used

### Frontend

- **React**
- **CSS** for styling

### Backend

- **Node.js** with **Express.js**
- **Zod** for input validation
- **JWT** for authentication
- **Database**: MongoDB with **Mongoose**
