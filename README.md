# rss-feed-viewer

## Description
A simple react.js application for viewing a rss feed

## Installing
* `git clone git@github.com:hugogrochau/rss-feed-viewer.git`
* `yarn`

## Building
* `yarn build`
* Open `public/index.html` in your browser

## Live reload
* `yarn watch`
* `yarn serve`
* Open `http://localhost:8080` in your browser 

## Dependencies
* `material-ui` - To have a presentable ui without too much effort
* `babel` - For es2015 transpiling
* `webpack` - For bundling
* `live-server` - For live reloading during development 
* `eslint` - To have a consistent code style
* `validator` - For validating URLs on the client side. Felt like it would be better and safer to use a 7k+ github stars package instead of implementing it myself 
* `sanitize-html` - For preventing XSS vulnerabilities

## Author
@hugogrochau
