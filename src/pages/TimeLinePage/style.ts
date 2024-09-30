export const timeLineContainerSX = (isHorizontal: boolean) => ({
  position: 'relative',
  paddingBottom: '32px',
  paddingLeft: '32px',
  paddingTop: isHorizontal ? '32px' : '0',

  '&::after': {
    content: '""',
    position: 'absolute',
    width: isHorizontal ? '100%' : '6px',
    height: isHorizontal ? '6px' : '100%',
    backgroundColor: '#EEE', // Use a theme color if needed, e.g., theme.palette.grey[300]
    top: isHorizontal ? '-3px' : '0',
    bottom: 0,
    left: '0%',
    marginLeft: '-3px',
  },
});
