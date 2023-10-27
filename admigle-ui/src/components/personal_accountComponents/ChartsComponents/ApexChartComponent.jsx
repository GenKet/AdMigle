import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styles from './styles/MainChartComponent_style.module.scss'
import classNames from "classnames";

function ApexChart() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 1],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "20161-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2023-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className={ classNames(styles.chart)} style={{width:'60%'}}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
      width='100%'
      height='100%'
      />
    </div>
  );
}

export default ApexChart;