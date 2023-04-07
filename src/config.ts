// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const pagesString =
  // BEGIN JSON
  `{"BASE":{  "desc": "An Astro Template for blog, docs or landing page without complicated design and setup.",  "title": "NoFuss Astro",  "ogImage": "astropaper-og.jpg", "lightAndDarkMode": true},"HOME":{"TEXT":{"Heading":"No Fuss Astro Template","Description":"An Astro Template for blog, docs or landing page without complicated design and setup."},"LINKS":{ "Link Github": { "href": "https://github.com/lancerossdev", "content": "GitHub"}, "Link Twitter": { "href": "https://twitter.com/lancerossdev", "content": "Twitter"}},"IMAGES":{}}, "BLOG":{"TEXT":{"Heading":"Blog","Description":"This is how the blog page looks like. Just add an MDX file to the blog folder and it will show up here."},"LINKS":{},"IMAGES":{}}}`;
// END JSON
const pagesObject = JSON.parse(pagesString);
export const BASE = pagesObject.BASE;
export const HOME = pagesObject.HOME;
export const BLOG = pagesObject.BLOG;
