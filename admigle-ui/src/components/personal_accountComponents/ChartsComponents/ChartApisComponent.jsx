import React from "react";
import { useParams } from "react-router-dom";
import styles from "../ChartsComponents/styles/MainChartComponent_style.module.scss";
import MainChartsComponent from "./MainChartsComponent";
import WrapperItemComponent from "./WrapperItemComponent";

export default function ChartApisComponent() {
  const { key } = useParams();

  return (
    <>
      <div className={styles.wrapper_charts}>
        <div className={styles.title_page}>Charts for {key}</div>
      </div>
      <div className={styles.wrapper_component_charts}>
        <MainChartsComponent />
      </div>
    </>
  );
}
