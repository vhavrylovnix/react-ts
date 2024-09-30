import { Theme } from '@mui/material';

export const badgeStylesSX = (value) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '16px',
  border: `1px solid ${value}`,
  backgroundColor: 'transparent',
  color: `${value}`,
  fontWeight: 'bold',
});
