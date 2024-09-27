import React from "react";
import Box from "@mui/material/Box";

const SimpleText: React.FC = ({label, value}) => {
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: '9rem 1fr'}}>
            <Box component='span' sx={{fontSize: '16px', fontWeight: '600'}}>
                {label}:
            </Box>
            <Box component='span'>
                {value}
            </Box>
        </Box>
    )
}

export default SimpleText;
