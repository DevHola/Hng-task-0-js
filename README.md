# Webservice Project

This project is a simple web service built using the Express framework in node. It provides an endpoint that returns a JSON response with an email, the current datetime, and a GitHub URL.

## Running Locally

To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/DevHola/Hng-task-0-js.git
    cd hng
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Run the application:
    ```sh
    npm run start
    ```

The application will start on `http://localhost:8080`.

## Endpoint

### GET /

**URL:** `http://localhost:8080/`

**Method:** `GET`

**Response Format:** JSON

**Response Example:**
```json
{
    "email": "connectola@yahoo.com",
    "current_datetime": "2023-10-05T14:48:00Z",
    "github_url": "github.com/devhola/hng-level-0-task"
}
```

## Example Usage

To test the endpoint, you can use `curl` or any API testing tool like Postman.

**Using curl:**
```sh
curl http://localhost:8080/
```

**Using Postman:**
1. Open Postman and create a new GET request.
2. Set the URL to `http://localhost:8080/`.
3. Send the request and you should see the JSON response.

## CORS Configuration

The application is configured to allow requests from `http://localhost:8080` with the following settings:
- Allowed Methods: `GET`, `POST`, `PUT`, `DELETE`
- Allowed Headers: `Origin`
- Exposed Headers: `Content-Length`
- Allow Credentials: `true`
- Max Age: `12 hours`
