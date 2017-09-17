import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

import { YOUTUBE_API_KEY } from './common/appConstant';


YTSearch({
    key: YOUTUBE_API_KEY,
    term: 'surfboards'
}, function (data) {
    console.log(data)
})

const App = function () {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));