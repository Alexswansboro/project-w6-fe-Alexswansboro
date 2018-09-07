import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import books from './books.json'
import Book from './Book'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: books
    }
  }

  render () {
    return (
      <div>
        {this.state.books.map((book, idx) => <Book key={idx} book={book} />)}
      </div>
    )
  }
}
//   bookExpanded (){
//     <p className=''
//   }
// }
export default App
