import React from 'react'
import { useState } from 'react';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Link } from "react-router-dom";
import Navbar_list from './Navbar_list';
import logo from "../Components/Eyecan-Updated-Logo-e1666782370664.png"
function Navbar() {
  let [li1,setli]=useState(false)
  let [li2,setli2]=useState(false)
  let [list,setlist]=useState(false)
  let queries = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 720px)',
    md: '(max-width: 1024px)'
    }
 let media_screen_width = window.matchMedia(queries.md);
 let handleli1=()=>{
  setli(!li1)
  setli2(false)
}
let handleli2=()=>{
  setli2(!li2)
  setli(false)
}
let handlist=()=>{
  setlist(!list)
}
  return<>
  <div className='Navbar'>
    <div className='logo'>
        <img src={logo} width='200' height='50'></img>
    </div>
    <div className='Navbar-list'>
      {media_screen_width.matches?<>
        <div onClick={handlist}><i className="fa-solid fa-bars"></i></div>
       </>:<><p style={{color:"orange"}}>Home</p>
       <p>About Us</p>
       <p onClick={handleli1}> Our impact&nbsp;&nbsp;<i class="fa-solid fa-sort-down"></i></p>
       <p onClick={handleli2}>Blogs&nbsp;&nbsp;<i className="fa-solid fa-sort-down"></i></p>
       <p>Media</p>
       <p>Contact Us</p>

       <span className='Sub-btn'><CardGiftcardIcon/> Gift A Subscription</span></>
      }
      
      <div className='li-box'>
 {li1&& <div className='l-1'>
  <p>Finacial impact</p>
    <p>
      Community
    </p>
  </div>}
  {li2&&
   <div className='l-2'>
   <Link  style={{ textDecoration: 'none', color: 'black' }} to='/Blogs'>
  <p className='litag'>view Blogs</p>
  </Link> 
  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Create_Blog'>
   <p className='litag'>
     Create blog
   </p>
   </Link>
 </div>
  }

    </div>
  </div>
  
  </div>
  {list && <Navbar_list/>}
  </>
  
}

export default Navbar