import React from 'react';
import { Headland_One } from 'next/font/google';

const Headland = Headland_One({weight:['400',], subsets: ["latin"] });

export const metadata = {
    title:'About',
    description: "this in about page  ",
    keywords:['about','about content', 'etc']
  };

//   const getTime = async () => {
//     try {
//         const res = await fetch('http://localhost:3000/time',{next:{revalidate:5000}});
      
//         const data = await res.json(); 
//         console.log(data);
//         return data.currentTime;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error; 
//     }
// };

const AboutPage = async() => {
    // const time = await getTime()

    return (
        <div className={`${Headland.className} my-6`}>
            About
            {/* <h1>Time : <span className=' text-red-400 '> {time}</span></h1> */}
            
        </div>
    );
};

export default AboutPage;