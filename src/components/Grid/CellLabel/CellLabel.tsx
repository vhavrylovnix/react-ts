import React from 'react';
import { Box, Typography } from '@mui/material';
import { badgeStylesSX } from './style.ts';
import { setColor } from './utils/setColor.ts';

interface CellLabelPros {
    value: string;
    color: string;
}

const BillingClassBadge: React.FC<CellLabelPros> = ({ value, color }) => {
    const badgeColor = setColor(color);

    return (
        <Box sx={badgeStylesSX(badgeColor)}>
            <Typography variant="body2">{value}</Typography>
        </Box>
    );
};

export default BillingClassBadge;
