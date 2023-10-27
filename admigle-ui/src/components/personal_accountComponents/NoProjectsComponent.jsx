import React from "react";
import styles from "./styles/NoProjectsComponent_style.module.scss";
import png from '../../images/free-icon-man-11430640.png'

export default function NoProjectsComponent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={png}/>
        <h2>This user has no projects.</h2>
      </div>
    </div>
  );
}
