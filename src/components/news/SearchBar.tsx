import React from 'react';
import { Input } from '../ui/input';

interface SearchBarProps {
    onSearch: (searchTram: string)=> void;
}

const SearchBar = ({onSearch}: SearchBarProps) => {
    return (
        <div className='md:w-3/4'>
            <h2 className='text-lg font-bold'>Search News</h2>
            <Input type='text' onChange={(e)=> onSearch(e.target.value)} placeholder='Search news..'/>
        </div>
    );
};

export default SearchBar;