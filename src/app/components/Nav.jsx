"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Contact from './Contact'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import medium from '../../images/medium.png'
import styles from '../../styles/Nav.module.css'


export default function Nav() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
      };
    
  return (
    <Box className={styles.nav}>
        <Box className={styles.navSocials}>
            <Link href="https://github.com/sterlingbarton"><GitHubIcon></GitHubIcon></Link>
            {/* medium logo by Icons8 */}
            <Link href="https://medium.com/@sterlingbarton81"><Image width={30} height={20} src={medium} alt='medium logo'/></Link>
            <Link href="https://www.linkedin.com/in/sterling-barton/"><LinkedInIcon></LinkedInIcon></Link>
        </Box>
        <a href='#skills' as='skills'>Skills</a>
        <a href='#projects' as='projects'>Projects</a>
        <Button variant="text" onClick={handleClickOpen}>Contact</Button>
        <Contact open={open} setOpen={setOpen}></Contact>
    </Box>
  )
}

