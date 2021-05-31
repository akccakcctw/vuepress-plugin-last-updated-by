const path = require('path');
const spawn = require('cross-spawn');

module.exports = (options = {}) => ({
  extendPageData ($page) {
    const { transformer } = options;
    const author = getGitLastUpdatedAuthor($page._filePath)

    if (author) {
      const lastUpdatedBy = (typeof transformer === 'function')
        ? transformer(author)
        : author.trim();
      $page.lastUpdatedBy = lastUpdatedBy;
    }
  }
});

function getGitLastUpdatedAuthor (filePath) {
  let lastUpdatedBy;
  try {
    lastUpdatedBy = spawn.sync(
      'git',
      ['log', '-1', '--format=%an', path.basename(filePath)],
      { cwd: path.dirname(filePath) }
    ).stdout.toString('utf-8');
  } catch (e) {
    // do not handle for now
  }
  return lastUpdatedBy;
}
