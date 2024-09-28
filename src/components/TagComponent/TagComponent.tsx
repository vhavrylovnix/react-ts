import { Box, styled } from '@mui/material';
import React from "react";

interface TagComponent {
    text: string;
    isHorizontal: boolean,
}

interface TagProps {
    isHorizontal: boolean;
}

const Tag = styled(Box)<TagProps>(({ isHorizontal }) => ({
    backgroundColor: '#f05454',
    position: 'absolute',
    left:  isHorizontal ? '140px' : '325px',
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    marginBottom: '8px',
    display: 'inline-block',
}));

export const TagComponent: React.FC<TagComponent> = ({ text, isHorizontal  }) => {
    return <Tag isHorizontal={isHorizontal}>{text}</Tag>;
};
