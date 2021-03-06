# Khepri

Khepri, a modular, configurable data exploration (and in the future, editing) tool for Linked Data based on the view-based (faceted) design paradigm.

## Building

### Prequisites

 1. Make sure you have [Node.js](https://nodejs.org/en/) installed (for example using [nvm](https://github.com/creationix/nvm)).
 1. Make sure you have [TSD](http://definitelytyped.org/tsd/) installed (`npm install -g tsd`)
 1. Make sure you have [Bower](http://bower.io/) installed (`npm install -g bower`)
 1. Make sure you have [Gulp](http://gulpjs.com/) installed (`npm install -g gulp`)

### Setting up the build environment

 1. run `npm install`
 1. run `tsd install`
 1. run `bower install`

### Building

To simply build the project, run `gulp`. However, when actually working, you probably want to use `gulp serve`, which spawns the app in a browser, and stays to watch for changes in the project files, automatically recompiling them and reloading them into the browser.

To build a distribution version of the project (with e.g. combined and minified js and css files), use `gulp dist`. This will create the directory `dist`, which you can then copy to your production server.
