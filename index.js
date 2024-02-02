const express = require("express");
require("dotenv").config({path:".env"})
const morgan = require("morgan")
const dbConnection = require("./config/db")

const app = express();
dbConnection()
if(process.env.MODE === "development"){
    app.use(morgan("dev"));
    console.log(process.env.MODE);
}


app.use("api/v1/",require("./routes/categoryRoutes"))

const PORT = process.env.PORT || 5000
app.listen(PORT,(req,res)=>{
    console.log(`server running on port ${PORT}`);
})