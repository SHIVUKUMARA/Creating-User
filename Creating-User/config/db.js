const mongoose = require("mongoose")
// const colors = require("colors")

// function to connect mongoDB database

const connectDb = async () => {
    try{
        const conn = await mongoose.connect(
          "Add Your MongoDB URL"
        ); 
        console.log("Connected to mongodb".bgGreen); 
    } catch(error){
        console.log(`Mongodb Error ${error.message}`);
        process.exit(1)
    }
}


module.exports = connectDb
