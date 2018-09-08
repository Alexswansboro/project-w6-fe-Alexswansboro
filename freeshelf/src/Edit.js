import React, { Component } from 'react'
import './App.js'

class Edit extends Component {
  render () {
    let { book } = this.props
    console.log(book.book)
    return (
      <div className='editBook'>
        <div className='title' >{book.book.title}</div>
        <div className='author' >{book.book.author}</div>
        <img className='bookImage' src={book.book.coverImageUrl} alt='book picture' />
        <div className='shortDescription'>{book.book.shortDescription}</div>
        <a href={book.book.url} className='url' target='_blank'><strong>URL: </strong>{book.book.url}</a>
        <div className='publisher'><strong>Publisher: </strong>{book.book.publisher}</div>
        <div className='publicationDate'><strong>Publication Date: </strong>{book.book.publicationDate}</div>
        <div className='detailedDescription'><strong>Description: </strong>{book.book.detailedDescription} </div>
      </div>
    )
  }
}
export default Edit
