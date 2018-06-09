import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import SearchBar from './components/search_bar'
import API_Key from "../req/keys"
import VideoDetail from './components/video_detail'
import video_list_item from './components/video_list_item';


class App extends Component {
  constructor(props){
    super(props)
    
    this.state = { 
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_Key, input: 'surfboards'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      }) //this.setState({ videos: videos })
    })
  }
  render() {
    return(
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({
          selectedVideo
        })}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))