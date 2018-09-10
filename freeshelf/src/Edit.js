import React, { Component } from 'react'
import './App.js'

class Edit extends Component {
  render () {
    let { book } = this.props
    return (
      <div className='editBook'>
        <input className='input title editTitle' type='text' value={book.title} onChange={event => {
          this.props.updateBook(book.id, 'title', event.target.value)
        }} />
        <div />
        <input className='input author editAuthor' value={book.author} onChange={event => {
          this.props.updateBook(book.id, 'author', event.target.value)
        }} />
        <div />
        <img className='bookImage' src={book.coverImageUrl} alt='book' />
        <textarea className='input shortDescription' type='text' value={book.shortDescription} onChange={event => { this.props.updateBook(book.id, 'shortDescription', event.target.value) }} />
        <strong>URL: </strong><input value={book.url} className='input url' target='_blank' onChange={event => { this.props.updateBook(book.id, 'url', event.target.value) }} />
        <strong>Publisher:</strong><input className='publisher' value={book.publisher} onChange={event => { this.props.updateBook(book.id, 'publisher', event.target.value) }} />
        <strong>Publication Date: </strong><input className='publicationDate' value={book.publicationDate} onChange={event => { this.props.updateBook(book.id, 'publicationDate', event.target.value) }} />
        <div />
        <strong>Description: </strong>
        <div />
        <textarea type='text' className='input textarea detailedDescription' value={book.detailedDescription} onChange={event => { this.props.updateBook(book.id, 'detailDescription', event.target.value) }} />
      </div>
    )
  }
}
export default Edit
