import React, { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super() 
      this.state = {input: ''}
    
  }

  render() {
    return (
    <div className="search-bar">
      <input onChange={event => 
      this.setState({ input: event.target.value})}/>
    </div>
    )
  }

  onInputChange(input) {
    this.setState({input})
  }

}

export default SearchBar