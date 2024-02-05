import HeatMap from "./HeatMap";
import LineCharts from "./LineCharts/index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HeatMap />} />
          <Route path="/company" element={<LineCharts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
