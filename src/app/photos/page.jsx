import { getPhotos } from '@/UtilityFunctions/UtilityFunctions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title:'Photos',
    description: "All photos",
  };


const PhotoPage = async () => {
    const photoData = await getPhotos();

    // console.log(photoData);

    return (
        <div className='max-w-7xl m-auto'>
            <h1 className=' text-xl font-bold border-b-2 py-4'>Photos</h1>

            <div className=' grid grid-cols-2 gap-4'>
                {
                    photoData?.map(({ title,  id }, index) => <div
                     key={index}
                     className='border-2 p-4 m-3'
                     >

                        <Image
                            src={'https://via.placeholder.com/600/24f355'}
                            alt="thumbnail"
                            width={200}
                            height={100}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        />
                        <h1 className='text-2xl font-bold my-4 '>{title}</h1>
                        <button className=' btn btn-secondary'><Link href={`/photos/${id}`}>View Details</Link></button>


                    </div>)
                }


            </div>


        </div>
    );
};

export default PhotoPage;