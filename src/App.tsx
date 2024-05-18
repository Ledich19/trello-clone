import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

const App: React.FC = () => (
  <div className="App">
    <Routes>
      <Route index element={<Home />} />
      <Route path="board" element={<Board />} />
      <Route path="board/:board_id" element={<Board />} />
    </Routes>
  </div>
);
export default App;
