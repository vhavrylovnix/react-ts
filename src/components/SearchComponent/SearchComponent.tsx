import {InputAdornment, TextField} from '@mui/material';
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

// Define props for the SearchComponent
interface SearchComponentProps {
    onSearch: (query: string) => void; // Callback to pass the search query to the parent
}

export const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
    // Handle input changes and call the parent callback
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value.toLowerCase()); // Pass the search query back to the parent component
    };

    return (
        <TextField
            label="Search"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            onChange={handleInputChange}
        />
    );
};

