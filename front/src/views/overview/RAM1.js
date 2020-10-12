import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class RAM1 extends Component {
  	constructor() {
		super();
		this.data = []
		this.init = 1
		this.options = {
			theme: "light2", // "light1", "dark1", "dark2"
			animationEnabled: true,
			zoomEnabled: true,
			title: {
				text: "Estado"
			},
			axisY: {
				includeZero: false
			},
			data: [{
				type: "area",
				dataPoints: this.data
			}]
		}
	}
	
	generateDataPoints() {
		var yVal = 100;
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		return {x: this.init++,y: yVal};
	}

	async callAPI(){
		this.data.push(this.generateDataPoints())
		this.options = {
			theme: "light2", // "light1", "dark1", "dark2"
			animationEnabled: true,
			zoomEnabled: true,
			title: {
				text: "Estado"
			},
			axisY: {
				includeZero: false
			},
			data: [{
				type: "area",
				dataPoints: this.data
			}]
		}
		try{
			let rsp = await fetch("http://35.224.229.62:5000/v1/ram")
			let data = await rsp.json();
		}
		catch{}
	}
	
	componentDidMount(){
		this.callAPI();
		setInterval(()=>{
			console.log("call");
			this.callAPI();
		},5000)
	}


	render() {
		
		return (
		  <div className="ChartWithZoom">
				<h1>Ram 1</h1>
				<CanvasJSChart options = {this.options} 
				/* onRef={ref => this.chart = ref} */
				/>
		  </div>
		);
	}
}
export default RAM1;
