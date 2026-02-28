import mongoose from "mongoose";

const db = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("database connected"))
    .catch(()=>console.log("database not connected"))
};

export default db;