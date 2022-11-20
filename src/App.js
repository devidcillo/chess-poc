import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">About</Link>
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
