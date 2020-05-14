#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const { Command } = require('commander');
const program = new Command();

const { createComponent, createPage, createPlugin } = require('./actions');

console.log(
  chalk.magenta(
    figlet.textSync("Gatsby scaffolder", {
      horizontalLayout: "full",
    })
));

program
  .command("component <name>")
  .description("Generate a component)")
  .action((name) => {
    createComponent(name);
  });

program
  .command("page <name>")
  .description("Generate a page)")
  .action((name) => {
    createPage(name);
  });

program
  .command("plugin <type>")
  .description("Generate a plugin")
  .action((type) => {
    createPlugin(type);
  });

program.parse(process.argv);