import React from 'react'
import style from './styles/MainPersonalAccount_styles.module.scss'
import MainHeaderComponent from './HeaderComponents/MainHeaderComponent'
import SideBarComponent from './SideBarComponent'
import MainChartsComponent from './ChartsComponents/MainChartsComponent'

export default function MainPersonalAccountComponent() {
  return (
   <div className={style.wrapper_account}>
    <MainHeaderComponent/>
    <SideBarComponent/>
    <MainChartsComponent/>
   </div>
  )
}
