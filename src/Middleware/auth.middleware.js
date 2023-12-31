import { verifyToken } from "../Services/generateAndVerifyToken.js";
import userModel from "../../DB/model/user.model.js"

export const auth = async (req, res, next) =>{
    try{
        const {authorization} = req.headers;


      if(!authorization?.startsWith(process.env.BEARERKEY)){
        return res.json({message:"invalid bearer key"});
    }
    const token = authorization.split(process.env.BEARERKEY)[1];// it return the second part which is without bearer key

    if(!token){
        return res.json({message:"invalid token"});
    }

    const decoded = verifyToken(token);

    const authUser = await userModel.findById(decoded.id).select(" userName email");
    if(!authUser){
        return res.json({message:"not register account"});
    }
    
    req.id=decoded.id;
    next();
    }catch(error){
        return res.json({message:"catch",error:error.stack});
    }
}