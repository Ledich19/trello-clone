import React from 'react';
import './App.scss';
import { Counter } from './features/counter/Counter';
import { Quotes } from './features/quotes/Quotes';
import logo from './logo.svg';
import Board from './pages/Board/Board';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => (
  <div className="App">
    <Routes>
      <Route path="" element={<Board />}>
      </Route>
      <Route path="board" element={<Board />}></Route>
    </Routes>

    {/* <header className="App-header">
      <Board />
      <span>head</span>
    </header> */}
  </div>
);
export default App;
