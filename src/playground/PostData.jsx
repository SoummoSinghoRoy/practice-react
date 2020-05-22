import React, { Component } from 'react';
import axios from 'axios';

const Base_Url = 'https://jsonplaceholder.typicode.com';

class PostData extends Component {
  state={
    userId: '112',
    title: '',
    body: '',
    isSubmited: false,
    error: false
  }

  changeHandler= (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler= (event)=>{
    event.preventDefault()
    axios.post( `${ Base_Url }/posts`, {
      userId: this.state.userId,
      title : this.state.title,
      body: this.state.body
    })
    // axios.post( 'https://jsonplaceholder.typicode.com/posts', {
    //   userId: this.state.userId,
    //   title : this.state.title,
    //   body: this.state.body
    // })
    .then( response=>{
      this.setState({
        isSubmited: true,
        error: false
      })
      console.log(response);
      
    })
    .catch( error=>{
      this.setState({
        error: true,
        isSubmited: false
      })
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className='container col-md-6 py-2'>
        <h5 className='text-center'>Data Collector</h5>
        <form
          onSubmit = { this.submitHandler } 
        >
          { this.state.isSubmited && <p className='text-success'>Successflly! Sent Your Data....</p> }
          { this.state.error && <p className='text-warning'> Something Wrong....</p> }
          <input 
            type="text"
            className='form-control'
            placeholder='Enter Your title'
            value= { this.state.title }
            name= 'title'
            onChange = { this.changeHandler }
          />
          <textarea 
            type="text"
            className='form-control'
            placeholder='Enter Your Short Story'
            value= { this.state.body }
            name= 'body'
            onChange = { this.changeHandler }
          />
          <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostData;
