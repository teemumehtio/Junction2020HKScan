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
    const chart = am4core.create(this.props.chartDivId, am4charts.XYChart);

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "week";
    categoryAxis.title.text = "Week";
    categoryAxis.renderer.cellStartLocation = 0.2;
    categoryAxis.renderer.cellEndLocation = 0.8;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Weekly average values";
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

    const envSeries = chart.series.push(new am4charts.ColumnSeries());
    envSeries.dataFields.valueY = "environmentalImpact";
    envSeries.dataFields.categoryX = "week";
    envSeries.name = "Environmental impact";
    envSeries.fill = am4core.color("#4caf50");
    envSeries.stroke = am4core.color("#4caf50");

    const welfareSeries = chart.series.push(new am4charts.ColumnSeries());
    welfareSeries.dataFields.valueY = "animalWelfare";
    welfareSeries.dataFields.categoryX = "week";
    welfareSeries.name = "Animal welfare";
    welfareSeries.fill = am4core.color("#2196f3");
    welfareSeries.stroke = am4core.color("#2196f3");

    const costSeries = chart.series.push(new am4charts.ColumnSeries());
    costSeries.dataFields.valueY = "cost";
    costSeries.dataFields.categoryX = "week";
    costSeries.name = "Cost";
    costSeries.fill = am4core.color("#9c27b0");
    costSeries.stroke = am4core.color("#9c27b0");

    chart.legend = new am4charts.Legend();
    chart.legend.markers.template.width = 15;
    chart.legend.markers.template.height = 15;

    chart.data = this.props.data;
    this.chart = chart;
  }

  componentDidUpdate(oldProps) {
    if (this.chart) {
      this.chart.dispose();
    }
    this.createChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div
        id={this.props.chartDivId}
        style={{
          width: this.props.width ? this.props.width : "80%",
          height: this.props.height ? this.props.height : "400px"
        }}
      ></div>
    );
  }
}

export default ImpactGauge;
