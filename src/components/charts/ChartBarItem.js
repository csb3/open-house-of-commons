import classNames from "classnames";
import { useState } from "react";

export default function ChartBarItem(props) {
  const chartType = props.chartType;
  const buttonClass = classNames('chart-bar', {"selected": props.selected});
  return (
    <button className={buttonClass} onClick={() => props.onClick(chartType)}>{props.chartType}</button>
  )
}