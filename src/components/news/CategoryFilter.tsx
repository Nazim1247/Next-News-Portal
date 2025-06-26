import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface CategoryChangeProps {
    onCategoryChange: (searchTram: string)=> void;
}

const CategoryFilter = ({onCategoryChange}: CategoryChangeProps) => {
    const categories = ["all", "tech", "health", "sports", "business"];

    return (
        <div>
            <h2 className='text-lg font-bold'>Filter by Category</h2>
            <Select onValueChange={(value)=> onCategoryChange(value === "all" ? "" : value)}>
  <SelectTrigger className="w-[180px] capitalize">
    <SelectValue placeholder="Select Category" />
  </SelectTrigger>
  <SelectContent>
    {
        categories.map((category)=> (
            <SelectItem key={category} value={category} className='capitalize'>{category}</SelectItem>
        ))
    }
    
  </SelectContent>
</Select>
        </div>
    );
};

export default CategoryFilter;