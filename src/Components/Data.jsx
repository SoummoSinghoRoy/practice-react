import React, { Component } from 'react';
import axios from 'axios';

class Data extends Component {
  state = {
    alldata: [],
  };

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then( response =>{
      this.setState({
        alldata: response.data
      })
    } )
    .catch(error =>console.log(error))
  }
  deleteHandler =(id)=>{
    let newData= this.state.alldata.filter( data => data.id !== id )
    this.setState({
      alldata: newData
    })
  }
  render() {
    let { alldata } = this.state
    if (alldata.length === 0) {
      return <h1 className='text-center'> Loading.... </h1>
    } else{
      return(
        <ul className='list-group container'>
          { alldata.map( data=>{
            return(
              <div key={data.id} className='d-flex list-group-item'>
                <li className='list-unstyled mr-auto'>
                { 'No:' + data.id + ", " + 'Name:' + data.name + " ," + 'Email:' + data.email + " ," + 'Company:' + data.company.name }</li>
                <span
                  style = {{ cursor: 'pointer', }} 
                  className='pl-2'
                  onClick={ ()=>{ this.deleteHandler( data.id ) } }
                >
                  <ion-icon name="trash-bin-outline"></ion-icon>
                </span>
              </div>
            )
          } ) }
        </ul>
      )
    }
  }
}

export default Data;
