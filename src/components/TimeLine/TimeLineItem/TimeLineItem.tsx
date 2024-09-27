import { Card, styled } from '@mui/material';

const TimelineItem = styled(Card)(({ theme }) => ({
    padding: theme.spacing(2),
    maxWidth: '450px',
    minWidth: '250px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    '&:last-child': {

    }
}));

export default TimelineItem;
