import register_schema from "./zod.validation.js";



const validation = (schema) =>(req,res,next) =>{
    schema.parseAsync(req.body)
    .then((parsedData)=>{
        req.body = parsedData;
        next();
    })
    .catch((err)=> {
        if(err.issues && err.issues.length > 0){
            const msg = err.issues[0].message;
            return res.status(400).send(msg);
        }

        return res.status(400).send("Validation failed");
    });
};


export default validation;