import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-[5%] bg-blue-950 h-[8vh] sticky top-0'>
        <div className='flex w-[50%] gap-4 items-center'>
            <p className='text-3xl'>MyBlogs</p>
            <ul className='flex gap-4 mt-3'>
               <Link href={'/'}> <li>Home </li></Link>
               <Link href={'/blog'}> <li>Blog </li></Link>
               <Link href={'/contact'}> <li>Contact</li></Link>
               <Link href={'/about'}> <li>About</li></Link>
            </ul>
        </div>
        <div className='flex gap-2'>
            <Link href={'/login'} className='border border-black rounded bg-blue-500 active:bg-blue-900 px-2 py-1'>Login</Link>
            <Link href={'/signup'} className='border border-black rounded bg-blue-500 active:bg-blue-900 px-2 py-1'>Register</Link>
        </div>
    </nav>
  )
}

export default Navbar