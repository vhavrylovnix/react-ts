import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid } from './Grid';
import { GridColDef, GridRowParams } from '@mui/x-data-grid-premium';

// @ts-ignore
const mockRows: GridRowParams[] = [
  { id: '1', line: '11', code: 'A001', value: { id: '1', line: '11', code: 'A001' } },
  { id: '2', line: '22', code: 'A002', value: { id: '2', line: '22', code: 'A002' } },
];

const mockColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'line', headerName: 'Line', width: 100 },
  { field: 'code', headerName: 'Code', width: 100 },
];

const mockResult = {
  id: '1',
  line: '11',
  code: 'A001',
  value: {
    code: 'A001',
    id: '1',
    line: '11',
  },
};

const mockOnRowClick = jest.fn();

describe('GridComponent Component', () => {
  it('renders grid', () => {
    render(<Grid rows={mockRows} columns={mockColumns} onRowClick={mockOnRowClick} />);

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Line')).toBeInTheDocument();
    expect(screen.getByText('Code')).toBeInTheDocument();

    expect(screen.getByText('11')).toBeInTheDocument();
  });

  it('handles row click events', () => {
    render(<Grid rows={mockRows} columns={mockColumns} onRowClick={mockOnRowClick} />);

    const row = screen.getByText('A001');
    if (row) {
      fireEvent.click(row);
    }

    expect(mockOnRowClick).toHaveBeenCalledWith(mockResult);
  });
});
