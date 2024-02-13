import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TradingWiev from "./Trading";
import Navbar from "./Navbar";
import ArexCharts from "./ArexCarts";
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/arexchart" element={<ArexCharts/>} />
          <Route path="/tradingwiev" element={<TradingWiev/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
