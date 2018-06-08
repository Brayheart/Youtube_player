import React, { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super() 
      this.state = {input: ''}
    
  }
  render() {
    return <input onChange={event => 
      this.setState({ input: event.target.value})}/>
  }

}

export default SearchBar