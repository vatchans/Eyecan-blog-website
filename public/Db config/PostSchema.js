const mongoose=require('mongoose')

const BlogSchema=new mongoose.Schema({
   Title:{type:String,required:true},
   Author:{type:String,required:true},
   Image:{type:String,required:true},
   Published_at:{type:String,default:Date},
   Content:{type:String,required:true}

},{ versionKey: false })

const Blog=new mongoose.model("Blog",BlogSchema)

module.exports={Blog}