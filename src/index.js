import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_Key = "AIzaSyDpRgTz3pbaDmqEL6Gvx4K1FvoAHgyNzeQ"

const App = () => {
  return (
    <SearchBar/>
  )
}

ReactDOM.render(<App/>, document.getElementById("app"))