import { Box, styled } from '@mui/material';

interface TimelineContainerProps {
  isHorizontal: boolean;
}

export const TimelineContainer = styled(Box)<TimelineContainerProps>(({ isHorizontal }) => ({
  display: 'flex',
  flexDirection: isHorizontal ? 'row' : 'column',
  overflow: 'auto',
  paddingLeft: '7px',
  paddingTop: isHorizontal ? '7px' : '0',
}));
