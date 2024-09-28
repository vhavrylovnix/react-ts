import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CellLabelComponent } from './CellLabelComponent';
import { setColor } from './utils/setColor';

jest.mock('./utils/setColor', () => ({
    setColor: jest.fn((color: string) => color),
}));

describe('CellLabelComponent Component', () => {
    it('renders component', () => {
        render(<CellLabelComponent value="Professional" color="blue" />);

        const textElement = screen.getByText(/Professional/i);
        expect(textElement).toBeInTheDocument();
    });

    it('renders right color', () => {
        const value = 'Test Label';
        const color = 'blue';

        render(<CellLabelComponent value={value} color={color} />);

        const labelElement = screen.getByText(value);
        expect(labelElement).toBeInTheDocument();

        expect(setColor).toHaveBeenCalledWith(color);

        expect(setColor).toHaveReturnedWith(color);

    });
});
