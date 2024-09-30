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
  maxHeight:  isHorizontal ? '900px' : 'auto',
  height: isHorizontal ? '900px' : 'auto',
  margin: ' 0 auto',
}));





// paddingLeft: '7px',
// paddingTop: isHorizontal ? '7px' : '0',
