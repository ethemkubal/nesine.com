import React from 'react';  
import { TableRow } from './TableRow';
import { Bets } from '../../models/apimodels';
 

interface TableComponentProps {
  bets: Bets;
  selectedCells: { [rowIndex: string]: { [cellIndex: string]: any } };
  onCellClick: (rowIndex: string, cellIndex: string, cellValue: any, rowData: any) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({ bets, selectedCells, onCellClick }) => {
  const renderTable = () => {
    return bets.map((bet, index) => (
      <TableRow
        key={bet.C}
        rowIndex={index.toString()}
        bet={bet}
        selectedCells={selectedCells}
        onCellClick={onCellClick}
      />
    ));
  };

  return (
    <table className="custom-table">
      <tbody>
        <tr>
          <th>Tarih</th>
          <th>Yorumlar</th>
          <th></th>
          <th>1</th>
          <th>X</th>
          <th>2</th>
          <th>Alt</th>
          <th>Üst</th>
          <th>H1</th>
          <th>1</th>
          <th>X</th>
          <th>2</th>
          <th>H2</th>
          <th>1-X</th>
          <th>1-2</th>
          <th>X-2</th>
          <th>Var</th>
          <th>Yok</th>
          <th>+99</th>
        </tr>
        {renderTable()}
      </tbody>
    </table>
  );
};

export default TableComponent;
