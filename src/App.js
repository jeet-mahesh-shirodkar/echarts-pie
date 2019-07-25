import React from 'react';
// import ReactEcharts from 'echarts-for-react';
import './App.css';
import EchartsPie from './Components/echartsPie.js';
// import D3Pie from "./Components/d3Pie.js";

export default class App extends React.Component{
  render() {
    const data=[
      {value:30, name:'React.JS'},
      {value:15, name:'HTML'},
      {value:15, name:'CSS'},
      {value:40, name:'JavaScript'}
    ]
    return (
      <div>
      <EchartsPie/>
      {/* <D3Pie /> */}
    </div>
    );
  }
}

