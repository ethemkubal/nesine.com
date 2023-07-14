import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import './TableComponent.css';
import TableComponent from './components/Table/TableComponent';
import { Bet, Bets } from './models/apimodels';
import OverlayBox from './components/OverlayBox/OverlayBox';
import { SelectedCellsProvider, useSelectedCells } from './components/SelectedCellsContext';

export const App: React.FC = () => {

  const { selectedCells, setSelectedCells } = useSelectedCells();
  // const [selectedCells, setSelectedCells] = useState<{ [rowIndex: string]: { [cellIndex: string]: any } }>({});
  const [fetchedData, setFetchedData] = useState<Bets>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('https://nesine-case-study.onrender.com/bets');
      const data = response.data;
      setFetchedData(data);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const bets = useMemo(() => fetchedData, [fetchedData]);

  const handleCellClick = useCallback((rowIndex: string, cellIndex: string, cellValue: any, rowData: any) => {
    setSelectedCells((prevSelectedCells) => {
      const updatedSelectedCells = { ...prevSelectedCells };

      if (updatedSelectedCells[rowIndex]) {
        if (updatedSelectedCells[rowIndex][cellIndex]) {
          // Eğer tıklanan hücre zaten seçiliyse, seçimi kaldır
          delete updatedSelectedCells[rowIndex][cellIndex];

          if (Object.keys(updatedSelectedCells[rowIndex]).length === 0) {
            // Eğer satırdaki tüm seçili hücreler kaldırıldıysa, satırı da kaldır
            delete updatedSelectedCells[rowIndex];
          }
        } else {
          // Eğer farklı bir hücreye tıklandıysa, önceki seçimi kaldır ve yeni hücreyi seçili yap
          updatedSelectedCells[rowIndex] = { [cellIndex]: {cellValue, rowData} };
        }
      } else {
        // Eğer satır seçili değilse, tıklanan hücreyi seçili yap
        updatedSelectedCells[rowIndex] = { [cellIndex]: {cellValue, rowData} };
      }

      return updatedSelectedCells;
    });
  }, []);

  return (
    
      <>
        <TableComponent bets={bets} selectedCells={selectedCells} onCellClick={handleCellClick} />
        <OverlayBox />
      </> 
  );
};

