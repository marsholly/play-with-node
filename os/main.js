'use strict'

//Write a simple Node script that will clearly display system information. 
  const os = require('os');

  //the operating system CPU architecture
  console.log('CPU architecture: ', os.arch());

  // an array of objects containing information about each CPU/core installed.
  console.log('CPU information: ', os.cpus());

  //the amount of free system memory in bytes as an integer
  console.log('Free system memory: ', os.freemem());

  //the total amount of system memory in bytes as an integer
  console.log('Total amount of system memory: ', os.totalmem());

  //the home directory of the current user as a string
  console.log('Home directory: ', os.homedir());

  //the hostname of the operating system as a string
  console.log('hostname: ', os.hostname());

  //network interfaces that have been assigned a network address
  console.log('network interfaces: ', os.networkInterfaces());

  // operating system platform
  console.log('operating system platform: ', os.platform());

  //the operating system name 
  console.log('operating system name: ',  os.type());