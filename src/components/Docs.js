import React, { Component } from 'react';

import _ from 'lodash';


class Docs extends Component {

   constructor(props) {
	super(props);

	// console.log(props);




	// this.handleClick = this.handleClick.bind(this);
  }

  	allCurrentContent() { // весь контент для текущей компании и текущего бренда текущего типа документов
  		let _this = this;
  		// console.log(newdata.data.content[_this.currentDocType]);
  		// console.log(_this.docsData[_this.currentDocType]);
  		var arr = [];
  		_.forEach(_this.props.content,  function(doc, i)  {
  			_.forEach(_this.props.ids,  function(id, i)  {
  				// console.log(doc, id);
  				if (doc.id == id) {
  					arr.push(doc);
  				}
  			});
  		});
  		console.log(arr);
  		return arr;
  	}
  

  renderList (argument) {
  	// return this.allCurrentContent();
  	// console.log(this.props.ids);

/*	 	return this.props.ids.map((id, index) =>
	  	<li key={index}>{id}</li>
	  	);*/


	  	if (this.props.type == 'contacts') {


	  	return this.allCurrentContent().map((docObj, i) =>
	  		<div key={i}>
	  		<div>id {docObj.id}</div>
	  		<div>name {docObj.name}</div>
	  		<div>Должность {docObj.rank}</div>
	  		<div>E-mail {docObj.mail}</div>
	  		<div>Тел моб {docObj.phoneMob}</div>
	  		<div>Тел раб {docObj.phoneHome}</div>
	  		<div>Комментарий {docObj.comment}</div>
	  		<div>Адрес {docObj.address}</div>
	  		<hr/>
	  		</div>);

	  	} else if (this.props.type == 'docs') {

			return this.allCurrentContent().map((docObj, i) =>	  		
	  		<div key={i}>
	  		<div>id {docObj.id}</div>
	  		<div>offer {docObj.offer}</div>
	  		<div>date {docObj.date}</div>
	  		<div>manager {docObj.manager}</div>
	  		<div>url {docObj.url}</div>
	  		<hr/>
	  		</div>);

	  	} else if (this.props.type == 'actions') {

	  		return <table>
	  			<thead>
	  				<tr><th>Дата начала</th><th>Продолжительность</th><th>Бренд</th><th>Активности</th><th>Количество</th><th>Закрывающ</th><th>Договор</th><th>Статус</th><th>Комментарий</th></tr>
	  			</thead>
	  			<tbody>

	  			

	  			</tbody>
	  		</table>;


	  	} else if (this.props.type == 'calls') {
			return this.allCurrentContent().map((docObj, i) =>
	  		<div key={i}>
	  		<div>id {docObj.id}</div>
	  		<div>callStatus {docObj.callStatus}</div>
	  		<div>date {docObj.date}</div>
	  		<div>callContact {docObj.callContact}</div>
	  		<div>callComment {docObj.callComment}</div>
	  		<hr/>
	  		</div>);

	  	}


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