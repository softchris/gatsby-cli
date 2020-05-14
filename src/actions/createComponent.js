const fs = require('fs');
const path = require('path');
const { success, warning } = require("../lib/messages");

module.exports = (name) => {
  const readPath = path.join(__dirname, '../', 'templates', 'component.js');
  const writePath = path.join(process.cwd(), 'src', 'components', `${name}.js`);
  if (fs.existsSync(writePath)) {
    warning(`Component "${name}.js" already exist at component`)
    return;
  } 
  const content = fs.readFileSync(readPath, "utf8");
  fs.writeFileSync(writePath, content);
  success(`Component "${name}.js" created at components/`)

}