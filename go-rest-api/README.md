# GO Rest API

Hi! This project explores a RESTful API built with GO and Gin.

**Built with** <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" height="30px"/>

<br>

## How to start application
* Just execute the **main.exe** executable ;)

<br>

## Endpoints
#### GET Items
    GET http://localhost:3030/items

#### GET fetchItem
    GET http://localhost:3030/fetchItem/:id

#### POST newItem
    POST http://localhost:3030/newItem
    Content-Type: application/json
    {
        "id": string >= 6,
        "description": string,
        "verified": bool
    }