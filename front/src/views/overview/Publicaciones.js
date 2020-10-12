import React, { Component } from 'react';
import Comm from './Comment';
import CanvasJSReact from '../../assets/canvasjs.react';
import Select from 'react-select';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Publicaciones extends Component {

  	constructor() {
		super();
		this.products = [
			{
				'value':'Servidor A',
				'label':'Servidor A'
			},
			{
				'value':'Servidor B',
				'label':'Servidor B'
			},
			{
				'value':'Servidor C',
				'label':'Servidor C'
			},
			{
				'value':'Servidor D',
				'label':'Servidor D'
			},
			{
				'value':'Servidor E',
				'label':'Servidor E'
			},
			{
				'value':'Servidor F',
				'label':'Servidor F'
			}
		];

		this.comments = [
			{
				'user':'uno',
				'comment':'primer'
			},
			{
				'user':'dos',
				'comment':'segundo'
			},
			{
				'user':'tres',
				'comment':'tercer'
			},
			{
				'user':'cuatro',
				'comment':'cuarto'
			},
			{
				'user':'cinco',
				'comment':'cinco'
			},
			{
				'user':'seis',
				'comment':'seis'
			}
		];
	}
	
	
	
	render() {
		
		return (
		  <div className="ChartWithZoom">
				<h1>Publicaciones</h1>
				<Select name="idcategoria" id="idcategoria" options={this.products} className="form-control">
                  </Select>

				  {this.comments.map(c => (
                    <Comm id={c.ID} user={c.user} comment={c.comment} ></Comm>
                ))}
				
		  </div>
		);
	}
}
export default Publicaciones;
