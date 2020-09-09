import React from 'react';
import BarChart from './components/BarChart';
import './index.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Cards from './components/Cards';

const data = [
  {
    xField: "Janeiro",
    yField: 100
  },
  {
    xField: "Fevereiro",
    yField: 80
  },
  {
    xField: "Março",
    yField: 76
  },
  {
    xField: "Abril",
    yField: 90
  },
  {
    xField: "Maio",
    yField: 57
  },
  {
    xField: "Junho",
    yField: 62
  },
  {
    xField: "Julho",
    yField: 57
  }
];

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Navbar/>
      <Cards/>
      <div className="Graph">
        <BarChart
        width="700"
        height="420"
        data={data}
        xRange={[0, 700]}
        xDomain={data.map((s) => s.xField)}
        yRange={[390, 0]}
        yDomain={[0, 100]}>
        </BarChart>
      </div>
    </div>
  );
}

export default App;
