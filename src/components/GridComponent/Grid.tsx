import React from 'react';
import Box from '@mui/material/Box';
import { DataGridPremium, GridColDef, GridPaginationModel, GridRowParams } from '@mui/x-data-grid-premium';
import { PatientBillingData } from '../../interfaces/patients';

interface GridProps {
  rows: GridRowParams[];
  columns: GridColDef[];
  paginationOption?: number[];
  onRowClick: (row: PatientBillingData) => void;
}

export const Grid: React.FC<GridProps> = ({ rows, columns, paginationOption = [5, 10, 15], onRowClick }) => {
  const [paginationModel, setPaginationModel] = React.useState<GridPaginationModel>({
    pageSize: paginationOption[0] || 5,
    page: 0,
  });

  const handlePaginationModelChange = (newModel: GridPaginationModel) => {
    setPaginationModel(newModel);
  };

  const handleRowClick = (params: GridRowParams) => {
    onRowClick(params.row as PatientBillingData);
  };

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGridPremium
        rows={rows}
        columns={columns}
        pagination
        disableRowSelectionOnClick
        paginationMode='client'
        paginationModel={paginationModel}
        pageSizeOptions={paginationOption}
        onPaginationModelChange={handlePaginationModelChange}
        onRowClick={handleRowClick}
        getRowId={(row) => `${row.id}-${row.line}-${row.code}`} // Ensure correct identification
      />
    </Box>
  );
};
