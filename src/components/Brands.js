import React, { Component } from 'react';

import _ from 'lodash';

class Brands extends Component {

   constructor(props) {
	super(props);

	// console.log(props);

	this.brandClick = props.brandClick

  }

  defineManagers(ids) {
  	// console.log(ids);
  	let _this = this;


  		var managers = [];
  		_.forEach(ids,  function(id, i)  {
  			// console.log(id, _this.props);
  			_.forEach(_this.props.managers,  function(obj, i)  {
  				// console.log(obj.id);
  				if (obj.id === id) {
  					managers.push(obj.name + ', ');
  					return false;
  				}

  			});
  		});
  		// console.log(managers);
  		// managers.push(managers);
  	return managers;


  }


  renderList (argument) {
	  const brands = this.props.data;
	  // console.log( brands );

	 	return brands.map((br, index) =>
	  	<div key={index} onClick={() => this.brandClick({br}, {index})}>
	  	<div>{br.name}</div>
	  	{/*<div>{(br.managers)}</div>*/}
	  	<div>{this.defineManagers(br.managers)}</div>

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