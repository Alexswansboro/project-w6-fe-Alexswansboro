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
    request.get('http://localhost:2001/books')
      .then(res => {
        this.setState({
          books: res.body
        })
      })
  }
  editBook (e, book) {
    this.setState(state => ({ bookEditing: book }))
  }
  render () {
    if (this.state.bookEditing) {
      return <Edit book={this.state.bookEditing} />
    } else {
      return (<div>
        {this.state.books.map((book) => <Book key={book.id} book={book} editBook={this.editBook.bind(this)} />)}
      </div>)
    }
  }
}

export default App
