import React from 'react';
import { Box, Typography } from '@mui/material';
import { badgeStylesSX } from './style';
import { setColor } from './utils/setColor';

interface CellLabelPros {
  value: string;
  color: string;
}

export const CellLabelComponent: React.FC<CellLabelPros> = ({ value, color }) => {
  const badgeColor = setColor(color);

  return (
    <Box sx={badgeStylesSX(badgeColor)}>
      <Typography variant='body2'>{value}</Typography>
    </Box>
  );
};
