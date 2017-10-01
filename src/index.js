import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import {YOUTUBE_API_KEY} from './common/appConstant';
import VideoDetail from './components/video_detail';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({
            key: YOUTUBE_API_KEY,
            term: 'surfboards'
        }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    selectedVideo = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onSelectVideo={this.selectedVideo} videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));