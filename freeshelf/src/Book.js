import React, { Component } from 'react'
import './App.css'

class Book extends Component {
  constructor (props) {
    super()
    this.state = {
      collapsed: true
    }
  }
  image (book) {
    console.log(book.coverImageUrl, 'cover image')
    if (book.coverImageUrl) {
      return (<img className='bookImage' src={book.coverImageUrl} alt='book picture' />)
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
        <div id='expanded-view'>
          <a href={book.url} className='url' target='_blank'><strong>URL: </strong>{book.url}</a>
          <div className='publisher'><strong>Publisher: </strong>{book.publisher}</div>
          <div className='publicationDate'><strong>Publication Date: </strong>{book.publicationDate}</div>
          <div className='detailedDescription'><strong>Description: </strong>{book.detailedDescription}</div>
        </div>
      </div>
    )
  }
}

export default Book
