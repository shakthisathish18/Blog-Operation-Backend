# Blog API

A simple RESTful API for managing blog posts with features like authentication, pagination, and comments.

## Endpoints

### GET /posts
Returns a list of all blog posts with pagination.  
Query parameters: 
- `page` (default: 1)  
- `limit` (default: 5)

### GET /posts/:id
Returns a single blog post by ID.

### POST /posts
Creates a new blog post.  
Requires `title`, `content`, and `author` in the body.  
Authentication via API Key required.

### PUT /posts/:id
Updates an existing blog post by ID.  
Requires `title`, `content`, and `author` in the body.  
Authentication via API Key required.

### DELETE /posts/:id
Deletes a blog post by ID.  
Authentication via API Key required.

### POST /posts/:id/comments
Adds a comment to a post.  
Requires `comment` in the body.  
Authentication via API Key required.

## Authentication
Basic API key authentication is used.  
Pass the key as a header `api-key: your-api-key-here`.

## Testing
Unit tests are written using Mocha and Chai.  
Run tests with `npm test`.

## Deployment
You can deploy this API to platforms like Heroku.

## Example Requests
- **GET** /posts?page=1&limit=5
- **POST** /posts (with JSON body)
- **POST** /posts/1/comments (with JSON body for comment)


## TEST WITH POSTMAN

Testing with Postman: Example Payload and Endpoints

1. Create POST
    URL: http://localhost:3000/posts
    Method: POST
    Headers:
        api-key: P001-14-02-2025
    Body (JSON):
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "author": "John Doe"
}

2.GET All Posts
URL: http://localhost:3000/posts?page=1&limit=5
Method: GET
Headers:

    api-key: P001-14-02-2025

Response: Should return a list of blog posts with pagination.

3. Get a Single Post (GET /posts/:id)

    URL: http://localhost:3000/posts/1
    Method: GET
    Headers:
        api-key: P001-14-02-2025
    Response: Should return the blog post with the ID of 1.

4. Update a Post (PUT /posts/:id)

    URL: http://localhost:3000/posts/1
    Method: PUT
    Headers:
        api-key: P001-14-02-2025
    Body (JSON):

{
  "title": "Updated Blog Post Title",
  "content": "Updated content for the blog post.",
  "author": "John Doe"
}

5. Delete a Post (DELETE /posts/:id)

    URL: http://localhost:3000/posts/1
    Method: DELETE
    Headers:
        api-key: P001-14-02-2025
    Response: Should delete the post with the ID of 1. The response will be a 204 No Content status with no body.

6. Add a Comment to a Post (POST /posts/:id/comments)

    URL: http://localhost:3000/posts/1/comments
    Method: POST
    Headers:
        api-key: P001-14-02-2025
    Body (JSON):

{
  "comment": "This is a great post! Keep it up."
}

