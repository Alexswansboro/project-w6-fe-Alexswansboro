import React, { Component } from 'react'
import './App.js'

class Add extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (event) {
    event.preventDefault()
    const form = event.target
    console.log('event', event)
    if (!event.target.checkValidity()) {
      window.alert('You Are Missing Some Fields')
    }
    this.props.addBookInApi(form)
    console.log('form', form)
  }
  render () {
    return (
      <div className='addBook'>
        <h1 className='add-Title title'>Add A Book</h1>
        <form id='form' noValidate onSubmit={event => { this.handleSubmit(event.target.value) }} >
          <label className='label'>Title
            <input name='title' required className='input title editTitle' type='text' />
          </label>
          <label className='label'>Author
            <input name='author' required className='input title editAuthor' type='text' />
          </label>
          <label className='label'>Cover Image
            <textarea name='coverImage' type='image' className='bookImage' src=' ' />
          </label>
          <label className='label'>Add A Short Description
            <textarea name='shortDescription' required className='input shortDescription' type='text' />
          </label>
          <label className='label'>Book/Author Website
            <input name='website' type='url' required className='input url' />
          </label>
          <label className='label'>Publisher
            <input name='publisher' required className='publisher' />
          </label>
          <label className='label'>Publication Date
            <input name='publicationDate' type='date' required className='publicationDate' />
          </label>
          <label className='label'>Provide a Detailed Description
            <textarea name='detailedDescription' required type='text' className='input textarea detailedDescription' />
            <button type='submit'>Submit</button>
          </label>
        </form>
      </div>
    )
  }
}

export default Add
