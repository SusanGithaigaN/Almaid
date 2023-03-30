# Almaid

Almaid is a React app ....

## Setup Requirements
* Ruby version : **2.7.4**
* Postman (for testing API endpoints)

## Setup Installation
```
    * Clone the repository
    * To set up the backend, run:
        - bundle install
    * To set up the frontend, run:    
        - npm install --prefix client
    * Run the following commands to get the entire project running:
        - foreman start -f Procfile.dev    
```

## Endpoints

> POST
```
    /users
```

* Create a new user
```
    {
        name: "string",
        tel_no: "string",
        email: "string",
        password: "string",
        username:"string"
    }
```

* Response