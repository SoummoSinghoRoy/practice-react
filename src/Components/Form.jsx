import React, { Component } from 'react';

class Form extends Component {
  state={
    name: '',
    email: ''
  }

  changeHandler = event =>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  submitHandler = event =>{
    event.preventDefault()
    console.log(this.state);
  } 

  render() {
    return (
      <form 
        className='container col-lg-6'
        onSubmit= { this.submitHandler }
        >
        <div className='form-row'>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                className='form-control'
                type='text'
                placeholder='enter your name'
                name='name'
                id='name'
                value= { this.state.name }
                onChange= { this.changeHandler }
              />
            </div>
          </div>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                className='form-control'
                type='email'
                placeholder='enter your valid email'
                name='email'
                id='email'
                value= { this.state.email }
                onChange= { this.changeHandler }
              />
            </div>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'> Submit </button>
      </form>
    );
  }
}

export default Form;
