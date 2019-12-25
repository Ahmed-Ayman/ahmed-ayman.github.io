// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-tag-template-js": () => import("./../src/templates/TagTemplate.js" /* webpackChunkName: "component---src-templates-tag-template-js" */),
  "component---src-templates-post-template-js": () => import("./../src/templates/PostTemplate.js" /* webpackChunkName: "component---src-templates-post-template-js" */),
  "component---src-templates-page-template-js": () => import("./../src/templates/PageTemplate.js" /* webpackChunkName: "component---src-templates-page-template-js" */),
  "component---src-templates-index-js": () => import("./../src/templates/index.js" /* webpackChunkName: "component---src-templates-index-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-search-js": () => import("./../src/pages/search.js" /* webpackChunkName: "component---src-pages-search-js" */),
  "component---src-pages-tags-js": () => import("./../src/pages/tags.js" /* webpackChunkName: "component---src-pages-tags-js" */)
}

