// src/Index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { SelectedCellsProvider } from './components/SelectedCellsContext';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
const rootNode = document.getElementById('app');
if(rootNode){
  createRoot(rootNode)
    .render(
      <SelectedCellsProvider>
        <App />
      </SelectedCellsProvider>
    );
}