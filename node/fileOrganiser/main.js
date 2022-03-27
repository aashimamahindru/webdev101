let helpFunc= require("./commands/help");
let inputArr = process.argv.slice(2);
let orgFunc= require("./commands/organize")
let command = inputArr[0];
let path = inputArr[1];
switch (command){
    case"tree":
    // call free function
    console.log("tree fuction success on path" + path);
    break;

    case"organize":
    // call organize function
    // console.log("tree fuction success on path" + path);
    orgFunc.organize(path);
    break;

    case "help":
    // call help function
    helpFunc.help();
    // console.log("tree fuction success on path" + path);
    break;
    default:
        console.log("command not recognised");
    break;
}