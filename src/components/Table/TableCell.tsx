import React from "react";

export const TableCell: React.FC<{
    cellIndex: string;
    cellValue: any;
    isSelected: boolean;
    onClick: () => void;
}> = ({ cellIndex, cellValue, isSelected, onClick }) => {
    return (
        <td
            onClick={onClick}
            className={isSelected ? 'selected-cell' : ''}
        >
            {cellValue}
        </td>
    );
};