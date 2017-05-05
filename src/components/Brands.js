import React, { Component } from 'react';
// import logo from './logo.svg';
// import './Companies.css';

class Brands extends Component {

   constructor(props) {
	super(props);

	// console.log(props);

	this.brandClick = props.brandClick

  }

  renderList (argument) {
	  const brands = this.props.data;
	  // console.log( brands );

	 	return brands.map((br, index) =>
	  	<div key={index} onClick={() => this.brandClick({br}, {index})}>
	  	<div>{br.name}</div>
	  	<div>{(br.managers)}</div>

	  	</div>
	  	);
  }


  render() {
  	// console.log(this.props.data);
	return (
	  <div className="Brands">
  			{this.renderList()}
	  </div>
	);
  }





}

export default Brands;