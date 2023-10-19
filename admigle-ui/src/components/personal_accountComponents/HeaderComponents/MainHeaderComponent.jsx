import React, { useState } from "react";
import styles from "./styles/MainHeader_styles.module.scss";
import DropListComponent from "./DropListComponent";
import { useDispatch, useSelector } from 'react-redux';
import { visib_list } from "../../../redux/drop_list_logic";


export default function MainHeaderComponent() {

  const [] = useState(false);

const open_account_edit = (e) =>{
  
}

  const lang = useSelector((state)=>state.language.value);
  const drop_list =  useSelector(state=>state.drop_list.value)
  const dispatch =  useDispatch();

  return (
    <div className={styles.wrapper_header}>
      <div className={styles.lang_block} onClick={()=>{dispatch(visib_list())}}>
       <div className={styles.title_lang}>{lang.title}</div>
       <img src={lang.imgURL}/>
      </div>

      <DropListComponent visib = {drop_list} ignore_lang = {lang}/>
      <div className={styles.account} onClick={open_account_edit}>
        <div className={styles.image_account}>35x35</div>
        <div className={styles.account_name}>Antonio DeBanano</div>
      </div>
    </div>
  );
}
