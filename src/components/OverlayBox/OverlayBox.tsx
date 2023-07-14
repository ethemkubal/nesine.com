import React from 'react';
import { useSelectedCells } from '../SelectedCellsContext';
import './OverlayBox.css';

const OverlayBox: React.FC = () => {
  const { selectedCells } = useSelectedCells();
  const array = Object.values(selectedCells).map((innerObj) => Object.values(innerObj)[0].rowData);
  const totalAmount =  array.reduce((accumulator, bet) => accumulator * bet.cell.O, 1);
  return (
    <>
      {array.length >0 &&
        <div className="overlay-box">
          <table style={{ width: "100%" }}>
            <tbody>
              {array?.map(bet => (
                <tr style={{ borderBottom: "1px solid black" }}>
                  <td>{bet.MBS}</td>
                  <td>{"Kod:"}</td>
                  <td>{bet.code}</td>
                  <td>{bet.match}</td>
                  <td><strong>{bet.cell.O}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr></hr>
          <h2>Toplam Tutar: {totalAmount}</h2>
        </div> 
      }
    </>
  );
};

export default OverlayBox;