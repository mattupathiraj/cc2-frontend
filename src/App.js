
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import './Main';
import REVIEW from "./REVIEW";
import Main from './Main';
import UPDATE from "./UPDATE";
import DELETE from './DELETE';
import DISPLAY from './DISPLAY';
function App() { 
return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/REVIEW" element={<REVIEW/>}></Route>
                <Route path="/UPDATE" element={<UPDATE/>}></Route>
                <Route path="/DELETE" element={<DELETE/>}></Route>
                <Route path="/DISPLAY" element={<DISPLAY/>}></Route>


            </Routes>
        </div>
    </Router>
);
}
export default App;