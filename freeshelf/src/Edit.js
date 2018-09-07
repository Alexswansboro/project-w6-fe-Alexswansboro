import React, { Component } from 'react'
import './App.js'

class Edit extends Component {
  render () {
    let { book } = this.props
    return <h1>{console.log(book.title)}</h1>
  }
}
export default Edit
