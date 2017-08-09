# Exaltation

A fast and easy to use blog generator designed especially for Github users.

## Getting Started

1. Create a [Github pages repository](https://pages.github.com/).
2. [Download and unzip the Exaltation repository](https://github.com/cdiggins/exaltation/archive/master.zip) into your local Github pages repo.
3. Edit your local version of the `src\data.js` file with your site and personal information. 

## Authoring Blog Posts

1. Create a new markdown file in the `src\articles\` folder with your blog article
2. Add a new entry to `src\articles.json` file with the title, date, file name, and description of your blog article.
3. Run `node src\build.js`
4. Commit and push your changes to your repository.

## Requirements 

* [Node.js](https://nodejs.org/en/)

## For more information

* [Markdown authoring](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
* [How mustache templates work](https://mustache.github.io/mustache.5.html)

