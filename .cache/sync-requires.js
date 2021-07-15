const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/alexg/Programming/webdev/template1/.cache/dev-404-page.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/alexg/Programming/webdev/template1/src/pages/index.tsx"))),
  "component---src-pages-page-2-tsx": hot(preferDefault(require("/home/alexg/Programming/webdev/template1/src/pages/page-2.tsx"))),
  "component---src-pages-system-404-tsx": hot(preferDefault(require("/home/alexg/Programming/webdev/template1/src/pages/system/404.tsx")))
}

