import React, { Component } from 'react';
class Companies extends Component {

   constructor(props) {
	super(props);

  this.companies = props.data;
  this.companyClick = props.companyClick;
  // console.log(this.companies);
  }


  renderList() {

  	return this.companies.map((com, index) =>
  		<li data-id={com.id} data-index={index} data-name={com.name} onClick={() => this.companyClick({com}, {index})} key={com.id}>{com.name}</li>
  	);

  }


  render() {
	return (
	  <div className="Companies">
		<ul>
		  {this.renderList()}
		  <a href="#" onClick={this.props.companyClick}></a>
	   </ul>
	  </div>
	);
  }





}

export default Companies;