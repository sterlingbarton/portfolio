'use client'

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import html5 from '../images/html5.png'
import css from '../images/css.png'
import flask from '../images/flask.png'
import javascript from '../images/javascript.png'
import next from '../images/nextjs.png'
import node from '../images/node.png'
import sql from '../images/sql.png'
import python from '../images/python.png'
import react from '../images/react.png'
import styles from '../styles/page.module.css'


export default function Home() {
  return (
    <main>
     <Box className={styles.introSection}>
      <Box className={styles.heading}>
        <Typography gutterBottom variant="h2" className={styles.introTitle}>Hello, I'm Sterling</Typography>
        <Typography gutterBottom variant="h3" className={styles.introDesc}>Software Engineer ...</Typography>
      </Box>
      <Box component='section' className={styles.skillsSection}>
        <Typography gutterBottom variant='h4' className={styles.skillsTitle}>What I Do</Typography>
        <Box className={styles.skillsContainer}>
            <Box className={styles.skills}>
              <Box className={styles.skillsItem}><Image height={50} width={50} src={html5} alt='html5 logo'/></Box>
            </Box>
            <Box className={styles.skills}>
              <Box className={styles.skillsItem}><Image height={50} width={50} src={css} alt='css logo'/></Box>
              <Box className={styles.skillsItem}><Image height={50} width={50} src={javascript} alt='javascript logo'/></Box>
            </Box>
            <Box className={styles.skills}>
              <Box className={styles.skillsItem}><Image height={50} width={50} src={python} alt='python logo'/></Box>
              <Box className={styles.skillsItem}><Image height={50} width={50} src={sql} alt='sql logo'/></Box>
              <Box className={styles.skillsItem}><Image height={50} width={50} src={flask} alt='flask logo'/></Box>
            </Box>
            <Box className={styles.skills}>
              <Box className={styles.skillsItem}><Image height={50} width={50} src={react} alt='react logo'/></Box>
              <Box className={styles.skillsItem}><Image height={50} width={50} src={next} alt='nextjs logo'/></Box>
            </Box>
            <Box className={styles.skills}>
            <Box className={styles.skillsItem}><Image height={50} width={50} src={node} alt='nodejs logo'/></Box>
            </Box>
        </Box>
      </Box>
        <footer className={styles.linkFooter}>
          {/* <Link href="https://github.com/sterlingbarton"><GitHubIcon></GitHubIcon></Link>
          {/* medium logo by Icons8 */}
          {/*<Link href="https://medium.com/@sterlingbarton81"><Image width={50} height={50} src={medium} alt='medium logo'/></Link>
          <Link href="https://www.linkedin.com/in/sterling-barton/"><LinkedInIcon></LinkedInIcon></Link> */}
        </footer>
     </Box>
    </main>
  )
}
