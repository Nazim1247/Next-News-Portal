import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { NewsCardProps } from '@/types/news';

const NewsCard = ({item}: NewsCardProps) => {
    return (
        <div className='border p-4 rounded-md shadow-md'>
           <Link href={'/'}>
           <Image src={item?.imageUrl} width={200} height={200} alt='News img' priority/>
           </Link>
           <div className='space-y-2'>
            <h2 className='text-xl font-semibold'>{item?.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est expedita culpa doloribus, similique amet tenetur dolores quia officia quis doloremque, optio error facilis quas laudantium unde aspernatur, maxime ratione?</p>
            <Button>Read More</Button>
            </div> 
        </div>
    );
};

export default NewsCard;