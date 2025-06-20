import Link from 'next/link';
import React from 'react';

const NewsPage = () => {
    return (
        <div>
            <h1>News Page</h1>
            <nav className='space-x-4 mb-4'>
                <Link href={'/news/sports'}>Sports</Link>
                <Link href={'/news/health'}>Health</Link>
            </nav>
            <div className='flex justify-between'>
                <div className='md:w-4/5 h-96 bg-slate-200 flex items-center justify-center'>
                    All News
                </div>
                <div className='bg-slate-300 h-96 md:w-1/5'>
                    Side bar
                </div>
            </div>
        </div>
    );
};

export default NewsPage;