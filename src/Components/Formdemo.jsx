import React, { Component } from 'react';
import { getDefaultNormalizer } from '@testing-library/react';

    // const students = [
    //   {id: "01", name: "Swadip", country: "Bangladesh"}, 
    //   {id: "02", name: "Istiqur", country: "India"} 
    // ]; 

class Formdemo extends Component {
  state = {
    name: '',
    email: '',
    country: '',
    gender: '',
    skills: [],
    students: [
      { id: "01", name: "Swadip", country: "Bangladesh" },
      { id: "02", name: "Istiqur", country: "India" }
    ]
  }
  
  changeHandler = event => {
    if (event.target.type === 'checkbox') {
      if (event.target.checked) {
        this.setState({
          ...this.state,
          skills: this.state.skills.concat(event.target.value)
        })
      } else {
        this.setState({
          ...this.state,
          skills: this.state.skills.filter(skill => skill !== event.target.value)
        })

      }
    }
    else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  submitHandler = event => {
    event.preventDefault()
    console.log(this.state)
    // const {students} = this.state;
    const students = [...this.state.students]; 
    const { name, email, country} = this.state;
    students.push({name, email, country});
    this.setState({ students, name: '', email: ''}) 
  }

  render() {

    const {students} = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <form
            className='col-lg-8'
            onSubmit={this.submitHandler}
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
                    value={this.state.name}
                    onChange={this.changeHandler}
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
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
            </div>
            <div className='form-row'>
              <div className='col'>
                <label htmlFor='country'>Choose Your Country</label>
                <select
                  className='custom-select'
                  name='country'
                  id='country'
                  onChange={this.changeHandler}
                >
                  <option>Choose...</option>
                  <option value='Bangladesh'> Bangladesh </option>
                  <option value='Canada'> Canada </option>
                  <option value='Russia'> Russia </option>
                </select>
              </div>
              <div className='col'>
                <div className='custom-control custom-radio d-block'>
                  <input
                    className='custom-control-input'
                    type='radio'
                    name='gender'
                    id='gender-1'
                    value='male'
                    onChange={this.changeHandler}
                  />
                  <label className='custom-control-label' htmlFor='gender-1'>Male</label>
                </div>
                <div className='custom-control custom-radio d-block'>
                  <input
                    className='custom-control-input'
                    type='radio'
                    name='gender'
                    id='gender-2'
                    value='female'
                    onChange={this.changeHandler}
                  />
                  <label className='custom-control-label' htmlFor='gender-2'>Female</label>
                </div>
                <div className='custom-control custom-radio'>
                  <input
                    className='custom-control-input'
                    type='radio'
                    name='gender'
                    id='gender-3'
                    value='other'
                    onChange={this.changeHandler}
                  />
                  <label className='custom-control-label' htmlFor='gender-3'>Other</label>
                </div>
              </div>
              <div className='col'>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name='Skills'
                    id='js'
                    value='Javascript'
                    onChange={this.changeHandler}
                  />
                  <label className="custom-control-label" htmlFor="js">Javascript</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name='Skills'
                    id='react'
                    value='React'
                    onChange={this.changeHandler}
                  />
                  <label className="custom-control-label" htmlFor="react">React</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name='Skills'
                    id='node'
                    value='Node'
                    onChange={this.changeHandler}
                  />
                  <label className="custom-control-label" htmlFor="node">Node</label>
                </div>
              </div>
            </div>
            <button type='submit' className='btn btn-primary my-3'> Submit </button>
          </form>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Gender</th>
                <th>Skills</th>
              </tr>
            </thead>
              <tbody>
              {
                students.map((student, idx) => (
                  <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.country}</td>
                    <td></td>
                    <td></td>
                  </tr>
                ))
              } 
              </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Formdemo;
