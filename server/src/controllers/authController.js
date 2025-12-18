import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res)=>{
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json ({message: "User already exists"});
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password:hashedPassword,
        });

        res.status(201).json({
            message: "User registered successfully",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
            },
        });
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};

export const loginUser = async (req, res)=>{
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message:"Email and password are required"});
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
            },
        });
    }catch(error){
        res.status(500).json({message:"Server Error!"});
    }
};