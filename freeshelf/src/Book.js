import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'

class Book extends Component {
  constructor (props) {
    super()
    this.state = {
      collapsed: true
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

  expandedBook () {
    const { book } = this.props
    if (this.state.collapsed === false) {
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
      <div className='books level'>
        <div className='media-right section level-right' />
        <section className='media-left section level-left'>
          <div className='image is-64x64'>{this.image(book)}</div>
        </section>
        <div className='media-content'>
          <div className='content'>
            <section>
              <div id='collapsed-view' >
                <strong className='title'>{book.title} </strong><small className='author'> {book.author}</small>
                <br />
                <div className='shortDescription'>{book.shortDescription}</div>
              </div>
              {this.expandedBook()}
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Book
