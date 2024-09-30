import { Theme } from '@mui/material';

export const badgeStylesSX = (value) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '16px',
  border: `1px solid ${value}`, // Match the orange color of the border
  backgroundColor: 'transparent', // Transparent background
  color: `${value}`, // Orange color for the text and icon
  fontWeight: 'bold',
});
