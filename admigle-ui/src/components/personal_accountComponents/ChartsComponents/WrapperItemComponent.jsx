import React from 'react'
import style from '../ChartsComponents/styles/MainChartComponent_style.module.scss';
import ItemAnimationComponent from '../ItemAnimationComponent';

export default function WrapperItemComponent() {
  return (
    <div className={style.wrapper_animation_blocks}>
    <ItemAnimationComponent />
    <ItemAnimationComponent />
    <ItemAnimationComponent />
    <ItemAnimationComponent />
    <ItemAnimationComponent />
    <ItemAnimationComponent />
  </div>
  )
}
