import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import Button from '@mui/material/Button';
import Fade from 'react-reveal/Fade';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';

init("CRSB7HDdL0UfMj8EF");


export default function Contact() {

    const [emailSent, setEmailSent] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_k8m08nl', 'template_mvkp547', form.current, 'CRSB7HDdL0UfMj8EF')
        .then((result) => {
            setEmailSent(<p className='contact-confirmation'>"Message sent!"</p>)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div>
        <Fade bottom>
        <h4>Contact Me</h4>
        <div className="form">
        <form ref={form} onSubmit={sendEmail}>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', color: "white" }}>
        <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField label="Name" name="user_name" variant="standard" sx={{color: "white"}}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email address" name="user_email" variant="standard" />
      </Box>
    </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, color: "white"
      }}
      noValidate
      autoComplete="off"
    >    
      <div> 
        <TextField
          id="standard-multiline-static"
          label="Message"
          name="user_message"
          multiline
          rows={4}
          variant="standard"
          sx={{color: "white"}}
        />
      </div>
    </Box>
      <p>
          <Button type="submit" variant="contained" size="large" sx={{textAlign: "center", margin: "0 auto", display: "block", backgroundColor: "#e3997c", "&:hover": {backgroundColor: "#e8ad96", color: "#486b53"}}}>
          Send
          </Button>
          </p>
        </form>

        <p className='contact-confirmation'>{emailSent}</p>
    </div>
    </Fade>
    </div>
  )
}
