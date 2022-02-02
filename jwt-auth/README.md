# JWT Authorization with Login

Hi! This project explores a scenario where a user logs into an account, and signs a JWT - which is used later on to auth the user and filter the content that is shown.

**Build with** <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30px"/>

<br>

## How to start application
    // To install dependencies
    yarn
    
    // Then, to run the server
    yarn start

<br>

## Routes
#### POST Login
    POST http://localhost:3001/login
    Content-Type: application/json
    {
    	"username": "Milton"
    }


#### GET Posts
    GET http://localhost:3001/posts
    Authorization {insert your JWT here}

