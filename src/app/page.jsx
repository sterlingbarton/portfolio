'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RTFVideo from './components/RTFVideo';
import LTVideo from './components/LTVideo';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import heroGirl from '../images/hero-girl.png';
import defaultHeroGuy1 from '../images/hero-guy-1.png';
import lgHeroGuy1 from '../images/hero-guy-1-lg.png';
import heroGuy2 from '../images/hero-guy-2.png';
import heroGuy3 from '../images/hero-guy-3.png';
import html5 from '../images/html5.png';
import css from '../images/css.png';
import flask from '../images/flask.png';
import javascript from '../images/javascript.png';
import next from '../images/nextjs.webp';
import node from '../images/node.png';
import sql from '../images/sql.png';
import python from '../images/python.png';
import react from '../images/react.png';
import HTX from '../images/HTX.png';
import FTA from '../images/FTA.png';
import taskPlanner from '../images/taskPlanner.png';
import CLI from '../images/CLI.png';
import colorPicker from '../images/colorPicker.png';
import styles from '../styles/page.module.css';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Box id="home" component="section" className={styles.introSection}>
        <Box className={styles.heading}>
          <h1 className={styles.introTitle}>Hello, I'm Sterling</h1>
          <h2 className={styles.introDesc}>
            Software Engineer with an eye for design
          </h2>
        </Box>
        <Box>
          <Image
            className={styles.heroGuy2}
            height={100}
            width={'100%'}
            src={heroGuy2}
            alt="hero guy 2"
          />
          <Image
            className={styles.heroGirl}
            height={100}
            width={'100%'}
            src={heroGirl}
            alt="hero girl"
          />
          <Image
            className={styles.heroGuy3}
            height={100}
            width={'100%'}
            src={heroGuy3}
            alt="hero guy 3"
          />
          <Image
            className={styles.heroGuy1}
            height={180}
            width={'100%'}
            src={defaultHeroGuy1}
            alt="hero guy 1"
          />
          <Image
            className={styles.heroGuy1__lg}
            height={400}
            width={'100%'}
            src={lgHeroGuy1}
            alt="hero guy 1"
          ></Image>
        </Box>
      </Box>
      <Box id="skills" component="section" className={styles.skillsSection}>
        <h3 className={styles.skillsTitle}>Technologies I work with</h3>
        <Box className={styles.hr}></Box>
        <Box className={styles.skillsContainer}>
          <Box className={styles.skills}>
            <Box className={styles.skillsItem}>
              <Image src={html5} alt="html5 logo" />
            </Box>
          </Box>
          <Box className={styles.skills}>
            <Box className={styles.skillsItem}>
              <Image src={css} alt="css logo" />
            </Box>
            <Box className={styles.skillsItem}>
              <Image src={javascript} alt="javascript logo" />
            </Box>
          </Box>
          <Box className={styles.skills}>
            <Box className={styles.skillsItem}>
              <Image src={python} alt="python logo" />
            </Box>
            <Box className={styles.skillsItem}>
              <Image src={sql} alt="sql logo" />
            </Box>
            <Box className={styles.skillsItem}>
              <Image src={flask} alt="flask logo" />
            </Box>
          </Box>
          <Box className={styles.skills}>
            <Box className={styles.skillsItem}>
              <Image src={react} alt="react logo" />
            </Box>
            <Box className={styles.skillsItem}>
              <Image src={next} alt="nextjs logo" />
            </Box>
          </Box>
          <Box className={styles.skills}>
            <Box className={styles.skillsItem}>
              <Image src={node} alt="nodejs logo" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box id="projects" component="section" className={styles.projectsSection}>
        <h3 className={styles.projectsTitle}>My Projects</h3>
        <Box className={styles.hr}></Box>
        <Grid
          className={styles.projectsGrid}
          sx={{ flexDirection: { xs: 'column' } }}
        >
          <Grid
            className={styles.projectsRow}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box className={styles.projectInfo}>
              <h6 className={styles.projectTitle}>Thunder Gym</h6>
              <p className={styles.projectDesc}>
                Front-end website, developed for a local gym using Next.js,
                TypeScript, and Tailwind CSS. Provides comprehensive details on
                gym offerings, court rentals, services, and answers to
                frequently asked questions.
              </p>
              <Box className={styles.buttonContainer}>
                <Button
                  variant="contained"
                  onClick={() =>
                    router.push('https://github.com/christiancm7/htx-thunder')
                  }
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  onClick={() => router.push('https://www.htxthunder.com/')}
                >
                  Live site
                </Button>
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
                alt="Houston Thunder Gym website screenshot"
                src={HTX}
              />
            </Box>
          </Grid>
          <Grid
            className={styles.projectsRow}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box id={styles.imageWrapper2} className={styles.imageWrapper}>
              <Image
                component="img"
                height={275}
                width={350}
                sx={{
                  maxHeight: { xs: 233, md: 167 },
                  minWidth: '100%',
                }}
                alt="First Triumph Athletics website screenshot"
                src={FTA}
              />
            </Box>
            <Box id={styles.singleProjectInfo} className={styles.projectInfo}>
              <h6 className={styles.projectTitle}>
                First Triumph Athletic Club
              </h6>
              <p id={styles.singleProjectDesc} className={styles.projectDesc}>
                Front-end website, developed for a local athletic club using
                Next.js, Typescript and Tailwind CSS. Offers detailed
                information on sports activities, staff, and contact information
                for the club.
              </p>
              <Box className={styles.buttonContainer}>
                <Button
                  variant="contained"
                  onClick={() =>
                    router.push(
                      'https://github.com/sterlingbarton/ft-athletics'
                    )
                  }
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    router.push('https://www.firsttriumphathletics.com/')
                  }
                >
                  Live site
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            className={styles.projectsRow}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box className={styles.projectInfo}>
              <h6 className={styles.projectTitle}>Task Planner</h6>
              <p className={styles.projectDesc}>
                Full stack web application that helps users organize current and
                future tasks, appointments and finances. Created with Next.js,
                Material UI, Python, Flask and SQLAlchemy.
              </p>
              <Box id={styles.tempSingleBtn} className={styles.buttonContainer}>
                <Button
                  variant="contained"
                  onClick={() =>
                    router.push(
                      'https://github.com/sterlingbarton/project-iris'
                    )
                  }
                >
                  GitHub
                </Button>
                {/* <Button variant='contained'>Live site</Button> */}
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
                alt="Tasklist project screenshot"
                src={taskPlanner}
              />
            </Box>
          </Grid>
          <Grid
            className={styles.projectsRow}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box id={styles.imageWrapper2} className={styles.imageWrapper}>
              <Suspense fallback={<p>Loading video...</p>}>
                <LTVideo />
              </Suspense>
            </Box>
            <Box id={styles.singleProjectInfo} className={styles.projectInfo}>
              <h6 className={styles.projectTitle}>Letter Tracing Game</h6>
              <p id={styles.singleProjectDesc} className={styles.projectDesc}>
                Interactive, educational front-end web game designed for
                homeschooled young children to learn how to write English
                letters. Developed using React and Material-UI.
              </p>
              <Box className={styles.buttonContainer}>
                <Button
                  variant="contained"
                  onClick={() =>
                    router.push(
                      'https://github.com/sssparkes/mvp-letter-tracing'
                    )
                  }
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    router.push('https://letter-tracing-30ab3.web.app/')
                  }
                >
                  Live site
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            className={styles.projectsRow}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box className={styles.projectInfo}>
              <h6 className={styles.projectTitle}>Stars and Stripes Math</h6>
              <p className={styles.projectDesc}>
                Interactive front-end web game designed for homeschooled young
                children to make math learning engaging. Developed using React
                and Material-UI.
              </p>
              <Box className={styles.buttonContainer}>
                <Button
                  variant="contained"
                  onClick={() =>
                    router.push('https://github.com/sssparkes/mvpflag')
                  }
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    router.push('https://stars-and-stripes-math.web.app/')
                  }
                >
                  Live site
                </Button>
              </Box>
            </Box>
            <Box id={styles.imageWrapper1} className={styles.imageWrapper}>
              <Suspense fallback={<p>Loading video...</p>}>
                <RTFVideo />
              </Suspense>
            </Box>
          </Grid>
          <Grid
            className={styles.projectsRow}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
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
            <Box id={styles.singleProjectInfo} className={styles.projectInfo}>
              <h6 className={styles.projectTitle}>CLI Maze Game</h6>
              <p id={styles.singleProjectDesc} className={styles.projectDesc}>
                An interactive maze CLI application where users can play to see
                if they can reach the end. Created with Python and Flask.
              </p>
              <Box
                id={styles.singleButtonContainer}
                className={styles.buttonContainer}
              >
                <Button
                  variant="contained"
                  className={styles.singleButton}
                  onClick={() =>
                    router.push(
                      'https://github.com/sterlingbarton/maze-runner-p3-project'
                    )
                  }
                >
                  GitHub
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            className={styles.projectsRow}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box className={styles.projectInfo}>
              <h6 className={styles.projectTitle}>Color Picker</h6>
              <p className={styles.projectDesc}>
                Front end web application that helps design, create and store
                color palettes. Created with React and Material UI.
              </p>
              <Box className={styles.buttonContainer}>
                <Button
                  variant="contained"
                  onClick={() =>
                    router.push(
                      'https://github.com/sterlingbarton/color-palette'
                    )
                  }
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    router.push('https://reactcolorpalettes.netlify.app/')
                  }
                >
                  Live site
                </Button>
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
                alt="Color Picker website screenshot"
                src={colorPicker}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
