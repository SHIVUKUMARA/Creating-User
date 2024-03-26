const usermodel = require("../models/usermodel")

const getUser = (req,res) =>{
    res.send({
        success:true,
        message: "Data coming from Model Views Controller",
    })
}

const addUser = (req, res) => {
  const { inputData } = req.body;
  res.json({
    success: true,
    message: `Welcome to ${inputData}`,
  });
};

const createUser = async(req,res) =>{
   try{
      const {name, email, password} = req.body
      const user = await usermodel.create({
        name, email, password
      })
      res.status(201).json({
        message:"success",
        user,
      })
   } catch(error){
    console.log(`Error in creating user = ${error}`);
    res.status(400).json({
      message: "false",
      error,
    })
   }
}


// getAllUsers
const getAllUsers = async (req, res) => {
  try{
     const users = await usermodel.find({})
     res.status(200).json({
      success:true,
      totalUsers: users.length,
      users
     })
  }catch(error){
    res.status(400).json({
      success:false,
      msg:"get all user error",
      error: error.message,
    })
  }
}

// get single user
const getSingleUser = async(req,res) =>{
   try{
      const user = await usermodel.findById(req.params.id);
      if(user){
        res.status(200).json({
          success: true,
          user,
        });
      }else{
        res.status(400).send('user not found')
      }
    }catch(error){
      res.status(404).json({
      message:"single user error",
      error: error.message
    })
   }
}

// update user
const updateUser = async(req,res) =>{
    const user = await usermodel.findById(req.params.id)
    if(user){
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if(req.body.password){
        user.password = req.body.password
      }
      const updatedUser = await user.save()
      res.status(201).json({
        success:true,
        _id:updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email,
        isAdmin:updatedUser.isAdmin,
      })
    } else{
      res.status(400);
      throw new Error("No User with provided id")
    }
}


// delete user
const deleteUser = async(req,res) =>{
  const user = await usermodel.findById(req.params.id)
  if(user){
    await user.remove(); 
    res.status(200).json({
      success: true,
      message:'Deleted the user'
    })
  }else{
    res.status(400);
    throw new Error("No User with this ID")
  }
}


module.exports = { createUser, getAllUsers, getSingleUser, updateUser, deleteUser };