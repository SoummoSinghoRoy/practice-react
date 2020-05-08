import React, { Component } from 'react';
import View from './View';

export class Books extends Component {
      state = {
        books: [
          { id: 1, name: 'Javascript', price: 25 },
          { id: 2, name: 'React', price: 28 },
          { id: 3, name: 'React Native', price: 32 },
          { id: 4, name: 'Node.js', price: 35 }
        ]
      }
      
      deleteHandler = (id) =>{
        let deletebook = this.state.books.filter( book => book.id !== id )
        this.setState({
          books: deletebook
        })
      }

      changeHandler = (name,id) =>{
        let newBook = this.state.books.map( book =>{
          if (id === book.id) {
            return {
              ...book,
              name
            }
          }
          return book
        } )
        this.setState({
          books: newBook
        })
      }

  render() {
    return (
      <div>
        { this.state.books.map( ( book, id )=>{
          return(
            <View
              key= { id } 
              book= { book }
              deleteHandler = { this.deleteHandler.bind(this) }
              changeHandler = { this.changeHandler.bind(this) }  
            />
          )
        } ) }
      </div>
    )
  }   
}

export default Books;
