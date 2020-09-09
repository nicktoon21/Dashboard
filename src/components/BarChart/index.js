import React, { Component } from 'react';
import * as d3 from "d3";
import './style.css';

class BarChart extends Component {
    
    componentDidMount(){
        this.createChart();
    }

    createChart(){
        const svg = d3.select("#chart-container")
                    .append("svg")
                    .attr("width", this.props.width)
                    .attr("height", this.props.height)
                    .attr("fill", this.props.fillColor);

        const chart = svg.append('g').attr('transform',`translate(30,5)`);

        const xAxis = d3.scaleBand()
            .range(this.props.xRange)
            .domain(this.props.xDomain)
            .padding(0.4)
        const yAxis = d3.scaleLinear()
            .range(this.props.yRange)
            .domain(this.props.yDomain);
        chart.append('g')
            .call(d3.axisLeft(yAxis));
        chart.append('g')
            .attr('transform', `translate(0, ${this.props.yRange[0]})`)
            .call(d3.axisBottom(xAxis));
        
        chart.selectAll()
            .data(this.props.data)
            .enter()
            .append('rect')
            .attr('x', (s) => xAxis(s.xField))
            .attr('y', (s) => yAxis(s.yField))
            .attr('height', (s) => this.props.height - yAxis(s.yField) - 30)
            .attr('width', xAxis.bandwidth());
        
            chart.selectAll()
            .data(this.props.data)
            .enter()
            .append('text')
            .attr('class', 'value')
            .attr('x', (a) => xAxis(a.xField) + xAxis.bandwidth() / 2)
            .attr('y', (a) => yAxis(a.yField) + 30)
            .attr('text-anchor', 'middle')
            .text((a) => a.yField);
    }
    
    render() {
        return(
            <div>
                <h2>Total de Posts</h2>
                <div id="chart-container"></div>    
            </div>
            
        )
    }
}
export default BarChart;