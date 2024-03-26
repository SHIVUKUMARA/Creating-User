const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const colors = require("colors");
const connectDb = require("./config/db");


// mongoDB func call
connectDb();


// rest obj
const app = express()

// view engine
app.set("view engine", "pug")
app.set('views', './views')

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
// for time stamp
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"))


//view routes
app.get("/", (req, res) => {
    res.render("first")
    });


app.use('/api/v1/contact-form', require("./routes/userRoutes"))

// port number
const PORT = 5000

// listener
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}` .bgBlue)
})