# Learn Dev Tool

Just some personal repo to study some build tools like gulp, browserify, webpack and front-end frameworks like react, react-bootstrap and so on.
The tutorial I'm following is https://www.toptal.com/front-end/webpack-browserify-gulp-which-is-better



### References:
- Eric Grosse's post [Webpack or Browserify & Gulp: Which Is Better](https://www.toptal.com/front-end/webpack-browserify-gulp-which-is-better)
- James Knelson's blog [Which build system should I use for my javascript app?](http://jamesknelson.com/which-build-system-should-i-use-for-my-javascript-app/)
- Cory House's post [Browserify VS Webpack](https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9#.vwmsi3dsy)
- Webpack [Hot Module Replacement with Webpack](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)

  _plugins_
  - [list of plugins](https://webpack.github.io/docs/list-of-plugins.html)
  - [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)


### About Webpack
Pros | Cons
---- | ----
Using config file to define build process allows gulp / grunt to do less or no tasks. | Takes long time to configure (creating right config file)
dynamically inline css and images when it makes sense.[1] |
RAD without browser refreshes (Hot Module Replacement) |

[1]. Webpack will consider the size of this file. If it’s small, it’ll inline the stylesheet. If it’s long, it’ll minify the file and give it a unique name for cache busting. This same story works for images as well using the url loader plugin.
Webpack will base64 encode this image if it’s small enough that it makes sense. Since Webpack is totally aware of your build process, it can intelligently split your resources into bundles.

### Webpack plugins
`OccurrenceOrderPlugin()`

Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids. This make ids predictable, reduces total file size and is recommended.
preferEntry (boolean) give entry chunks higher priority. This make entry chunks smaller but increases the overall size. (recommended)

`DefinePlugin()`
...

`ExtractTextPlugin('bundle.css')`

It moves every require("style.css") in entry chunks into a separate css output file. So your styles are no longer inlined into the javascript, but separate in a css bundle file (styles.css).
If your total stylesheet volume is big, it will be faster because the stylesheet bundle is loaded in parallel to the javascript bundle.

Advantages | Caveats
-----------|---------
Fewer style tags (older IE has a limit) | Additional HTTP request
CSS SourceMap (with devtool: "source-map" and css-loader?sourceMap) | No Hot Module Replacement
CSS requested in parallel | More complex configuration
CSS cached separate | No runtime public path modification
Faster runtime (less code and DOM operations) | Longer compilation time

`DedupePlugin()`

Search for equal or similar files and deduplicate them in the output. This comes with some overhead for the entry chunk, but can reduce file size effectively.
This doesn’t change the module semantics at all. Don’t expect to solve problems with multiple module instance. They won’t be one instance after deduplication.
(Not for watch mode. Only for production build.)

`HotModuleReplacementPlugin`

Enables Hot Module Replacement. (This requires records data if not in dev-server mode, recordsPath)
Generates Hot Update Chunks of each chunk in the records. It also enables the API and makes __webpack_hash__ available in the bundle.

`NoErrorsPlugin()`

When there are errors while compiling this plugin skips the emitting phase (and recording phase), so there are no assets emitted that include errors. The emitted flag in the stats is false for all assets. If you are using the CLI, the webpack process will not exit with an error code by enabling this plugin. If you want webpack to “fail” when using the CLI, please check out the bail option.
