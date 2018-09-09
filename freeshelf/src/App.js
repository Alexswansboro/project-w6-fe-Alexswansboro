import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import Book from './Book'
import request from 'superagent'
import Edit from './Edit'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: [],
      bookEditing: null
    }
  }
  componentDidMount () {
    request.get('http://localhost:4000/books')
      .then(res => {
        this.setState({
          books: res.body
        })
      })
  }
  updateBookInApi (book) {
    let bookID = book.id
    request.put(`http://localhost:4000/books/${bookID}`)
      .send(book)
      .then(res => {

      })
  }

  updateBook (bookId, field, newValue) {
    this.setState(state => {
      let book = state.books.find(b => b.id === bookId)
      book[field] = newValue
      // Returning state.books because we've changed the data in it and
      // we need React to know that it should update.
      this.updateBookInApi(book)
      return {
        books: state.books
      }
    })
  }

  editBook (e, book) {
    this.setState(state => ({ bookEditing: book }))
  }
  addBook(){
    return(<Add>)
  }

  render () {
    if (this.state.bookEditing) {
      return (
        <Edit book={this.state.bookEditing} updateBook={this.updateBook.bind(this)} />
      )
    } else {
      return (<div>
        <section className='hero level'>
          <div className='hero-body'>
            <div className='container'>
              <div className='fas fa-2x' onClick={(e) => { this.handleClick(e) }}></div><h1 className='main-title title has-text-centered level-item'> Free Shelf </h1>
            </div>
          </div>
        </section>
        {this.state.books.map((book) => <Book key={book.id} book={book} editBook={this.editBook.bind(this)} />)}
      </div>)
    }
  }
}

export default App
