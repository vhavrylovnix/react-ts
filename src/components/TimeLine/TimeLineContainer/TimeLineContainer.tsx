import { Box, styled } from '@mui/material';

interface TimelineContainerProps {
    isHorizontal: boolean;
}

const TimelineContainer = styled(Box)<TimelineContainerProps>(({ isHorizontal, ...reset }) => ({
    display: 'flex',
    flexDirection: isHorizontal ? 'row' : 'column',
    overflow: 'auto',
    paddingLeft: '7px'
}));

export default TimelineContainer;
