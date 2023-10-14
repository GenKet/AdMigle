import React, { useState } from "react";
import styles from './styles/MainPersonalAccount_styles.module.scss'
import classnames from 'classnames'

export default function SideBarComponent() {

const close_side_bar = (e)=>{
    setSideBarState(!SideBarState)
}

const [SideBarState, setSideBarState] = useState(false);

  return (
<div className={classnames(styles.side_bar_wrapper, { [styles.close_state_side_bar]: SideBarState })}>
        <div className={styles.header_side_bar}>
        <div className={styles.logo}>AdMigle</div>
        <div className={classnames(styles.arrow_close_side_bar, {[styles.rotate_arrow]:SideBarState})} onClick={close_side_bar}>&rarr;</div>
        </div>

    </div>
  );
}
