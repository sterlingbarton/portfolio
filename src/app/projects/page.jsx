import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export default function Projects() {
  return (
    <Box>
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
  )
}

