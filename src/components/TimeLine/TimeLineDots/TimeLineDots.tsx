import { Box, styled } from '@mui/material';

interface TimelineDotProps {
    isHorizontal: boolean;
}
export const TimelineDot = styled(Box)<TimelineDotProps>(({ isHorizontal }) => ({
    position: 'absolute',
    width: '14px',
    height: '14px',
    zIndex: '1',
    borderRadius: '50%',
    backgroundColor: '#f05454',
    left: isHorizontal ? '50%' : '0',
    top: isHorizontal ? '0' : '0',
    transform: isHorizontal ? 'translateY(-50%)' : 'translateX(-50%)',
}));
