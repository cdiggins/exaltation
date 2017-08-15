# Frequently Asked Questions

## What language is Exaltation written in?

JavaScript. 

## Can I author articles in something other than Markdown? 

No. I'm not sure that something like reStructured text or BBCode really offers any substantial benefit. My view is that if you know how to use Github then you already know Markdown. Besides it takes about 5 minutes to learn all of the Markdown you ever need. 

## What if I really really want to author articles in something than Markdown?

In that case it really shouldn't be that hard to find a Node.JS module that converts from your favorite formt into HTML and to integrate it into the Build.js script. 

## Does Exaltation Support different Templates Systems? 

No. Mustache uses a variation of mustache templates that supports recursive expansion. This means that when a template variable is expanded, any variables contained within the result are also expanded. It is therefore possible to create an infinite loop with Exaltation. 

## Are there any plug-ins for Exaltation? 

No. For now I believe that supporting plug-ins would just add a lot of complexity for relatively little gain. Perhaps we can just ad

## Can I create web sites other than Blogs? 

Yes, but the build.js script might not offer the kind of customization you want. Feel free to look into extending Exaltation and making suggested changes. 