import * as React from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Contact({open, setOpen}) {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setOpen(!open);

    emailjs.sendForm(
      'service_4daraf7', 
      'template_n3vrsz7', 
      form.current, 
      'JQ1sBPJtUbMnd88_k')
      .then((result) => {
          console.log(result.text);
          console.log('success')
      }, (error) => {
          console.log(error.text);
          console.log('failed')
      });
      form.current.reset();
  };


  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(!open)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{
          fontSize: '2rem', 
          fontWeight: '200',
          ml: '.6rem',
          mt: '1rem'
          }}>
            {"Let's work together!"}</DialogTitle>
        <DialogContent>
            <Box
                component="form"
                ref={form}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '550px',
                    height: '400px'
                }}
                noValidate
                autoComplete="off"
            >
              <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                ml: '1.7rem'
              }}
              >
                <TextField
                      id="name"
                      label="Name"
                      variant="standard"
                      sx={{
                          width: '50%',
                          mb: '2rem'
                      }}
                      name='user_name'
                  />
                  <TextField
                      id="email"
                      label="Email"
                      variant="standard"
                      sx={{
                        width: '50%'
                      }}
                      name='email'
                      margin="normal"
                  />
              </Box>
                <TextField
                    id="subject"
                    label="Subject"
                    variant="standard"
                    sx={{
                      width: '95%'
                    }}
                    name='subject'
                    margin="normal"
                />
                <TextField
                    id="message"
                    label="Message"
                    variant="standard"
                    sx={{
                      width: '95%'
                    }}
                    name='message'
                    margin="normal"
                />
            </Box>
        </DialogContent>
        <DialogActions>
          <Button type='submit' onClick={sendEmail} sx={{fontSize: '1rem', mb: '.5rem', mr: '.5rem'}}>Send Request</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}