import React from 'react'
import style from './styles/MainChartComponent_style.module.scss'
import VerticalBarChartComponent from './VerticalBarChartComponent';
import AreaChartComponent from './AreaChartComponent';
import PieChartComponent from './PieChartComponent';
import MultiaxisLineChart from './MultiaxisLineChart';
import ApexChart from './ApexChartComponent';

export default function MainChartsComponent() {
  return (
    <div className={style.wrapper_charts}>
       <VerticalBarChartComponent/>
       <AreaChartComponent />   
       <PieChartComponent />
       <MultiaxisLineChart />
       <ApexChart/>
    </div>
  )
}
