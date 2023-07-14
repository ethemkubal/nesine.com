import React ,{ useCallback }from "react";
import { Bet } from "../../models/apimodels";
import { TableCell } from "./TableCell";


export const TableRow: React.FC<{
    rowIndex: string;
    bet: Bet;
    selectedCells: { [rowIndex: string]: { [cellIndex: string]: any } };
    onCellClick: (rowIndex: string, cellIndex: string, cellValue: any, rowData: any) => void;
  }> = ({ rowIndex, bet, selectedCells, onCellClick }) => {

    let infbet = {MBS: bet.OCG[1].MBS , code : bet.C, match: bet.N}
    const cell0 = bet.OCG[1].OC[0];
    const cell1 = bet.OCG[1].OC[1];
    const cell3 = bet.OCG[2].OC[3];
    const cell4 = bet.OCG[2].OC[4];
    const cell5 = bet.OCG[2].OC[5];
  
    const isCellSelected = useCallback((cellIndex: string) => {
      return selectedCells[rowIndex] && selectedCells[rowIndex][cellIndex];
    }, [selectedCells, rowIndex]);
  
    return (
      <>
        <tr>
          <td className="center-left">
            {bet.D} {bet.DAY} {bet.LN}
          </td>
          <td>Yorumlar</td>
          <td />
          <td>1</td>
          <td>X</td>
          <td>2</td>
          <td>Alt</td>
          <td>Üst</td>
          <td>H1</td>
          <td>1</td>
          <td>X</td>
          <td>2</td>
          <td>H2</td>
          <td>1-X</td>
          <td>1-2</td>
          <td>X-2</td>
          <td>Var</td>
          <td>Yok</td>
          <td>+99</td>
        </tr>
        <tr className="custom-row">
          <td className="center-left">
            <strong>{bet.C}</strong> {bet.T} {bet.N}
          </td>
          <td>{"Yorumlar"}</td>
          <td>{bet.OCG[1].MBS}</td>
          <TableCell
            cellIndex={cell0.N}
            cellValue={cell0.O}
            isSelected={isCellSelected(cell0.N)}
            onClick={() => onCellClick(rowIndex, cell0.N, cell0.O, {...infbet, cell:cell0})}
          />
          <TableCell
            cellIndex={cell1.N}
            cellValue={cell1.O}
            isSelected={isCellSelected(cell1.N)}
            onClick={() => onCellClick(rowIndex, cell1.N, cell1.O, {...infbet, cell:cell1})}
          />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <TableCell
            cellIndex={cell3.N}
            cellValue={cell3.O}
            isSelected={isCellSelected(cell3.N)}
            onClick={() => onCellClick(rowIndex, cell3.N, cell3.O, {...infbet, cell:cell3})}
          />
          <TableCell
            cellIndex={cell4.N}
            cellValue={cell4.O}
            isSelected={isCellSelected(cell4.N)}
            onClick={() => onCellClick(rowIndex, cell4.N, cell4.O, {...infbet, cell:cell4})}
          />
          <TableCell
            cellIndex={cell5.N}
            cellValue={cell5.O}
            isSelected={isCellSelected(cell5.N)}
            onClick={() => onCellClick(rowIndex, cell5.N, cell5.O, {...infbet, cell:cell5})}
          />
          <td />
          <td />
          <td />
          <td>3</td>
        </tr>
      </>
    );
  };