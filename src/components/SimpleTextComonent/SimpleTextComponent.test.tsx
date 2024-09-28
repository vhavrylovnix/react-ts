import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SimpleTextComponent } from './SimpleTextCoponent';

describe('SimpleTextComponent', () => {
    it('renders corectly', () => {
        render(<SimpleTextComponent label="Label" value="Value" />);

        expect(screen.getByText(/label:/i)).toBeInTheDocument();
        expect(screen.getByText(/value/i)).toBeInTheDocument();
    });

    it('renders child if value empty', () => {
        render(
            <SimpleTextComponent label="Label">
                <span>Child Component</span>
            </SimpleTextComponent>
        );

        expect(screen.getByText(/label:/i)).toBeInTheDocument();

        expect(screen.getByText(/child component/i)).toBeInTheDocument();
    });

    it('check if value rendered when provide both', () => {
        render(
            <SimpleTextComponent label="Label" value="Priority Value">
                <span>Ignored Child</span>
            </SimpleTextComponent>
        );

        expect(screen.getByText(/label:/i)).toBeInTheDocument();

        expect(screen.getByText(/priority value/i)).toBeInTheDocument();
        expect(screen.queryByText(/ignored child/i)).not.toBeInTheDocument();
    });
});
