# Webservice Project

This project is a simple web service built using the Express framework in Node.js. It provides an endpoint that returns a JSON response with a classification of a given number, including properties such as prime, perfect, Armstrong, and odd/even, along with a fun fact from the Numbers API.

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

### GET /api/classify-number

**URL:** `http://localhost:8080/api/classify-number?number=28`

**Method:** `GET`

**Response Format:** JSON

**Response Example:**
```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": [
    "odd"
  ],
  "digit_sum": 10,
  "fun_fact": "28 is the sum of the totient function for the first nine integers."
}
```

## Example Usage

To test the endpoint, you can use `curl` or any API testing tool like Postman.

**Using curl:**
```sh
curl http://localhost:8080/api/classify-number?number=28
```

**Using Postman:**
1. Open Postman and create a new GET request.
2. Set the URL to `http://localhost:8080/api/classify-number?number=28`.
3. Send the request and you should see the JSON response.

## CORS Configuration

The application is configured to allow requests from `http://localhost:8080` with the following settings:
- Allowed Methods: `GET`, `POST`, `PUT`, `DELETE`
- Allowed Headers: `Origin`
- Exposed Headers: `Content-Length`
- Allow Credentials: `true`
- Max Age: `12 hours`
