//replace slashes in url with dash except the first one which is replaced with nothing
export const replaceSlashInUrlWithDash = (location) => {
  //"location" here is to pull in the url path of the current view
  //I was using useLocation from react-router-dom in this instance
  const name = location.pathname.replace(/\//g, function (match, offset, all) {
    return match === '/' ? (all.indexOf('/') === offset ? '' : '-') : ''
  })
  return name
}
