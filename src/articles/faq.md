# Frequently Asked Questions

## Why another Static Site Generator? 

There are already a large number of [static site generators](https://www.staticgen.com/) that are available for you to play with on Github. Exaltation was designed to address a very specific set of needs: Github users wanting a fast and easy to use and customize blog.

## Why Generate Web Pages Statically and not Dynamically?

When pages are generated offline, you can more easily validate them, version them, and then serve them to users as fast as possible. It is also more compatible with caching and distributed content delivery systems.

## Can I Create Web sites other than Blogs? 

Yes, but the build.js script might not offer the kind of customization you want. Feel free to look into extending Exaltation and making suggested changes. 

## Can I host my Blog somewhere other the GitHub pages

Definitely! The HTML pages generated can be hosted anywhere you want. 

## What language is Exaltation written in?

JavaScript.

## Can I author articles in something other than Markdown? 

No. It takes about 5 minutes to learn all of the Markdown you ever need. Supporting other markup languages would just add to the complexity of supporting and testing Exaltation. 

## What if I really really want to author articles in something than Markdown?

In that case it really shouldn't be that hard to find a Node.JS module that converts from your favorite formt into HTML and to integrate it into the Build.js script. At that point creating your own fork of Exaltation would probably be the right place to go, but I'm open for discussion. 

## Does Exaltation Support different Templates Systems? 

No. Mustache uses a variation of mustache templates that supports recursive expansion. 

## How do Exaltation Templates differ from Mustache 

Exaltation templates have the following differences from [Mustache templates](https://mustache.github.io/mustache.5.html):

* Exaltation does not support partials
* Exaltation does not support set delimiters 
* Exaltation uses automatic recursive template expansion. When a template variable is expanded, any template variables contained within the results are also expanded. It is therefore possible to create an infinite loop with Exaltation, without having to resort to partials. 

## Are there any plug-ins for Exaltation? 

No. For now I believe that a plug-ins would just add a lot of complexity for relatively little gain. I'd consider first trying to add features to the core build script, or forking Exaltation to support other types of workflows. Again feel free to discuss it on the issues page.