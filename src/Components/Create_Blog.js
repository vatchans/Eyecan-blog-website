import React from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useState } from 'react';
import { Fade ,Zoom,rubberBand} from "react-awesome-reveal";
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
function Create_Blog() {
    let [Title,setTitle]=useState("")
    let [Author,setauthor]=useState("")
    let [Image,setimage]=useState("")
    let [Content,setContent]=useState('')
    let navigate=useNavigate()

    function convertToBase64(file){
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
              reject(error)
            }})
    }
    

    let uploadImage=async(e)=>{
     let img=e.target.files[0]
     let base64=convertToBase64(img)
     base64.then((a) => {
        setimage(a)
      });
    }

    let handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          let res=await axios.post("https://eyecan-backend.onrender.com/users/Create_Blog",{
            Title,
            Author,
            Image,
            Content
          })
          if(res.status===201){
            toast.success(res.data.msg)
            navigate('/Blogs')
          }
        }
        catch(error){
        toast.error(error.response.data.msg)
        }
    }

  return <>
  <Navbar/>
    <><h1 className='pt-5 post_title'>Create A Blog</h1></>
    <div className='form pt-5'>
    <input type='text' placeholder="Title"onChange={(e)=>setTitle(e.target.value)}/>
    <input type="text" placeholder="Author"onChange={(e)=>setauthor(e.target.value)}/>
    <div className='image_upload'>
        <label htmlFor='image_upload'>
         <div className='upload-btn'>Add Image <FileUploadIcon style={{color:"white",fontSize:"medium"}}/></div>
        </label>
        <img src={Image||"empty-300x240.jpg"}>
        </img>
    </div>
    <input type="file" id="image_upload"style={{display:"none"}} onChange={(e)=>uploadImage(e)}/>
    <ReactQuill theme="snow" value={Content} onChange={setContent} />
    <div className='Submit' onClick={(e)=>handleSubmit(e)}>Post</div>
    </div>

    <div className='Footer mt-5'>
<Zoom>
<div className='about'>
        <img src='Eyecan-Updated-Logo-e1666782370664.png' width='220' height='54'></img>
       <p>Empowering Lives through A.I.</p>
       <h4 className='mt-3'>Know More About Eyecan</h4>
       <p className='mt-4'>Eyecan is India’s most advanced mobile assistant application on a mission to show the potential of the blind to the world.</p>
<div className='button_links mt-5'>
<a href='https://www.facebook.com/eyecanof>ficial' target={"_blank"}  rel="noreferrer"><span><i class="fa-brands fa-facebook"></i></span></a>
<a href='https://www.youtube.com/channel/UCCXG36rCxTy__r4d6cGGllQ' target={"_blank"}  rel="noreferrer"><span><i class="fa-brands fa-youtube"></i></span></a>
<a href='https://www.linkedin.com/company/eyecan/' target={"_blank"}  rel="noreferrer"><span><i class="fa-brands fa-linkedin"></i></span></a>
<a href='https://www.instagram.com/eyecanofficial/' target={"_blank"}  rel="noreferrer"><span><i class="fa-brands fa-instagram"></i></span></a>
<a href='https://twitter.com/eyecanofficial' target={"_blank"}  rel="noreferrer"><span><i class="fa-brands fa-twitter"></i></span></a>
</div>
</div>
</Zoom>
<Zoom>
<div className='Usefull-links '>
  <h4>Useful Links</h4>
  <p>About Us</p>
  <p>Community</p>
  <p>Contact Us</p>
  <p>Gift A Subscription</p>
  <p>Privacy Policy</p>
</div>
</Zoom>
<Zoom>
<div className='address'>
  <h4>Address</h4>
  <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.3733790738925!2d77.48056704990557!3d28.438158882408995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1d663c45c89%3A0x7ff4c24f95def1bd!2sACE%20Golfshire!5e0!3m2!1sen!2sin!4v1679752509574!5m2!1sen!2sin" style={{border:"0",borderRadius:"10px"}} allowfullscreen loading="lazy" ></iframe></div>
  <h6>
  <a href="tel:+918225835554">Phone</a></h6>
  <p className='mt-3'>+91 8225835554</p>
  <h6>
   <a  href="mailto:support@eyecan.in">Email</a>
  </h6>
  <p className='mt-3'>support@eyecan.in</p>
</div>
</Zoom>
</div>
  </>
}

export default Create_Blog
