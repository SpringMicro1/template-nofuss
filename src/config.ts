// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const pagesString =
  // BEGIN JSON
  `{"BASE":{  "desc": "An Astro Template for blog, docs or landing page without complicated design and setup.",  "title": "NoFuss Astro",  "ogImage": "astropaper-og.jpg", "lightAndDarkMode": true},"HOME":{"TEXT":{"Heading":"No Fuss Astro Template","Description":"An Astro Template for blog, docs or landing page without complicated design and setup.","Feature 1 Title":"Blazingly Fast","Feature 1 Text":"The reason why I chose Astro is because it's blazingly fast. It's also a component-based framework, so you can easily reuse your components.","Feature 2 Title":"Easy to use","Feature 2 Text":"Need to use this template? Just clone it and start writing your content. No complicated setup, no complicated design.","Feature 3 Title":"Free and Open Source","Feature 3 Text":"Found some issues or want to contribute? Feel free to open an issue or pull request on GitHub.","Data 1 Number":"1632","Data 1 Text":"This is a fake data","Data 2 Number":"4564","Data 2 Text":"Stars on GitHub","Data 3 Number":"1712","Data 3 Text":"Contributors"},"LINKS":{ "Link Github": { "href": "https://github.com/lancerossdev", "content": "GitHub"}, "Link Twitter": { "href": "https://twitter.com/lancerossdev", "content": "Twitter"}},"IMAGES":{}}, "BLOG":{"TEXT":{"Heading":"Blog","Description":"This is how the blog page looks like. Just add an MDX file to the blog folder and it will show up here."},"LINKS":{},"IMAGES":{}}}`;
// END JSON
const pagesObject = JSON.parse(pagesString);
export const BASE = pagesObject.BASE;
export const HOME = pagesObject.HOME;
export const BLOG = pagesObject.BLOG;
