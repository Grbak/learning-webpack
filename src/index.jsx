import { Post } from 'src/models/Post';

import React from 'react';
import ReactDOM from 'react-dom';
// import json from './assets/json.json';
import WebpackLogo from './assets/webpack-logo.png';
// import CSV from './assets/test.csv';
import './babel';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import * as $ from 'jquery';

import { App } from './components/App';

const post = new Post('test', WebpackLogo);

$('pre').html(post.toString());

ReactDOM.render(<App />, document.getElementById('root'));

// console.log('JSON:', json);
// console.log('CSV:', CSV);
