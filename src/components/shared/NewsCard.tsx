import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const NewsCard = () => {
    return (
        <div className='border p-4 rounded-md shadow-md'>
           <Link href={'/'}>
           <Image src={'/banner.jpg'} width={400} height={400} alt='News img'/>
           </Link>
           <div className='space-y-2'>
            <h2 className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est expedita culpa doloribus, similique amet tenetur dolores quia officia quis doloremque, optio error facilis quas laudantium unde aspernatur, maxime ratione?</p>
            <Button>Read More</Button>
            </div> 
        </div>
    );
};

export default NewsCard;