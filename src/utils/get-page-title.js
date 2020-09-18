const setting = require('../settings.js')

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${setting.title}`
  }
  return `${setting.title}`
}
