import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TradingWiev from "./Trading";
import Navbar from "./Navbar";
import ArexCharts from "./ArexCarts";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/arexchart" element={<ArexCharts/>} />
          <Route path="/tradingwiev" element={<TradingWiev/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
