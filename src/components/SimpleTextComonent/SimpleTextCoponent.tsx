import React from "react";
import Box from "@mui/material/Box";

interface SimpleTextComponent {
    label: string;
    value?: string;
    children?: React.ReactNode;
}
export const SimpleTextComponent: React.FC<SimpleTextComponent> = ({label, value, children}) => {
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: '9rem 1fr'}}>
            <Box component='span' sx={{fontSize: '16px', fontWeight: '600'}}>
                {label}:
            </Box>
            <Box component='span'>
                {value || children}
            </Box>
        </Box>
    )
}
