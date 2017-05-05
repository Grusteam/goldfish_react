import React, { Component } from 'react';
// import logo from './logo.svg';
// import './Companies.css';

class Docs extends Component {

   constructor(props) {
	super(props);

	// console.log(props);




	// this.handleClick = this.handleClick.bind(this);
  }

  renderList (argument) {
  	console.log(this.props.data);

	 	return this.props.data.map((id, index) =>
	  	<li key={index}>{id}</li>
	  	);
  }

  handleClick(c) {
  	// console.log(c.com, this);

	// this.setState({
	//   currentCompany: 0
	// })
  }

  typeChange(type)
  {
  	console.log(type);
  	this.props.docTypeClick(type)
  }




// console.log( this.props , props);


  render() {
  	// console.log(this.props.data);
	return (
	  <div className="Docs">
	  <button type="button" data-type="contacts" onClick={() => this.typeChange('contacts')} >contacts</button>
	  <button type="button" data-type="docs" onClick={() => this.typeChange('docs')} >docs</button>
	  <button type="button" data-type="actions" onClick={() => this.typeChange('actions')} >actions</button>
	  <button type="button" data-type="calls" onClick={() => this.typeChange('calls')} >calls</button>
		<ul>
  			{this.renderList()}
	   </ul>
	  </div>
	);
  }





}

export default Docs;