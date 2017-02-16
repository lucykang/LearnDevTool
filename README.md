# Learn Dev Tool

Just some personal repo to study some build tools like gulp, browserify, webpack and front-end frameworks like react, react-bootstrap and so on. The tutorial I'm following is [Webpack or Browserify & Gulp: Which Is Better](https://www.toptal.com/front-end/webpack-browserify-gulp-which-is-better)

### References:
- Eric Grosse's post [Webpack or Browserify & Gulp: Which Is Better](https://www.toptal.com/front-end/webpack-browserify-gulp-which-is-better)
- James Knelson's blog [Which build system should I use for my javascript app?](http://jamesknelson.com/which-build-system-should-i-use-for-my-javascript-app/)
- Cory House's post [Browserify VS Webpack](https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9#.vwmsi3dsy)

### About Browserify
Bundler for npm packages to be used in the browser. Since there's no minifying, linting or task runner functionality, it is being used with grunt or gulp often.
This Node-centric philosophy has a number of benefits; bundling an app with Browserify is simple, you can using built-in Node modules like path, and you can use any code you’ve written for Node as is.

[*Browserify's lists of transform*](https://github.com/substack/node-browserify/wiki/list-of-transforms)

Pros | Cons
-----|------
easy to understand and start a project with minimal wiring. | more codes in gulpfile required when you want to do more things.
have rich plugin ecosystem (Lots of plugins available to wire things up) |

### plugins for Browserify
- [watchify](https://www.npmjs.com/package/watchify): watch mode for browserify builds.
- [browserify-hmr](https://www.npmjs.com/package/browserify-hmr): hot module replacement plugin for browserify.