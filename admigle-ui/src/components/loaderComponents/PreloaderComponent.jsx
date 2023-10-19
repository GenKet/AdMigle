import React from "react";
import loader_dots from "../../images/three-dots.svg";
import styles from './PrealoderComponent_styles.module.scss'

export default function PreloaderComponent() {


  return (
    <div className={styles.wrapper_loader}>
      <img src={loader_dots} alt='' />
    </div>
  );
}
