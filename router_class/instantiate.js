//ROUTER CLASS 
//Import express
const express = require("express");
const { request } = require("express");
//Destructure its router class
const { Router } = express;
//Create a new router instance named router
const router = new Router();
//Register and endpoint with router.get that listens on the /hi/:name
router.get(
    "/hi/:name",
    (request, response) => {
        // const name = request.params.name //define name inside 
        response.send(`Hi ${request.params.name}`) //or here request.params.name if is only one varaible
    });


//To use Router's route, Register it as a middleware with an express server:
const app = express();
app.use(router);
//Listen on:
const port = 4001;
app.listen(port, () => console.log("listening on port " + port));
