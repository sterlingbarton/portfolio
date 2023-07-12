import * as React from 'react';
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
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    })

  function handleChange(e){
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  function handleSubmit(){
    setOpen(!open);
    console.log('submitted')
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(!open)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Let's work together!"}</DialogTitle>
        <DialogContent>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '550px',
                    height: '400px'
                }}
                noValidate
                autoComplete="off"
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <TextField
                        id="first-name"
                        label="First Name"
                        variant="standard"
                        sx={{
                            // mb: '.5rem',
                            width: '45%'

                        }}
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="standard"
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </Box>
                <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    name='email'
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    id="subject"
                    label="Subject"
                    variant="standard"
                    name='subject'
                    margin="normal"
                    value={formData.subject}
                    onChange={handleChange}
                />
                <TextField
                    id="message"
                    label="Message"
                    variant="standard"
                    name='message'
                    margin="normal"
                    value={formData.message}
                    onChange={handleChange}
                />
            </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Send Request</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}