import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Board from './pages/Board/Board';

const App: React.FC = () => (
  <div className="App">
    <Routes>
      <Route path="" element={<Board />} />
      <Route path="board" element={<Board />} />
    </Routes>
  </div>
);
export default App;
