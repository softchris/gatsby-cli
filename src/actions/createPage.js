const fs = require("fs");
const path = require("path");
const { success, warning } = require("../lib/messages");

module.exports = (name) => {
  const readPath = path.join(__dirname, "../", "templates", "page-with-data.js");
  const writePath = path.join(process.cwd(), 'src', 'pages', `${name}.js`);
  if (fs.existsSync(writePath)) {
    warning(`Page component "${name}.js" already exist at pages/`);
    return;
  }
  const content = fs.readFileSync(readPath, "utf8");
  fs.writeFileSync(writePath, content);
  success(`Page component "${name}.js" created at pages/`);
};
