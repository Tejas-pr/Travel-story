const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const config = require("./config.json");
require("dotenv").config();
const { authenticateToken } = require("./utilities");

const User = require("./models/user.model");
const TravelStory = require("./models/travelStory.model");

app.use(express.json());
app.use(cors({ origin: "*" }));

mongoose.connect(config.connectionString);

//crete-account
app.post("/create-account",async (req,res) => {
    try{
        const {fullName, email, password} = req.body;

        if(!fullName || !email || !password) {
            return res.status(400).json({
                error: true,
                message: "All fields are required"
            })
        }

        const isUser = await User.findOne({ email });
        if(isUser){
            return res.status(400).json({
                error: true,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            fullName,
            email,
            password: hashedPassword
        });

        await user.save();

        const accessToken = jwt.sign({ userId : user._id }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "72h"
        });

        return res.status(201).json({
            error: false,
            user: { fullname: user.fullName, email: user.email},
            accessToken,
            message: "Registration successfull !!"
        });
    }catch(error){
        return res.status(500).json({
            error: true,
            message: error.message
        })
    }
})

//Login
app.post("/login",async (req,res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                error: true,
                message: "All fields are required"
            });
        }

        const isUser = await User.findOne({ email });
        if(!isUser){
            return res.status(400).json({
                error: true,
                message: "User does not exist, Please SignUp!"
            });
        }

        const isPasswordValidate = await bcrypt.compare(password, isUser.password);
        if(!isPasswordValidate){
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const accessToken = await jwt.sign({ userId: isUser._id }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "72h"
        })

        return res.status(200).json({
            error: false,
            user: { fullName: isUser.fullName, email: isUser.email},
            accessToken,
            message: "Login successfull !!"
        });


    }catch(error){
        return res.status(500).json({
            error: true,
            message: error.message
        })
    }
});

//get users
app.get("/get-user", authenticateToken, async (req,res) => {
    try{
        const { userId } = req.user;
        
        const isUser = await User.findOne({ _id: userId });

        if(!isUser){
            return res.sendStatus(401);
        }

        return res.json({
            user: isUser,
            message: "Successfull !!"
        });

    }catch(error){
        return res.status(500).json({
            error: true,
            message: error.message
        })
    }
});

//Add Travel story
app.post("/add-travel-story", authenticateToken, async (req,res) => {
    try{
        const { title, story, visitedLocation, visitedDate, imageUrl } = req.body;
        const { userId } = req.user;

        if(!title || !story || !visitedLocation || !visitedDate || !imageUrl) {
            return res.status(400).json({
                error: true,
                message: "All fields are required"
            });
        }


    }catch(error){
        return res.status(500).json({
            error: true,
            message: error.message
        });
    }
});

app.listen(8000);
module.exports = app;