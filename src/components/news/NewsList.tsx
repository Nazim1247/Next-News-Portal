"use client";
import { fetchNews } from '@/lib/fetchNews';
import { NewsItem } from '@/types/news';
import React, { useEffect, useState } from 'react';
import NewsCard from '../shared/NewsCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    useEffect(()=>{
        const getNews = async ()=>{
            const json = await fetchNews(category, search);
            const news = json.data;
            setNews(news);
        }
        getNews();
    },[category, search]);

    // console.log(news);
    return (
        <div className='max-w-6xl mx-auto my-6'>
            <h1 className="text-2xl mb-4 font-bold text-center">Latest News</h1>

            <div className='flex flex-col md:flex-row items-center justify-between gap-4 mb-4'>
                <SearchBar onSearch={setSearch}/>
                <CategoryFilter onCategoryChange={setCategory}/>
            </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                news.map((item)=>(
                    <NewsCard key={item?._id} item={item}/>
                ))
            }
           </div>
        </div>
    );
};

export default NewsList;