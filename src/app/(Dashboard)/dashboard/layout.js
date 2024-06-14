import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
           
            <div className='flex'>

                <div className='bg-slate-400 w-4/12 flex flex-col gap-3 min-h-screen'>
                  
                        <Link href='/dashboard/adminHome'>Admin Home </Link>
                
                        <Link href='/dashboard/userHome'>User Home </Link>
                   
                </div>
                <div className='flex-1'>
                    {children}
                </div>

            </div>
        </div>
    );
};

export default layout;