"use client"

import React from 'react'
import Link from 'next/link'
import Contact from './Contact'

export default function Nav() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
      };
    
  return (
    <div>
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <button onClick={handleClickOpen}>Contact</button>
        <Contact open={open} setOpen={setOpen}></Contact>
    </div>
  )
}

