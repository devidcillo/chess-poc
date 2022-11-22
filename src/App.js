import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import ChessboardApp from "./models/ChessboardApp";
import List from "./models/List";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Game</Link>
            </li>
            <li>
              <Link to="/list">Stats</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ChessboardApp />}/>
          <Route path="/list" element={<List />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
