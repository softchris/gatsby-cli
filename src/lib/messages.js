const chalk = require('chalk');

function success(message) {
  console.log(chalk.greenBright(message));
}

function warning(message) {
  console.log(chalk.yellowBright(message));
}

function error(message) {
  console.log(chalk.redBright(message));
}

module.exports = {
  success,
  warning,
  error
}