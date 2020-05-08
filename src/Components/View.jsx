import React, { Component } from './node_modules/react';

class View extends Component {
  state={
    isEditable: false
  }

  changleValueHandler = (event) => {
    if (event.key === 'Enter') {
      this.setState ({
        isEditable: false
      })
    }
  }

  render() {
    let output = this.state.isEditable ? 
      <input 
        type= 'text' 
        placeholder='write here' 
        value={ this.props.book.name }
        onChange = { (event) => this.props.changeHandler(event.target.value, this.props.book.id) }
        onKeyPress = { this.changleValueHandler } 
      />:
      <span>
        {this.props.book.name}
      </span>
    return (
        <div className='container'>
          <div className='row'>
            <ul className='list-group col-6 mx-auto'>

              <li className='list-group-item d-flex'>
                { output }
                <span className='ml-auto'> 
                  { this.props.book.price } 
                </span>

                <div className = 'mt-1'>

                  <span
                    style = {{ cursor: 'pointer', }} 
                    className='pl-2'
                    onClick={ () => this.props.deleteHandler(this.props.book.id) }
                  >
                    <ion-icon name="trash-bin-outline"></ion-icon>
                  </span>

                  <span
                    style = {{ cursor: 'pointer', }} 
                    className='pl-2'
                    onClick = { ()=> this.setState({ isEditable: true }) }
                  >
                    <ion-icon name ="create-outline"></ion-icon>
                  </span>

                </div>

              </li>
              
            </ul>
          </div>
        </div>
    );
  }
}

export default View;

