# Documentation 

## Requirements 

The only requirement of using Exaltation is [Node.js](https://nodejs.org/en/).

## Getting Started

The following instructions are for creating a blog using GitHub pages. You can use Exaltation with any HTTP hosting service you want.

1. Create a [Github pages repository](https://pages.github.com/).
2. [Download and unzip the Exaltation repository](https://github.com/cdiggins/exaltation/archive/master.zip) into your local Github pages repo.
3. Edit your local version of the `src\data.js` file with your site and personal information. 

## Authoring Blog Posts

1. Create a new markdown file in the `src\articles\` folder with your blog article
2. Add a new entry to `src\articles.json` file with the title, date, file name, and description of your blog article.
3. Run `node src\build.js`

The following source files will be generated in the root folder: 

* index.html
* blog.html
* rss.xml

The articles will be generated and placed in the folder: `blog\`. 

## Customization 

There are three main ways to customize the web-site generated via Exaltation:

1. **data.js** - The configuration file is in JavaScript instead of JSON so you can leverage the full strength of the language.
2. **templates** - These files control the main layout of the index page, and the article posts in conjunction with the configuration file 
3. **build.js** - For those a bit more bold, you can always customize the main build script as it is just 200 lines of well documented JavaScript.

## Getting the Newest Version of Myna

The Exaltation blog generator uses several tools provided with the [Myna parsing toolkit](https://cdiggins.github.io/myna-parser/). Bugs and fixes that occur in Myna can be retrieved using the command: `npm update`.
If you don't have it, you will have to install [npm](https://www.npmjs.org/).

## For More Information

* [A list of resources](resource.html) aimed at helping developers produce effective blogs.
* [FAQ](faq.html) frequently asked questions 
* [Known issues](https://github.com/cdiggins/exaltation/issues)
