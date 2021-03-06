module.exports = 
{ 
  // Paths 
  outputFolder          : './',
  blogFolder            : './blog/',
  draftsFolder          : './drafts/',
  srcFolder             : './src/',
  templatesFolder       : './src/templates/',
  articleTemplateFile   : './src/templates/article_template.html',
  blogTemplateFile      : './src/templates/blog_template.html',
  indexTemplateFile     : './src/templates/index_template.html',
  rssTemplateFile       : './src/templates/rss_template.xml',
  markdownFolder        : './src/articles/',
  articlesJsonFile      : './src/articles.json',

  // Main options
  author :            'Christopher Diggins',
  brand :             'Exaltation',
  year :              '2017',
  source :            'https://github.com/cdiggins/exaltation', 
  license :           'Attribution-ShareAlike 4.0 International',
  licenseUrl :        'https://creativecommons.org/licenses/by-sa/4.0/',
  baseUrl :           '.',
  siteUrl :           'https://cdiggins.github.io/exaltation',
  pageUrl :           'https://cdiggins.github.io/exaltation',
  email :             'cdiggins@gmail.com',
  generator :         'Exaltation',

  // If you don't change this, I will be tracking your Google traffic, not you.
  googleAnalyticsId : 'UA-93495883-1', 

  // Page sharing links
  twitterShareUrl :  "https://twitter.com/intent/tweet?url={{pageUrl}}",
  googleShareUrl :   "https://plus.google.com/share?url={{pageUrl}}",
  facebookShareUrl : "https://www.facebook.com/sharer/sharer.php?u={{pageUrl}}",
  linkedInShareUrl : "https://www.linkedin.com/shareArticle?mini=true&url={{pageUrl}}&title={{title}}",
  redditShareUrl :   "https://www.reddit.com/r/test/submit?title={{title}}&url={{pageUrl}}",
  tumblrShareUrl :   "https://www.tumblr.com/share?v=3&t={{title}}&u={{pageUrl}}",
  hackerShareUrl :   "https://news.ycombinator.com/submitlink?u={{pageUrl}}&t={{title}}",

  // Social links: update otherwise they go to Christopher Diggins's site
  social : 
  [
    { title: "email", icon: "fa-envelope", url: 'mailto:{{email}}' },
    { title: "Twitter", icon: "fa-twitter", url: 'https://twitter.com/cdiggins' },
    { title: "LinkedIn", icon: "fa-linkedin", url: 'https://www.linkedin.com/in/cdiggins/' },
    { title: "FaceBook", icon: "fa-facebook", url: 'https://www.facebook.com/diggins.software' },
    { title: "GitHub", icon: "fa-github", url: 'https://github.com/cdiggins/exaltation' },
    { title: "StackOverflow", icon: "fa-stack-overflow", url: 'https://stackoverflow.com/users/184528/cdiggins' },
    { title: "YouTube", icon: "fa-youtube", url: "https://www.youtube.com/user/cdiggins" },
    { title: "RSS", icon: "fa-rss", url: '{{siteUrl}}/rss.xml' },
  ],
 
  // Custom settings for the index page
  index : 
  { 
    title       : 'The Exaltation Blog Generator',      
    description : 'An open-source static blog generator designed especially for Github users.',
    pageUrl:      '{{siteUrl}}' 
  },

  // Custom settings for the blog entry page. 
  blog : { 
    title :       'The Exaltation Blog',
    description : 'A list of articles on the Exaltation blog.',
    pageUrl:      '{{siteUrl}}/blog.html'
  },
  
  // Custom settings for the RSS page
  rss : 
  { 
    title       : 'The Exaltation Blog Generator',
    description : 'A blog about a blog generator.',
    pageUrl:      '{{siteUrl}}/rss.xml' 
  },

  // The URL where custom fonts can be downloaded. 
  // Visit: https://fonts.google.com
  fontUrl : 'https://fonts.googleapis.com/css?family=Lora|Lato',
  
  // Custom CSS injected into every page.
  style : 
`   body { 
      font-family: 'Lato', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 { 
      font-family: 'Lora', serif;
    } 
    .jumbotron {
      padding-top: 1em;
      padding-bottom: 1em;
      margin-bottom: auto;
      box-shadow: -5px 9px 10px cadetblue;
    }
    .jumbotron > h1 {
        text-shadow: -2px 1px 3px cadetblue;
    }
   `,

  // This the contents of the HTML head tag
  header : `
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <!-- 
    Bootstrap says: "The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags"
  -->

  <!-- Standard meta tags -->
  <meta name="description"          content="{{description}}" />
  <meta name="author"               content="{{author}}" />
  <meta name="generator"            content="{{generator}}" />
  
  <!-- Open Graph meta-properties, used by FaceBook and other social sites --> 
  <meta property="og:type"          content="website" />
  <meta property="og:url"           content="{{pageUrl}}" />
  <meta property="og:title"         content="{{title}}" />
  <meta property="og:description"   content="{{description}}" />
  <meta property="og:image"         content="{{imageUrl}}" />

  <!-- The site title -->
  <title>{{title}}</title>

  <!-- Bootstrap http://getbootstrap.com/getting-started/ -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
  <link rel="stylesheet" href="{{baseUrl}}/css/theme.css" />

  <!-- Font Awesome http://fontawesome.io/ --> 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

  <!-- Google Fonts https://fonts.google.com/ --> 
  <link rel="stylesheet" href="{{{fontUrl}}}">

  <!-- Custom styling, non-trivial styling should be done in its own CSS file --> 
  <style>
    {{{style}}}
  </style>`,

  // This is the nav tag and appears at the top of the page/ 
  nav : `
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="{{{siteUrl}}}" title="top">{{brand}}</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">Top</a></li>
          <li><a href="{{{baseUrl}}}/index.html">Home</a></li>
          <li><a href="{{{baseUrl}}}/blog.html">Articles</a></li>
          <li><a href="{{{baseUrl}}}/blog/documentation.html">Help</a></li>
          <li><a href="{{{baseUrl}}}/blog/about.html">About</a></li>
          <li><a href="https://github.com/cdiggins/exaltation">GitHub</a></li>
          {{#urlPrev}}
            <li><a href="{{{urlPrev}}}">Previous</a></li>
          {{/urlPrev}}
          {{#urlNext}}
            <li><a href="{{{urlNext}}}">Next</a></li>
          {{/urlNext}}
        </ul>
      </div>
    </div>
  </nav>`,

  // This div tag floats to the right of the main content, if enough spaces is present, otherwise it appears at the bottoms
  sidebar : `
  <div class="col-sm-4 sidebar-module sidebar-module-inset">
      <p>
        This blog was generated using the <a href="https://github.com/cdiggins/exaltation">Exaltation</a> blog maker 
        by <a href="http://cdiggins.github.io">Christopher Diggins</a>. 
      </p>
    <h3>Recent Posts</h3>
       <ul>
{{#recentArticles}}
   <li><a href="{{{pageUrl}}}">{{title}}</a></li>
{{/recentArticles}}
      </ul>
    <h3>Share</h3> 
    <p>
      <ul class="fa-ul">
        <li><i class="fa fa-facebook    fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{facebookShareUrl}}}">Facebook</a></li>
        <li><i class="fa fa-twitter     fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{twitterShareUrl}}}">Twitter</a></li>
        <li><i class="fa fa-reddit      fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{redditShareUrl}}}">Reddit</a></li>
        <li><i class="fa fa-google-plus fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{googlePlusShareUrl}}}">Google+</a></li>
        <li><i class="fa fa-linkedin    fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{linkedInShareUrl}}}">LinkedIn</a></li>
        <li><i class="fa fa-hacker-news fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{hackerNewsShareUrl}}}">Hacker News</a></li>
        <li><i class="fa fa-tumblr      fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{tumblrShareUrl}}}">Tumblr</a></li>
      </ul>
    </p>
  </div>`,
      
  // This is added at the end of the body tag.
  footer : `    
<hr>
<footer style='text-align:center'>
  <div class="container">

    <!-- Social media sharing icons -->
    <div class="row">
      {{#social}}    
        <a href="{{{url}}}" class="btn-link" style="text-decoration: none" title="{{title}}">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
            <i class="fa {{icon}} fa-stack-1x fa-inverse" aria-hidden="true"></i>
          </span>
        </a>
      {{/social}}
    </div>
  
    <!-- Copyright and Licene notice -->
    <p class="copyright text-muted small">
      Copyright &copy; {{{year}}} {{{author}}}
      <br/><a href="{{{licenseUrl}}}">{{{license}}}</a>
      <br/>Built with <a href="https://cdiggins.github.io/exaltation">Exaltation</a>
    </p>
  </div>

</footer>

  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

  <!-- Bootstrap scripts --> 
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

  {{#googleAnalyticsId}}
  <script async="" src="https://www.google-analytics.com/analytics.js"></script>
  <!-- Google analytics -->
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', '{{googleAnalyticsId}}', 'auto');
  ga('send', 'pageview');
  </script>
  {{/googleAnalyticsId}}`, 
  
};