import React from 'react'
import axios from 'axios';
import { useState,useEffect} from 'react'; 
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import blog_animation from '../77671-blog-post.json'
import logo from '../Components/Eyecan-Updated-Logo-e1666782370664.png'
import { Fade, Zoom, rubberBand } from "react-awesome-reveal";
import Lottie from "lottie-react";
function MyBlogs() {
    let [blog,setblogs]=useState([])
    let [loading,setloading]=useState(false)
    let navigate=useNavigate()
    let getBlogs=async()=>{
        try{
            let res=await axios.get('https://eyecan-backend.onrender.com/users/Blogs')
            if(res.status===200){
                setblogs(res.data)
                setloading(true)
            }
        }
        catch(error){
           alert(error.response.data)
        }
    }

useEffect(()=>{
getBlogs()
},[])

  return <>
  <Navbar/>
    <div className='pt-5 post_title'><h1>Blogs</h1></div>{
        loading?
    <div className='row row-cols-1 row-cols-xl-3 row-cols-md-3 row-cols-sm-2 g-5 m-3'>
 {blog&&blog.map((e,i)=>{
    return<>
    <div  className="Box" key={i.id} onClick={()=>{navigate(`/view/${e.id}`)
    console.log(e.id)}}>
    <div className='elements mb-0'>
        <div className='Image'><img src={e.Image}/></div>
        <div className='content'>
            <h4>{e.Title}</h4>
            <p>Author: {e.Author}</p>
            <p>Published at: {e.Published_at}</p>
        </div>
    </div>
    <div className='mt-0' dangerouslySetInnerHTML={{__html:e.Content}}></div>
    </div>
    </>})}
    </div>:<div  style={{ display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <Lottie style={{ width: "40vw", padding: "2px"}}
      animationData={blog_animation} loop={true} />
      <img src={logo} width="150" height="40"></img>
      </div>}
      <div className='Footer mt-5 mb-0'>
      <Zoom>
        <div className='about'>
          <img src={logo} width='220' height='54'></img>
          <p>Empowering Lives through A.I.</p>
          <h4 className='mt-3'>Know More About Eyecan</h4>
          <p className='mt-4'>Eyecan is India’s most advanced mobile assistant application on a mission to show the potential of the blind to the world.</p>
          <div className='button_links mt-5'>
            <a href='https://www.facebook.com/eyecanof>ficial' target={"_blank"} rel="noreferrer"><span><i class="fa-brands fa-facebook"></i></span></a>
            <a href='https://www.youtube.com/channel/UCCXG36rCxTy__r4d6cGGllQ' target={"_blank"} rel="noreferrer"><span><i class="fa-brands fa-youtube"></i></span></a>
            <a href='https://www.linkedin.com/company/eyecan/' target={"_blank"} rel="noreferrer"><span><i class="fa-brands fa-linkedin"></i></span></a>
            <a href='https://www.instagram.com/eyecanofficial/' target={"_blank"} rel="noreferrer"><span><i class="fa-brands fa-instagram"></i></span></a>
            <a href='https://twitter.com/eyecanofficial' target={"_blank"} rel="noreferrer"><span><i class="fa-brands fa-twitter"></i></span></a>
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
          <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.3733790738925!2d77.48056704990557!3d28.438158882408995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1d663c45c89%3A0x7ff4c24f95def1bd!2sACE%20Golfshire!5e0!3m2!1sen!2sin!4v1679752509574!5m2!1sen!2sin" style={{ border: "0", borderRadius: "10px" }} allowfullscreen loading="lazy" ></iframe></div>
          <h6>
            <a href="tel:+918225835554">Phone</a></h6>
          <p className='mt-3'>+91 8225835554</p>
          <h6>
            <a href="mailto:support@eyecan.in">Email</a>
          </h6>
          <p className='mt-3'>support@eyecan.in</p>
        </div>
      </Zoom>
    </div>
  </>
}

export default MyBlogs