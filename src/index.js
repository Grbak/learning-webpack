import { Post } from 'src/models/Post';
// import json from './assets/json';
import WebpackLogo from './assets/webpack-logo';
// import CSV from './assets/test.csv';
import './styles/styles.css';

const post = new Post('test', WebpackLogo);

console.log('Post to string: ', post.toString());

// console.log('JSON:', json);
// console.log('CSV:', CSV);
