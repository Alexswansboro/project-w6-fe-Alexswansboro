import React, { Component } from 'react'
import './App.css'

class Book extends Component {
  constructor (props) {
    super()
    this.state = {
      collapsed: false
    }
  }
  image (book) {
    if (book.coverImageUrl) {
      return (<img className='bookImage' src={book.coverImageUrl} alt='book' />)
    }
  }
  handleClick (e) {
    this.setState(state => ({ collapsed: !state.collapsed }))
  }

  bookDetails () {
    const { book } = this.props
    if (this.state.collapsed === true) {
      return (<div id='expanded-view'>
        <button id='moreInfo' onClick={(e) => { this.handleClick(e) }}> Less Information </button>
        <a href={book.url} className='url' target='_blank'><strong>URL: </strong>{book.url}</a>
        <div className='publisher'><strong>Publisher: </strong>{book.publisher}</div>
        <div className='publicationDate'><strong>Publication Date: </strong>{book.publicationDate}</div>
        <div className='detailedDescription'><strong>Description: </strong>{book.detailedDescription} </div>
        <button className='edit-book' onClick={(e) => { this.props.editBook(e, book) }}>Edit Book</button>
      </div>)
    } else {
      return (<button id='lessInfo' onClick={(e) => { this.handleClick(e) }}>More Information</button>)
    }
  }

  render () {
    const { book } = this.props
    return (
      <div className='books'>
        <div id='collapsed-view'>
          <a href={book.url} className='title' target='_blank'>{book.title}</a>
          <p className='author'>{book.author}</p>
          <div className='bookImage' />
          {this.image(book)}
          <div className='shortDescription'>{book.shortDescription}</div>
        </div>
        {this.bookDetails()}
      </div>

    )
  }
}

export default Book
