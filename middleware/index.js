const express = require("express");
const app = express();
const port = 3000;

//3, 4: function middleware:
const loggingMiddleware = (req, res, next) => {
    //logging the current time to the console:
    const currenTime = new Date();
    console.log(`Request received at ${currenTime}`);
    //send a custom header to the client:
    res.setHeader("X-Codaisseur-Time", currenTime)
    next();
    //to test:  http GET :3000/
}
//Add middleware at the application level:
app.use(loggingMiddleware); //it will rund for all endpoints or requests
//get the path 
app.get("/", (req, res) => res.send("Hello"));
app.get("/karem", (req, res) => res.send("Hello karem"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Next, middleware function called 'failRandomlyMiddleware 
//at the route level:
const failRandomlyMiddleware = (req, res, next) => {
    const randomNumber = Math.random()
    if (randomNumber > 0.5) { //if randonnumber is greater than 0.5 or 500% then send a 500 or error 

        res.status(500).end()

    } else { // if random number is less than 0.5 then continue and will run the route handler

        next();
    }

}
//route level 
app.get("/path1", failRandomlyMiddleware, (req, res, next) => {
    res.send("hello david") //if we pass the middleware then only then will return the greeting 
});
//add another route called foo
app.get("/foo", (req, res, next) => {
    res.send("time for dinner") //if we pass the middleware then only then will return the greeting 
});
