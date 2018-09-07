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
      bookEditing: false
    }
  }
  componentDidMount () {
    request.get(' http://localhost:2001/books')
      .then(res => {
        this.setState({
          books: res.body
        })
      })
  }
  editBook (e, book) {
    console.log(e, 'its here')
    console.log(book, 'book')
    this.setState(state => ({ bookEditing: true }))
  }
  render () {
    if (this.state.bookEditing === true) {
      return <Edit />
    } else {
      return (<div>
        {this.state.books.map((book) => <Book key={book.id} book={book} editBook={this.editBook.bind(this)} />)}
      </div>)
    }
  }
}

export default App
