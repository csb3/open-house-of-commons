import { useState } from "react";
import ChartBarItem from "./ChartBarItem";
import "./ChartBar.scss";

export default function ChartBar(props) {
  console.log("Onclick in ChartBar: ", props.onClick);
  return (
    <div className="chart-bar">
      <ChartBarItem selected={props.chartView === "Overview"} chartType="Overview" onClick={props.onClick}/>
      <ChartBarItem selected={props.chartView === "How MPs Voted"} chartType="How MPs Voted" onClick={props.onClick}/>
      <ChartBarItem selected={props.chartView === '"Yes" Votes By Party'} chartType='"Yes" Votes By Party' onClick={props.onClick}/>
      <ChartBarItem selected={props.chartView === '"No" Votes By Party'} chartType='"No" Votes By Party' onClick={props.onClick}/>
      <ChartBarItem selected={props.chartView === "User Votes"} chartType="User Votes" onClick={props.onClick}/>
    </div>
  )
};