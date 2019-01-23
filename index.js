#!/usr/bin/env node


const boxen = require('boxen');
const chalk = require('chalk'); 


const text= '    Stephane Wiertz' +chalk.yellow('/') + "stwiertz"  + "\n\n" + "    Work :  Student Becodek" + "\n\n" + chalk.yellow("   --------------------------") + "\n\n"  + "Github:  https://github.com/" + chalk.blue("stwiertz") + "\n"  + "npm:  https://npmls.com/" + chalk.green("stwiertz") + "\n" + "linkedin: https://www.linkedin.com/in/" + chalk.red("stephane-wiertz")


console.log(boxen(text, {padding: 1 ,borderStyle:"classic"}));