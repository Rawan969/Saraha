const dataMethods = ['body', 'query', 'params'];
const validation = (schema)=>{
   return (req,res,next)=>{
    const validatioArray = [];
    dataMethods.forEach(key=>{
        if(schema[key]){
            const validationResult = schema[key].validate(req[key],{abortEarly:false});

            if(validationResult.error){
                validatioArray.push(validationResult.error.details);
            }
        }
    })

    if(validatioArray.length > 0){
        return res.json({message:"validation error",validatioArray})
    }else{
         next();
    }


    }
}
export default validation;