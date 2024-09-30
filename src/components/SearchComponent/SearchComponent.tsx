import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface SearchComponentProps {
  onSearch: (query: string) => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <TextField
      label='Search'
      variant='outlined'
      fullWidth
      margin='normal'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={handleInputChange}
    />
  );
};
