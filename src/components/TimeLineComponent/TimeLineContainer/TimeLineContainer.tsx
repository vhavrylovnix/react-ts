import { Box, styled } from '@mui/material';

interface TimelineContainerProps {
  isHorizontal: boolean;
}

export const TimelineContainer = styled(Box)<TimelineContainerProps>(({ isHorizontal }) => ({
  display: 'flex',
  flexDirection: isHorizontal ? 'row' : 'column',
  overflow: 'auto',
  position: 'relative',
  width: isHorizontal ? '100%' : '1200px',
  maxHeight:  isHorizontal ? '700px' : 'auto',
  height: isHorizontal ? '700px' : 'auto',
  margin: ' 0 auto',
}));

