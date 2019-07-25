import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
// import './App.css';

export default class EchartsPie extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0,
    };
  }
  getOption = () => ({
    title : {
      text: 'Jeet Mahesh Shirodkar',
      subtext: 'Here are my skill set ;P',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['a','b','c','d','e']
    },
    series : [
      {
      name: 'Skill Set',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value:30, name:'React'},
        {value:15, name:'HTML'},
        {value:15, name:'CSS'},
        {value:40, name:'JavaScript'}
      ],

      itemStyle: {
        emphasis: {
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
      }
    ]
  });

  onChartClick = (param, echarts) => {
    console.log(param, echarts);
    alert('chart click');

    this.setState({
      cnt: this.state.cnt + 1,
    })

  };

  onChartLegendselectchanged = (param, echart) => {
    console.log(param, echart);
    alert('chart legendselectchanged');
  };

  onChartReady = (echarts) => {
    console.log('echart is ready', echarts);
  };

  render() {
    let onEvents = {
      'click': this.onChartClick,
      'legendselectchanged': this.onChartLegendselectchanged
    };
    return (
      <div className='examples'>
        <div className='parent'>
          <strong > onEvents </strong>（{this.state.cnt})
          <ReactEcharts
            option={this.getOption()}
            style={{height: 300}}
            onChartReady={this.onChartReady}
            onEvents={onEvents} />
        </div>
      </div>
    );
  }
};

