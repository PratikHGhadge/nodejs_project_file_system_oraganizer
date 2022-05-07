#!/usr/bin/env node
let inputArr = process.argv.slice(2);   // taking comand input and storing it in array 
const { dir } = require("console");
let treeObj = require("./commands/tree");
let helpObj = require("./commands/help");
let oraganizeObj = require("./commands/organize");
// console.log(inputArr);

// following commands we gona take input 
// Node main.js tree "directoripath"
// Node main.js organize "directorypath"
// Node main.js help

let comand = inputArr[0];
switch (comand) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;

    case "organize":
        oraganizeObj.organizeKey(inputArr[1]);
        break;

    case "help":
        helpObj.helpKey();
        break;

    default:
        console.log("Please input Right Command 🙏");
        break;
}