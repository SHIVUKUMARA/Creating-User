const mongoose = require("mongoose")
// const colors = require("colors")

// function to connect mongoDB database

const connectDb = async () => {
    try{
        const conn = await mongoose.connect(
          "mongodb+srv://shivu:C5DKbGUNqId0txNj@cluster0.pedjj5f.mongodb.net/nodejs?retryWrites=true&w=majority"
        ); 
        console.log("Connected to mongodb".bgGreen); 
    } catch(error){
        console.log(`Mongodb Error ${error.message}`);
        process.exit(1)
    }
}


module.exports = connectDb