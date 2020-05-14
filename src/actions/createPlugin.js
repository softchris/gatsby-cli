const fsExtra  = require('fs-extra');
const path = require('path');
const { error, success } = require('../lib/messages');

module.exports = (type) => {
  if (type !== 'source' && type !== 'transform') {
    error('Argument error, type needs to have value "source" or "transform"');
    return;
  }
  const fromPath = path.join(__dirname, '../', 'templates/', `plugin-${type}`);
  const toPath = path.join(process.cwd());
  fsExtra.copySync(fromPath, toPath);
  success(`successfully scaffolded a "${type}" plugin project`)
}