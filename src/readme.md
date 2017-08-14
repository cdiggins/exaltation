# About the src folder

## Build.js

The `build.js` file contains the main logic for building the site. It depends on the [myna-parser](https://www.npmjs.com/package/myna-parser) module, which is already included in this repository so you don't have to do anything

## Articles.json

The `articles.json` file contains an array of JSON objects describing each article: the source file name, the title, the description, and the date it went live. 

## Data.Js

This is a simple JavaScript file that contains the personal settings and customization options used by the build script. It acts as a large JSON object, except it can contain executable code if you so desire. 

## Articles subfolder

The articles sub-folder is where you would normally place your blog posts as markdown files. In order for the file to be published, an entry has to be added to the `articles.json` file. 

## Templates Subfolder 

The templates subfolder contains the template files for the generated `index.html`, `about.html`, `rss.xml`, `blog.html` and blog files. These files use [mustache](https://mustache.github.io/mustache.5.html) style template variables.