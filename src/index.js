import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAz_MQN4oy6PGMgM8IAOrm-lKU1SNTHtqw';

const App = function () {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));