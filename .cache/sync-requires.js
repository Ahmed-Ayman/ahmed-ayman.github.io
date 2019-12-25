const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-tag-template-js": hot(preferDefault(require("/home/ordyan/playground/ahmed-ayman.github.io/src/templates/TagTemplate.js"))),
  "component---src-templates-post-template-js": hot(preferDefault(require("/home/ordyan/playground/ahmed-ayman.github.io/src/templates/PostTemplate.js"))),
  "component---src-templates-page-template-js": hot(preferDefault(require("/home/ordyan/playground/ahmed-ayman.github.io/src/templates/PageTemplate.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("/home/ordyan/playground/ahmed-ayman.github.io/src/templates/index.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/ordyan/playground/ahmed-ayman.github.io/src/pages/404.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("/home/ordyan/playground/ahmed-ayman.github.io/src/pages/search.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/home/ordyan/playground/ahmed-ayman.github.io/src/pages/tags.js")))
}

