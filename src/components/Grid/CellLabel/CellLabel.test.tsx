// @ts-ignore
import  * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CellLabel from './CellLabel.tsx';

jest.mock('./utils/setColor', () => ({
    setColor: jest.fn((color: string) => `rgba(${color})`),
}));

describe('CellLabel Component', () => {
    it('renders the badge', () => {
        render(<CellLabel value="Professional" color="blue" />);

        const textElement = screen.getByText(/Professional/i);
        expect(textElement).toBeInTheDocument();
    });
});
