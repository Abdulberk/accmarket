'use client';

import React, { useState } from 'react';
import { Input, Button, Icon } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  showFilters?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search accounts...", 
  onSearch,
  className,
  showFilters = false
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex items-center gap-2", className)}>
      <div className="flex-1 relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          leftIcon={<Icon name="search" size="sm" />}
          className="pr-12"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <Icon name="close" size="sm" />
          </button>
        )}
      </div>
      
      <Button type="submit" size="md">
        Search
      </Button>
      
      {showFilters && (
        <Button variant="outline" size="md">
          <Icon name="menu" size="sm" />
          Filters
        </Button>
      )}
    </form>
  );
};

export default SearchBar;