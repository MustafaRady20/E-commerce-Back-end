const mongoose = require("mongoose")
const dbConnection = () => {

    mongoose.connect("mongodb+srv://mostafarady515:pT8DCw58viNEfqXj@cluster0.w6yypfy.mongodb.net/").then((conn) => {
        console.log(`Database Connected : ${conn.connection.host} Database Name : ${conn.connection.name}`)
    }).catch((err) => {
        console.error(`Database Error : ${err}`)
        process.exit(1)
    })
}



module.exports = dbConnection