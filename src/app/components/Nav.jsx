import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <button>Contact</button>
    </div>
  )
}

