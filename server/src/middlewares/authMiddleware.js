import jwt from "jsonwebtoken";

const authmiddleware = (req, res, next)=>{
    const authHeader = req.headers.authorization;


    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"Not authorized"});
    }

    try{
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }catch(error){
        return res.status(401).json({message:"Invalid token"});
    }
};

export default authmiddleware;