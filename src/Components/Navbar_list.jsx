import React from 'react'
import { Link } from "react-router-dom";
function Navbar_list() {
  return<>
   <div className='li-box'
   ><div className='All-li'>
     <p>Home</p>
     <p>About us</p>
     <p>
      Our impact
     </p>
     <p>Media</p>
     <div><p>Blog</p>
      <ol style={{margin:"5px"}}>
        <li><Link  style={{ textDecoration: 'none', color: 'black' }} to='/Blogs'>View Blogs</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'black' }} to='/Create_Blog'>Create Blog</Link>
        </li>
      </ol>
     </div>
     <p></p>
     
  </div>
  </div>
  </>
}

export default Navbar_list