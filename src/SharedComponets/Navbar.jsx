
'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName =usePathname()
    const router= useRouter()




const handelLogin =()=>{
    router.push('/login')

}

    const links=[
        {
            title:'Home',
            path:'/',
        },
        {
            title:'Blogs',
            path:'/blogs',
        },
        {
            title:'Dashboard',
            path:'/dashboard/adminHome',
        },
        {
            title:'About',
            path:'/about',
        },
        {
            title:'Contact',
            path:'/contact',
        },
    ]

if(pathName.includes('dashboard')){

    return(
        <div className=' flex justify-between'>
             <div>
                    <h1 className='text-3xl font-semibold'>DashBoard</h1>
            </div>
            <nav className='navbar'>
                <ul className=' '>

                     <li><Link href={'/'}>Home</Link></li>
                     <li><Link href={'/blogs'}>Blogs</Link></li>
                </ul>
            </nav>
        </div>
    )
}

    return (
        <div className=' flex justify-between max-w-screen-xl '> 
            <div>
                    <h1 className='text-3xl font-semibold'>First <span className='text-red-800'>Next.js</span></h1>
            </div>
            <nav className='navbar'>
                <ul className=' '>

                    {
                        links.map(link=>  <li className={`${pathName===link.path && 'btn-active'}`} key={link.path}><Link href={ link.path}> {link.title}</Link></li> )
                    }
                   
                </ul>
            </nav>
            <div>
                <button onClick={handelLogin} className='text-xl font-semibold'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;