import { Post } from 'src/models/Post';
// import json from './assets/json';
import WebpackLogo from './assets/webpack-logo';
// import CSV from './assets/test.csv';
import './styles/styles.css';
import * as $ from 'jquery';

const post = new Post('test', WebpackLogo);

$('pre').html(post.toString());

// console.log('JSON:', json);
// console.log('CSV:', CSV);
