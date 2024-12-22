This is a Blogging API.

# Blog API

This Blog API is a server-side application built using Node.js, Express, and MongoDB. It allows users to manage blog posts and perform operations like user authentication, creating, reading, updating, and deleting blogs.

# Features

- **User Authentication**:
  - Sign up
  - Log in with JWT-based authentication
  - Authorization for protected routes

- **Blog Management**:
  - Create a blog post
  - Read all or specific blog posts
  - Update a blog post
  - Delete a blog post

- **Tech Stack**:
  - Node.js
  - Express
  - MongoDB (with Mongoose)

## Prerequisites

- Node.js (v14 or above)
- MongoDB (local or cloud-based)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd blog-api
   ```

2. **Install Dependencies**:

   bash
   npm install
   

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and configure the following variables:

   ```env
  MONGODB_CONNECTION_URL = mongodb+srv://layomief:layomief@blogapi.4ciss.mongodb.net/?retryWrites=true&w=majority&appName=BlogApi 
   JWT_SECRET=your_secret_key
   PORT=4001
   ```

4. **Start the Server**:

   ```bash
   npm start
   ```

   The server will run at `http://localhost:4001`.

# API Endpoints

# Authentication

| Method | Endpoint      | Description          |
|--------|---------------|----------------------|
| POST   | `/api/signup` | Register a new user  |
| POST   | `/api/login`  | Log in a user        |

# Blog Management

| Method | Endpoint        | Description                   |
|--------|-----------------|-------------------------------|
| GET    | `/api/blogs`    | Fetch all blog posts          |
| GET    | `/api/blogs/:id`| Fetch a single blog post      |
| POST   | `/api/blogs`    | Create a new blog post        |
| PUT    | `/api/blogs/:id`| Update an existing blog post  |
| DELETE | `/api/blogs/:id`| Delete a blog post            |

# Folder Structure

```plaintext
blog-api/
├── models/
│   ├── Blog.js         # Blog schema and model
│   ├── User.js         # User schema and model
├── controllers/
│   ├── authController.js  # Authentication logic
│   ├── blogController.js  # Blog CRUD logic
├── routes/
│   ├── authRoutes.js   # Authentication routes
│   ├── blogRoutes.js   # Blog routes
├── db.js               # MongoDB connection
├── app.js              # Main application entry point
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

# Example Usage

# Create a Blog Post

# Request:

```bash
POST /api/blogs
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "title": "The New Sun",
  "content": "This is the content of the new sun."
}
```

#### Response:

```json
{
  "status": true,
  "data": {
    "_id": "60d5f83f9c3b3f26d8d5e9c8",
    "title": "The New Sun",
    "content": "This is the content of the new sun.",
    "createdAt": "2023-12-21T12:34:56.789Z",
    "updatedAt": "2023-12-21T12:34:56.789Z"
  }
}
```

### Error Handling

- All errors return a JSON response with an appropriate status code and message:

```json
{
  "status": false,
  "message": "Error details here"
}

