const os= require("os");
// returns underlying architecture
let mySystemArch= os.arch();
// console.log(mySystemArch);

// return info on the cpu
let myCpuInfo= os.cpus();
// console.log(myCpuInfo);

// returns the host name of the operating system as a string
let hostName =os.hostname();
// console.log(hostName);

// returns an object containing network intrfaces that have been assigned a network address

let networkInfo= os.networkInterfaces();
// console.log(networkInfo);

// // returns the operating system as astring.
console.log(os.release());

// returns the platform nodejs was compiled for
console.log(os.platform());

// returns the operating system name
console.log(os.type());

// returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());

// reurns the system uptime in number of seconds.
// console.log(os.uptime());

let uptimeInHours= os.uptime()/3600;
console.log(uptimeInHours);

// returns info about currently affective user
console.log(os.userInfo());
