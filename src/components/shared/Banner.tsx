import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 py-6'>
            <div>
                <Image src={'/banner.jpg'} width={500} height={400} alt='banner'/>
            </div>
            <div className='space-y-4'>
                <h4>Technology</h4>
                <h1 className='text-3xl font-bold'>Lorem ipsum dolor, sit amet consectetur</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste veniam et praesentium laudantium quisquam maxime animi nulla quaerat saepe, debitis earum rem amet, deserunt distinctio aliquam est eos enim mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officiis voluptates assumenda rem obcaecati ut exercitationem, nisi facilis voluptate eum aspernatur cum laudantium accusantium temporibus amet dolorem possimus maiores cumque.</p>
                <Button>Read More</Button>
            </div>
        </div>
    );
};

export default Banner;