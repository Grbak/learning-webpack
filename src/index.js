import { Post } from './Post';
import json from './assets/json';
import WebpackLogo from './assets/webpack-logo.png';
import './styles/styles.css';

const post = new Post('test', WebpackLogo);

console.log('Post to string: ', post.toString());

console.log('JSON:', json);
