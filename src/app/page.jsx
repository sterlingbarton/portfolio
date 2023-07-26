'use client'

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import defaultHeroGuy1 from '../images/hero-guy-1.png'
import lgHeroGuy1 from '../images/hero-guy-1-lg.png'
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
      <Box id='home' style={{position: 'relative'}}>
        <Box className={styles.introSection}>
        <Box className={styles.heading}>
          <Typography gutterBottom variant="h2" className={styles.introTitle}>Hello, I'm Sterling</Typography>
          <Typography gutterBottom variant="h3" className={styles.introDesc}>Software Engineer ...</Typography>
        </Box>
        <Box className={styles.heroGuy1}>
          <Image className={styles.heroGuy1} height={190} width={'100%'} src={defaultHeroGuy1} alt='hero guy 1'></Image>
          {/* <Image className={styles.heroGuy1__lg} height={400} width={'100%'} src={lgHeroGuy1} alt='hero guy 1'></Image> */}
        </Box>
        </Box>
      </Box>
      <Box id='skills' component='section' className={styles.skillsSection}>
        <Typography gutterBottom variant='h4' className={styles.skillsTitle}>Technologies I work with</Typography>
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
     <Box id='projects'>
        <Typography variant='h3'>Projects</Typography>
        <Grid>
            <Grid>
                <Typography variant='p'>Task Planner</Typography>
                <Box
                    component="img"
                    sx={{
                    height: 150,
                    width: 175,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg"
                />
            </Grid>
            <Grid>
                <Box
                    component="img"
                    sx={{
                        height: 150,
                        width: 175,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg"
                />
                <Typography variant='p'>CLI Maze Game</Typography>
            </Grid>
            <Grid>
                <Typography variant='p'>Color Picker</Typography>
                <Box
                    component="img"
                    sx={{
                        height: 150,
                        width: 175,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg"
                />
            </Grid>
        </Grid>
    </Box>
    </main>
  )
}
