const dbConnect = require('../LIB/mongoDb.js');
const userSchema = require('../models/usermodel.js')



 const postUser = async(req,res)=>{
    dbConnect()
    try {
        console.log(req.body);
        const resp=await userSchema(req.body)
        res.json(resp)

    } catch (error) {
        


    }


}


module.exports ={postUser}