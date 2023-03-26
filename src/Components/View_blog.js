import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button"
import Slide from '@mui/material/Slide';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import Lottie from "lottie-react";
import Navbar from './Navbar';
import { Fade, Zoom, rubberBand } from "react-awesome-reveal";
import { useRef } from 'react';
import logo from '../Components/Eyecan-Updated-Logo-e1666782370664.png'
import blog_animation from '../15353-lottie-animation-in-a-blog-post.json'
import { renderToString } from 'react-dom/server'
import speakwave from '../76820-speak-wave.json';
function View_blog() {
  let { id } = useParams();
  let [Speaking, isSpeaking] = useState(false)
  let [data, setData] = useState([])
  let [loading, setloading] = useState(false)
  let [mainContent, setContent] = useState("")
  let navigate = useNavigate()
  let fullcontent = useRef("")

  const [opendialogbox, setdialogbox] = useState(false);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickdialogbox = () => {
    setdialogbox(true);
  };

  const handleClosedialogbox = () => {
    setdialogbox(false);
  };

  let getdata = async (id) => {
    try {
      let res = await axios.get(`https://eyecan-backend.onrender.com/users/view_Blog/${id}`)
      if (res.status === 200) {
        setloading(true)
        setData(res.data)
        let element = fullcontent.current
        if (element !=="")
          setContent(element.textContent)
      }
    }
    catch (error) {
      alert(error.response.data)
    }

  }

  let Delete_blog = async (id) => {
    try {
      let res = await axios.delete(`https://eyecan-backend.onrender.com/users/Delete_Blog/${id}`)
      if (res.status === 200) {
        navigate('/Blogs')
      }
    }
    catch (error) {
      alert(error.response.data)
    }
  }

  useEffect(() => {
    getdata(id)
  }, [])

  let textTospeech = (...elements) => {
    const synth = window.speechSynthesis
    let Text = elements
    const format = new SpeechSynthesisUtterance(Text)

    isSpeaking(true)

    // let voices=[]

    // synth.getVoices().forEach((voice) => {
    //   voices.push(voice.name)

    // })

    let voices = synth.getVoices();

    //  format.voice = voices[7].name
    synth.speak(format)
    //  console.log(voices[7].name)

  }

  let StopSpeaking = () => {
    isSpeaking(false)
    window.speechSynthesis.cancel()
  }
  console.log(mainContent)

  return <>
    <Navbar />

    {loading ?
      <>
        {
          data && data.map((e) => {
            return <>
              <div className="view_blog" style={{ padding: "5rem", }}>
                <img src={e.Image}></img>
                <div className='content-details'>
                  <div className='author'>
                    <p>Author: {e.Author}</p>
                    <p>Published at:{e.Published_at}</p>
                  </div>
                  <div className='Settings'>
                    {Speaking ?
                      <div onClick={StopSpeaking}>
                        <Lottie style={{ width: "4rem", padding: "2px", margin: "1px" }}
                          animationData={speakwave} loop={true} /></div> :

                      <IconButton onClick={() => textTospeech(`Welcome to our blog. title. ${e.Title}.`, `Author .${e.Author}.`, mainContent)}>
                        <VolumeUpIcon />
                      </IconButton>
                    }
                    <Tooltip title="Edit Blog">
                      <IconButton onClick={() => { navigate(`/Edit/${id}`) }}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Blog">
                      <IconButton onClick={handleClickdialogbox}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
                <h1 className='mt-3'>{e.Title}</h1>
                <div className='mt-0' ref={fullcontent} id="full-content" dangerouslySetInnerHTML={{ __html: e.Content }}></div>
              </div>
              <Dialog
                open={opendialogbox}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClosedialogbox}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{" Are you sure ?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    you want to delete this {e.Title} Blog.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClosedialogbox}>Disagree</Button>
                  <Button onClick={() => { Delete_blog(id) }}
                  >Agree</Button>
                </DialogActions>
              </Dialog>

            </>

          })}
      </>: <div  style={{ display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
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

export default View_blog
