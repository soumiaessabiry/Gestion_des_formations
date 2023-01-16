const Joi =require("joi")

const validation_user=(data)=>{
    const schema=Joi.object({
        First_name:Joi.string().alphanum().min(3).max(15),
        Last_name:Joi.string().alphanum().min(3).max(15),
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        phone:Joi.number(),
        password:Joi.string(),
        id_organisme:Joi.string(),
    })
    return  schema.validate(data)

   
}

const validation_formation=(data)=>{
    const schema=Joi.object({
        Name_Formation:Joi.string().alphanum().min(3).max(15),
        image:Joi.string(),
        Date_debut:Joi.string(),
        Date_Fin:Joi.string(),
        Desciption:Joi.string().alphanum().min(3).max(255),
    })
    return  schema.validate(data) 
}

const validation_Organisme=(data)=>{
    const schema=Joi.object({
        name_organisme:Joi.string().alphanum().min(3).max(15),
        ville:Joi.string(),
        Address:Joi.string().alphanum().min(3).max(15),
        phone:Joi.number()

    })
    return  schema.validate(data) 
}
module.exports={validation_user,validation_formation,validation_Organisme}