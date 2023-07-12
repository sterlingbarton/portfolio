"use client"

import React from 'react'
import Link from 'next/link'
import Contact from './Contact'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

export default function Nav() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
      };
    
  return (
    <Box>
        <Link href='/' as='/'>Home</Link>
        <Link href='/projects' as='/projects'>Projects</Link>
        <Button variant="text" onClick={handleClickOpen}>Contact</Button>
        <Contact open={open} setOpen={setOpen}></Contact>
    </Box>
  )
}

