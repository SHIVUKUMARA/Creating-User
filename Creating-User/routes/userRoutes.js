const express = require("express");
const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser
} = require("../controller/usercontroller");


// routes router obj

const router = express.Router()


// create new user
router.post("/create-user", createUser)

// routes
// METHOD GET ALL USER  
router.get('/get-users', getAllUsers)

// get single user
router.get("/get-users/:id", getSingleUser);

// update user
router.put("/update-user/:id", updateUser);


// delete user
router.delete("/delete-user/:id", deleteUser);

// export modules
module.exports = router