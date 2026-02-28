import bcrypt from 'bcryptjs';
import user from '../models/user.model.js';
import generatetoken from '../middleware/jwt/jwt.middleware.js';





const login = (req,res)=>{
    
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).send("please enter all fields");
    }

    let logged;

    user.findOne({email})
    .then((found)=>{
        if(!found){
            return Promise.reject({
                status:401,
                message:"invalid credentials"
            })
        }
            logged = found;
            return bcrypt.compare(password,found.password);
    })
    .then((matched)=>{
        if(!matched){
            return Promise.reject({
                status:401,
                message:"invalid credentials"
            })
        }

        const token = generatetoken(logged._id);

        return res.status(200).json({message:"login successful",token});
    })
    .catch((err)=>{
        if(err.status){
            return res.status(err.status).send(err.message);
        }
        return res.status(500).send("server error");
    })


};

export default login;