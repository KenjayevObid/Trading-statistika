import AreaCharts from "./AreaCharts/index";
import LineCharts from "./LineCharts/index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AreaCharts />} />
          <Route path="/viloyat" element={<LineCharts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
