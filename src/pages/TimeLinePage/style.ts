import {Theme} from "@mui/material";

export const timeLineContainerSX = (theme: Theme) => ({
        position: 'relative',
        paddingBottom: '32px',
        paddingLeft: '32px',

        '&::after': {
                content: '""', // Corrected content syntax for pseudo-element
                position: 'absolute',
                width: '6px',
                backgroundColor: '#EEE', // Use a theme color if needed, e.g., theme.palette.grey[300]
                top: 0,
                bottom: 0,
                left: '0%',
                marginLeft: '-3px',
        },
});
