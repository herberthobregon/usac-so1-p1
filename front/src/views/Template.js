import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import RAM1 from "./overview/RAM1";
import RAM2 from "./overview/RAM2";
import RAM3 from "./overview/RAM3";
import RAM4 from "./overview/RAM4";

import Publicaciones from "./overview/Publicaciones";


class Template extends Component {
  
  render() {    
    return (
		<div>
			<Navbar bg="dark" variant="dark">
				<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
				<Navbar.Brand href="/">RAM</Navbar.Brand><span className="hidden-xs text-muted">Estado de RAM</span>
			  </Navbar>		  
			  <BrowserRouter>		  
					<Row>
						
						<Nav to="/" className="flex-sm-column" id="sidebar">
							<ListGroup className="nav nav-sidebar flex-sm-column">
								<ListGroup.Item>
									<a href="#overview" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>Metricas</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="overview">
										<ListGroup.Item> <NavLink exact to="/ram1">Ram 1</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to="/ram2">Ram 2</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to="/ram3">Ram 3</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink exact to="/ram4">Ram 4</NavLink></ListGroup.Item>
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								<ListGroup.Item>
									<a href="#lineCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>Publicaciones</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="lineCharts">
										<ListGroup.Item> <NavLink to="/publicaciones">Publicaciones</NavLink></ListGroup.Item>
									</ListGroup>
								</ListGroup>
								
							</ListGroup>
						</Nav>
						
						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container>
								<div className="content">
									<Route path="/ram1" component={RAM1}/>	
									<Route path="/ram2" component={RAM2}/>
									<Route path="/ram3" component={RAM3}/>	
									<Route path="/ram4" component={RAM4}/>	

									<Route path="/publicaciones" component={Publicaciones}/>							
								</div>
							</Container>
						</Col>					
					</Row>			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;