import React, { createContext, useContext, useState } from 'react';

interface SelectedCellsContextType {
  selectedCells: { [rowIndex: string]: { [cellIndex: string]: any } };
  setSelectedCells: React.Dispatch<React.SetStateAction<{ [rowIndex: string]: { [cellIndex: string]: any } }>>;
}

const SelectedCellsContext = createContext<SelectedCellsContextType | undefined>(undefined);

export const useSelectedCells = () => {
  const context = useContext(SelectedCellsContext);

  if (!context) {
    throw new Error('useSelectedCells must be used within a SelectedCellsProvider');
  }

  return context;
};

interface SelectedCellsProviderProps {
  children: React.ReactNode;
}

export const SelectedCellsProvider: React.FC<SelectedCellsProviderProps> = ({ children }) => {
  const [selectedCells, setSelectedCells] = useState<{ [rowIndex: string]: { [cellIndex: string]: any } }>({});

  return (
    <SelectedCellsContext.Provider value={{ selectedCells, setSelectedCells }}>
      {children}
    </SelectedCellsContext.Provider>
  );
};
