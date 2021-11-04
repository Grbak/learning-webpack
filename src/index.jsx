import { Post } from 'src/models/Post';

import React from 'react';
import ReactDOM from 'react-dom';
// import json from './assets/json';
import WebpackLogo from './assets/webpack-logo';
// import CSV from './assets/test.csv';
import './babel';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import * as $ from 'jquery';

const post = new Post('test', WebpackLogo);

$('pre').html(post.toString());

const App = () => {
    return (
        <div class="container">
            <h1>Learning Webpack</h1>
            <hr />
            <div class="logo"></div>
            <hr />
            <pre></pre>
            <hr />
            <div class="box">
                <h2>LESS</h2>
            </div>
            <hr />
            <div class="card">
                <h2>SCSS</h2>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// console.log('JSON:', json);
// console.log('CSV:', CSV);
