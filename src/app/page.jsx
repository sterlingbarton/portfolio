'use client'

import Link from 'next/link'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Home() {
  return (
    <main>
     <Box>
      <Typography variant="h2">Hello, I'm Sterling</Typography>
      <Typography variant="h3">Software Engineer ...</Typography>
        <Box>
          <Link href="https://github.com/sterlingbarton">Github</Link>
          <Link href="https://medium.com/@sterlingbarton81">Blog</Link>
          <Link href="https://www.linkedin.com/in/sterling-barton/">Linked In</Link>
        </Box>
     </Box>
    </main>
  )
}
