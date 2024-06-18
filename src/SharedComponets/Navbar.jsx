
'use client'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName =usePathname()
    const router= useRouter()
const session =useSession()




const handelLogin =()=>{
    router.push('/api/auth/signin')

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
            title:'Photos',
            path:'/photos',
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
            { session.status=='authenticated'?  <div className='flex gap-3 items-center'>
                <div className=' px-4 bg-slate-200 rounded-md'>
                    <h1 className='font-semibold'>{session.data.user.name}</h1>
                    
                </div>

                <button onClick={signOut} className='text-xl font-semibold'>Logout</button>
            </div>
            
            :
                <div className="flex gap-3">
                    <button onClick={handelLogin} className='text-xl font-semibold'>Login</button>
                   <Link href={'/api/signup'}> <button  className='text-xl font-semibold'>Register</button></Link>
                </div>
            }
            </div>
        </div>
    );
};

export default Navbar;