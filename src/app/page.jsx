'use client'

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import defaultHeroGuy1 from '../images/hero-guy-1.png'
import lgHeroGuy1 from '../images/hero-guy-1-lg.png'
import html5 from '../images/html5.png'
import css from '../images/css.png'
import flask from '../images/flask.png'
import javascript from '../images/javascript.png'
import next from '../images/nextjs.webp'
import node from '../images/node.png'
import sql from '../images/sql.png'
import python from '../images/python.png'
import react from '../images/react.png'
import taskPlanner from '../images/taskPlanner.png'
import CLI from '../images/CLI.png'
import colorPicker from '../images/colorPicker.png'
import styles from '../styles/page.module.css'


export default function Home() {
  return (
    <main>
      <Box id='home' component='section' className={styles.introSection}>
        <Box className={styles.heading}>
          <Typography gutterBottom variant="h2" className={styles.introTitle}>Hello, I'm Sterling</Typography>
          <Typography gutterBottom variant="h3" className={styles.introDesc}>Software Engineer ...</Typography>
        </Box>
        <Box className={styles.heroGuy1}>
          <Image className={styles.heroGuy1} height={180} width={'100%'} src={defaultHeroGuy1} alt='hero guy 1'></Image>
          {/* <Image className={styles.heroGuy1__lg} height={400} width={'100%'} src={lgHeroGuy1} alt='hero guy 1'></Image> */}
        </Box>
      </Box>
      <Box id='skills' component='section' className={styles.skillsSection}>
        <Typography gutterBottom variant='h4' className={styles.skillsTitle}>Technologies I work with</Typography>
        <Box className={styles.hr}></Box>
        <Box className={styles.skillsContainer}>
            <Box className={styles.skills}>
              <Box className={styles.skillsItem}><Image height={60} width={60} src={html5} alt='html5 logo'/></Box>
            </Box>
            <Box className={styles.skills}>
              <Box className={styles.skillsItem}><Image height={60} width={60} src={css} alt='css logo'/></Box>
              <Box className={styles.skillsItem}><Image height={60} width={60} src={javascript} alt='javascript logo'/></Box>
            </Box>
            <Box className={styles.skills}>
              <Box className={styles.skillsItem}><Image height={60} width={60} src={python} alt='python logo'/></Box>
              <Box className={styles.skillsItem}><Image height={60} width={60} src={sql} alt='sql logo'/></Box>
              <Box className={styles.skillsItem}><Image height={70} width={60} src={flask} alt='flask logo'/></Box>
            </Box>
            <Box className={styles.skills}>
              <Box className={styles.skillsItem}><Image height={60} width={60} src={react} alt='react logo'/></Box>
              <Box className={styles.skillsItem}><Image height={60} width={60} src={next} alt='nextjs logo'/></Box>
            </Box>
            <Box className={styles.skills}>
            <Box className={styles.skillsItem}><Image height={60} width={60} src={node} alt='nodejs logo'/></Box>
            </Box>
        </Box>
     </Box>
     <Box id='projects' component='section' className={styles.projectsSection}>
        <Typography gutterBottom variant='h3' className={styles.projectsTitle}>My Projects</Typography>
        <Box className={styles.hr}></Box>
        <Grid className={styles.projectsGrid}>
            <Grid className={styles.projectsRow}>
              <Box className={styles.projectInfo}>
                <Typography className={styles.projectTitle} variant='h6'>Task Planner</Typography>
                <Typography className={styles.projectDesc} variant='p'>Full stack web application that helps users organize current and future tasks, appointments and finances. Created with Next.js, Material UI, Python, Flask and SQLAlchemy.</Typography>
                <Box className={styles.buttonContainer}>
                  <Button variant='contained'>GitHub</Button>
                  <Button variant='contained'>Live site</Button>
                </Box>
              </Box>
                <Box id={styles.imageWrapper1} className={styles.imageWrapper}>
                  <Image
                      component="img"
                      height={230}
                      width={330}
                      sx={{
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      }}
                      alt="The house from the offer."
                      src={taskPlanner}
                  />
                </Box>
            </Grid>
            <Grid className={styles.projectsRow}>
              <Box id={styles.imageWrapper2} className={styles.imageWrapper}>
                <Image
                    component="img"
                    height={275}
                      width={250}
                      sx={{
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      }}
                      alt="Python CLI game"
                      src={CLI}
                />
              </Box>
              <Box className={styles.projectInfo}>
                <Typography className={styles.projectTitle} variant='h6'>CLI Maze Game</Typography>
                <Typography className={styles.projectDesc} variant='p'>An interactive maze CLI application where users can play to see if they can reach the end. Created with Python and Flask.</Typography>
                <Box className={styles.buttonContainer}>
                  <Button variant='contained' className={styles.singleButton}>GitHub</Button>
                </Box>
              </Box>
            </Grid>
            <Grid className={styles.projectsRow}>
              <Box className={styles.projectInfo}>
                <Typography className={styles.projectTitle} variant='h6'>Color Picker</Typography>
                <Typography className={styles.projectDesc} variant='p'>Front end web application that helps design, create and store color palettes. Created with React and Material UI.</Typography>
                <Box className={styles.buttonContainer}>
                  <Button variant='contained'>GitHub</Button>
                  <Button variant='contained'>Live site</Button>
                </Box>
              </Box>
                <Box id={styles.imageWrapper3} className={styles.imageWrapper}>
                <Image
                    component="img"
                    height={200}
                    width={230}
                    sx={{
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Color Picker"
                    src={colorPicker}
                />
              </Box>
            </Grid>
        </Grid>
    </Box>
    </main>
  )
}
