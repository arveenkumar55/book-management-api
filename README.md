
# Book Management API

A simple Book Management API built with NestJS. This API allows you to manage a collection of books with basic CRUD operations. The fields included for each book are `title`, `author`, and `isbn`.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Using Swagger UI](#using-swagger-ui)
- [API Usage Examples](#api-usage-examples)
- [Automated Testing](#automated-testing)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/arveenkumar55/book-management-api.git
   cd book-management-api
   ```

2. **Install Dependencies:**

   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```


## Running the Application

1. **Start the Application:**

   You can start the application using the following command:

   ```bash
   npm run start
   ```

   The application will run on `http://localhost:3000`.

2. **Running in Watch Mode:**

   For development purposes, you can start the application in watch mode:

   ```bash
   npm run start:dev
   ```

## API Endpoints

The following API endpoints are available:

- **`GET /books`**: Retrieve all books.
- **`GET /books/:id`**: Retrieve a book by ID.
- **`POST /books`**: Add a new book.
- **`PUT /books/:id`**: Update a book by ID.
- **`DELETE /books/:id`**: Delete a book by ID.

## Using Swagger UI

Swagger UI is integrated with this application, allowing you to explore and test the API endpoints through a web interface.

1. **Access Swagger UI:**

   Once the application is running, navigate to:

   ```bash
   http://localhost:3000/api-docs
   ```

   This will open the Swagger UI, where you can see all available endpoints, their required parameters, and response formats.

2. **Testing Endpoints:**

   - Select an endpoint from the list.
   - Fill in any required parameters.
   - Click the "Try it out" button to execute the API call.
   - View the response directly in the UI.

## API Usage Examples

Here are some example requests you can use to interact with the API:

### 1. Create a New Book

```bash
POST /books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565"
}
```

### 2. Retrieve All Books

```bash
GET /books
```

### 3. Retrieve a Book by ID

```bash
GET /books/1
```

### 4. Update a Book by ID

```bash
PUT /books/1
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "Scott Fitzgerald",
  "isbn": "9780743273565"
}
```

### 5. Delete a Book by ID

```bash
DELETE /books/1
```

## Automated Testing

Swagger can generate client SDKs in multiple programming languages using tools like Swagger Codegen or OpenAPI Generator. These clients can be used to create automated tests, making it easier to write test cases that interact with your API.