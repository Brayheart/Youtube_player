import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import SearchBar from './components/search_bar'
import API_Key from "../req/keys"


class App extends Component {
  constructor(props){
    super(props)
    
    this.state = { 
      videos: []
    }

    YTSearch({key: API_Key, input: 'surfboards'}, (videos) => {
      this.setState({ videos }) //this.setState({ videos: videos })
    })
  }

  render() {
    return(
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))