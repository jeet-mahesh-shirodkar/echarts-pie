// import ReactD3 from 'ReactD3';
import React from 'react';
import PieChart from 'react-d3-components';   

export default class D3Pie extends React.Component{ 
render(){
    // var PieChart = ReactD3.PieChart;
 
var data = {
        label: 'somethingA',
        values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
};
 
// var sort = null; // d3.ascending, d3.descending, func(a,b) { return a - b; }, etc...
return(
      <PieChart 
      data={data}
      width={200}
      height={200}
      innerRadius={60}
      outerRadius={100}
                />,
            document.getElementById('location')
);
}
}
