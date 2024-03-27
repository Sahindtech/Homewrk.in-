
const mongoose =require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/loginSignup")
.then(()=>{
    console.log('mongodb connected')
})
.catch((error)=>{
    console.log('connection failed',error)
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
         type:String,
         required:true
    }
})

const collection=new mongoose.model("collection",LogInSchema)
module.exports=collection;