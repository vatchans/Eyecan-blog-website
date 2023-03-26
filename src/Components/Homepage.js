import React from 'react'
import Navbar from './Navbar'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Fade ,Zoom,rubberBand} from "react-awesome-reveal";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
function Homepage() {
  return<>
  <div></div>
   <Navbar/>
  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img className="d-block " src="1-SM326114.jpeg" alt="First slide"/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img className="d-block" src="1-SM326115.jpeg" alt="Second slide"/>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img className="d-block" src="1-SM5176961.jpeg" alt="Third slide"/>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img className="d-block" src="2-SM606692-1.jpeg" alt="Fourth slide"/>
    </div>
  </div>
</div>
<div className='Carousel-content-container'>
{/* <div className='l-1'>
    <p>Finacial impact</p>
    <p>
      Community
    </p>
  </div> */}
  <Zoom cascade damping={0.1}>
<div className='Carousel-content'>
      <h2>
      On A Mission To Go Beyond Sight
      </h2>
      <p className='mt-3'>

        <b>Eyecan</b>
        -An App that makes it easier for visually challenged people to go with their everyday task
      </p>
     <div className='Carousel-btn mt-5'>
    <a style={{textDecoration:"none"}} href='https://play.google.com/store/apps/details?id=com.eyecan.app&hl=en_IN&gl=US&pli=1'><div className='Playstore-btn'><i class="fa-brands fa-google-play"></i> <span style={{fontWeight:"200",fontSize:"12px"}}>Download Now</span></div></a>
     
   <div className='mt-2'><PlayCircleIcon/>&nbsp;<span>See What Users Say</span></div>
     </div>

    </div>
    </Zoom>
    </div>

   <div className='App-overview mt-5'>
    <h1>Eyecan, A Companion For Life</h1>
   
    <p style={{fontsize:"50px"}}>...</p> <span> </span>

    <p style={{paddingLeft:"20%",paddingRight:"20%"}}>Our app allows visually impaired people to describe what they see around them, as well as navigate freely indoors and outdoors. Find things around them and read PDFs, documents, images, and multiple languages.</p>
    <div className='sample-images mt-5'>
    <Zoom>
    <div className='demo_img'> <img  src="Transparent-Samsung-Galaxy-S20-Mockup-September-16th-2022-Mockuuups-Studio.png"></img></div>
    <div className='demo_img'> <img  src="Mapss-Mockuuups-Studio.png"></img></div>
    <div className='demo_img'> <img  src="Maps-Mockuuups-Studio.png"></img></div>
    <div className='demo_img'><img  src="https://eyecan.in/wp-content/uploads/2022/10/OCR-Mockuuups-Studio.png"></img></div>
    </Zoom>
    </div>
  

    <h1>On a mission to Empower visually impaired</h1>
    <div  className='App_featues'>
    <div className=' row row-cols-1 row-cols-xl-3 row-cols-md-2 row-cols-sm-2 g-5 m-5'>
      <Zoom>
      <div id="Reader" className='box_content'>
     <span><i class="fa-solid fa-book-open-reader"></i></span>
      <div>
      <h5>Reader</h5>
      <p
      >Read PDF And Documents,scrolls the text as your convenice.</p>
      </div>
      </div>
      </Zoom>
      <Zoom>
      <div id="Describe" className='box_content'>
     <span><i class="fa-solid fa-image"></i></span>
      <div>
      <h5>Describe scene</h5>
      <p
      >Get a description of the current view. Take a look around you.</p>
      </div>
      </div>
      </Zoom>
      <Zoom>
      <div id="Find_object" className='box_content'>
     <span><i class="fa-solid fa-magnifying-glass"></i></span>
      <div>
      <h5>Find objects</h5>
      <p
      >identify well-known items and their locations</p>
      </div>
      </div>
      </Zoom>
      <Zoom>
      <div id="Navigation" className='box_content'>
     <span><i class="fa-solid fa-location-arrow"></i></span>
      <div>
      <h5>Navigation</h5>
      <p
      >Easily navigate outside and distinguish distant objects</p>
      </div>
      </div>
      </Zoom>
      <Zoom>
      <div id="Guidance" className='box_content'>
     <span><i class="fa-solid fa-file-lines"></i></span>
      <div>
      <h5>Smart guidance</h5>
      <p
      >Accurately captures text in one go including handwriting</p>
      </div>
      </div>
      </Zoom>
      <Zoom>
      <div id="Community_support" className='box_content'>
     <span><i class="fa-solid fa-people-group"></i></span>
      <div>
      <h5>Community Support</h5>
      <p
      >Accurately captures text in one go including handwriting</p>
      </div>
      </div>
      </Zoom>
    </div>
    </div>
    <a style={{textDecoration:"none"}} href='https://play.google.com/store/apps/details?id=com.eyecan.app&hl=en_IN&gl=US&pli=1'><div className='Playstore-btn'><i class="fa-brands fa-google-play"></i>&nbsp;<span style={{fontWeight:"200",fontSize:"12px"}}>Download Now</span></div></a>
    <h1 className='video-title mt-8'>We Care for People and They Love Us <i style={{color:"red"}
    }className="fa-solid fa-heart"></i>​</h1>
    <Zoom>
     <div className='Video_preview mt-5'>
      <video autoplay="autoplay" loop="true" muted defaultmuted playsinline controls="true" frameborder="0">
        <source src="Eyecan _ The beginning of innovation for visually impaired (1).mp4" type="video/mp4">
        </source>
      </video>
    </div>
    </Zoom>
    <h1>Our Partners​</h1>
    <div className='Partners_list'>
      <img src="aws-1536x960-1.png"></img>
      <img src="Google-1536x960-1.png"></img>
      <img src="Microsoft-1536x960-1.png"></img>
      <img src="Startup-1536x960-1.png"></img>
      <img src="NASSCOM-1536x960-1.png"></img>
      <img src="NVIDIA-1536x960-1.png"></img>
    </div>
    </div>
<div className='Footer'>
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

export default Homepage