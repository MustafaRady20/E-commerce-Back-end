const mongoose = require("mongoose")


const dbConnection = async ()=>{
    try{
            const conn = await mongoose.connect(process.env.DB_URL)
    console.log(`Database connected successfully - ${conn.connection.host} - ${conn.connection.name}`)

    }
    catch(err){
        console.log(err)
        process.exit(1)
    }

}


module.exports = dbConnection