var express = require('express');
var router = express.Router();
const {Blog}=require("../public/Db config/PostSchema")
const {dburl}=require('../public/Db config/DB')
const mongoose=require('mongoose')
/* GET users listing. */
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/Create_Blog',async(req,res)=>{
try{
 let Title=await Blog.findOne({Title:req.body.Title})
 if(Title){
  res.status(401).send({msg:"Blog already exist"})
}
 else{
  let blog =await Blog.create(req.body)
 res.status(201).send({msg:"Sucessfully Posted"})
 }
}
catch(error){
res.status(500).send(error)
}
})

router.delete("/Delete_Blog/:id",async(req,res)=>{
  try{
    let blog=await Blog.findOneAndDelete({_id:req.params.id})
    res.status(200).send("Blog Deleted")
  }
  catch(error){
    res.status.send(error)
  }
})

router.put("/Edit_Blog/:id",async(req,res)=>{
  try{
  let blog=await Blog.updateOne({_id:req.params.id},{
      $set:{
         Title:req.body.Title,
         Author:req.body.Author,
         Image:req.body.Image,
         Content:req.body.Content
      }
    })
    
    res.status(201).send({msg:"Changes made successfully"})
  }
  catch(error){
   res.status(500).send("Internal server error")
  }
})

router.get("/Blogs",async(req,res)=>{
  try{
    let blog=await Blog.find()
    let data=blog.map((e)=>{
      let Date=e.Published_at.split(" ").splice(0,4).join(" ")
      let dataobj={
        id:e._id,
        Title:e.Title,
        Image:e.Image,
        Author:e.Author,
        Published_at:Date,
        Content:e.Content
      }
    return dataobj
    })
    res.status(200).send(data)
  }
  catch(error){
     res.status(500).send("Internal server error")
  }
})
router.get('/view_Blog/:id',async(req,res)=>{
   try{
    let blog=await Blog.find({_id:req.params.id})
    let data=blog.map((e)=>{
      let Date=e.Published_at.split(" ").splice(0,4).join(" ")
      let dataobj={
        id:e._id,
        Title:e.Title,
        Image:e.Image,
        Author:e.Author,
        Published_at:Date,
        Content:e.Content
      }
    return dataobj
    })
    res.status(200).send(data)
  }
  catch(error){
     res.status(500).send("Internal server error")
  }
})
module.exports = router;
