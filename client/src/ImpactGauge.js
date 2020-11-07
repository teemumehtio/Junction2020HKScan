import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class ImpactGauge extends Component {
  constructor(props) {
    super(props);
    this.createChart = this.createChart.bind(this);
  }

  componentDidMount() {
    this.createChart();
  }

  createChart() {
    const chart = am4core.create(this.props.chartDivId, am4charts.GaugeChart);
    chart.innerRadius = am4core.percent(70);
    this.chart = chart;

    const axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.fontSize = am4core.percent(70);

    const color =
      this.props.referenceValue && this.props.value < this.props.referenceValue
        ? am4core.color("red").lighten(0.3)
        : am4core.color("green").lighten(0.3);

    const start = this.props.referenceValue
      ? this.props.value < this.props.referenceValue
        ? this.props.value
        : this.props.referenceValue
      : 0;
    const end = this.props.referenceValue
      ? this.props.value > this.props.referenceValue
        ? this.props.value
        : this.props.referenceValue
      : this.props.value;

    const range = axis.axisRanges.create();
    range.value = start;
    range.endValue = end;
    range.axisFill.fillOpacity = 1;
    if (
      this.props.referenceValue &&
      this.props.value < this.props.referenceValue
    ) {
      range.axisFill.fill = color.lighten(0.7);
    } else {
      range.axisFill.fill = color;
    }

    if (this.props.referenceValue) {
      const rangeDifference = axis.axisRanges.create();
      rangeDifference.value = 0;
      rangeDifference.endValue = start;
      rangeDifference.axisFill.fillOpacity = 1;
      if (this.props.value < this.props.referenceValue) {
        rangeDifference.axisFill.fill = color;
      } else {
        rangeDifference.axisFill.fill = color.lighten(0.7);
      }
    }

    const hand = chart.hands.push(new am4charts.ClockHand());
    hand.innerRadius = am4core.percent(60);
    hand.radius = am4core.percent(110);
    hand.startWidth = 6;
    hand.endWidth = 6;
    hand.pin.disabled = true;
    hand.showValue(this.props.value);
  }

  componentDidUpdate(oldProps) {
    if (this.chart) {
      this.chart.data = this.props.data;
    }
  }

  render() {
    return (
      <div
        id={this.props.chartDivId}
        style={{
          width: this.props.width ? this.props.width : "100%",
          height: this.props.height ? this.props.height : "150px"
        }}
      ></div>
    );
  }
}

export default ImpactGauge;
