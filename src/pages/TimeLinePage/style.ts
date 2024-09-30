export const leftTimeLineContainerSX = (isHorizontal: boolean) => ({
  display: 'flex',
  alignItems: 'end',
  justifyContent: isHorizontal ? 'unset' : 'end',
  padding: '10px 40px',
  position: 'relative',
  backgroundColor: 'inherit',
  width: '50%',
  height: isHorizontal ? '50%' : 'auto',
  left: 0,
  '&::before' : {
    content: '""',
    position: 'absolute',
    width: '16px',
    height: '16px',
    right: isHorizontal ? '0' : '-8px',
    left: isHorizontal ? '50%' : '98.6%',
    backgroundColor: '#f05454',
    top: isHorizontal ? '98.6%': '10px',
    borderRadius: '50%',
    zIndex: '1',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    width: isHorizontal ? '100%' : '6px',
    height: isHorizontal ? '6px' : '100%',
    backgroundColor: '#EEE',
    transform: isHorizontal ? 'translateY(100%)' : 'translateX(0&)',
    bottom: '0',
    left:  isHorizontal ? '0' : '100%',
    marginLeft: '-3px'
  }
});


export const rightTimeLineContainerSX = (isHorizontal: boolean) => ({
  display: 'flex',
  alignItems: 'start',
  padding: '10px 40px',
  position: 'relative',
  backgroundColor: 'inherit',
  width: '50%',
  height: isHorizontal ? '50%' : 'auto',
  left: isHorizontal ? '0' : '50%',
  top: isHorizontal ? '50%' : '0',
  '&::before' : {
    content: '""',
    position: 'absolute',
    width: '16px',
    height: '16px',
    left: isHorizontal ? '50%' : '-8px',
    backgroundColor: '#f05454',
    top: isHorizontal ? '-6px': '10px',
    borderRadius: '50%',
    zIndex: '1',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: isHorizontal ? '100%' : '6px',
    height: isHorizontal ? '6px' : '100%',
    backgroundColor: '#EEE',
    top: '0',
    transform: isHorizontal ? 'translateY(0%)' : 'translateX(0)',
    bottom: '0',
    left: 0,
    marginLeft: '-3px'
  }
});

