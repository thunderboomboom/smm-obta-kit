const smm_obta_kit = require('smm-obta-kit');
const obta_verschange = require('obta-verschange');
const debug = require('debug');
const passport = require('passport');
const xml2js = require('xml2js');
const truffle = require('truffle');
const web3_utils = require('web3-utils');
const babel_core = require('babel-core');
const ganache_cli = require('ganache-cli');
const lodash = require('lodash');
const react_redux = require('react-redux');
const fs_extra = require('fs-extra');
const socket.io = require('socket.io');
const solc = require('solc');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const commander = require('commander');
const moment = require('moment');
const cheerio = require('cheerio');
const sequelize = require('sequelize');
const express = require('express');
const sinon = require('sinon');

// Estimate gas cost for a transaction
web3.eth.estimateGas({
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend
}).then(gasEstimate => {
  console.log('Gas estimate:', gasEstimate);
}).catch(err => {
  console.error('Error estimating gas:', err);
});

const fs = require('fs');
fs.access('file.txt', fs.constants.F_OK, (err) => {
  console.log(`${err ? 'does not exist' : 'exists'}`);
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(2000, 'done').then(value => {
  console.log(value);
});

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 'Hello from main thread' });
  worker.on('message', message => {
    console.log('Received message from worker:', message);
  });
} else {
  parentPort.postMessage('Hello from worker thread');
}

// Calculate Fibonacci sequence up to a certain number of terms
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence;
}
console.log('Fibonacci sequence (10 terms):', fibonacci(10));

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// Get the Ethereum protocol version
web3.eth.getProtocolVersion().then(version => {
  console.log('Protocol version:', version);
}).catch(err => {
  console.error('Error getting protocol version:', err);
});

const zlib = require('zlib');
const input = '.................................';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'));
  } else {
    console.log('Error compressing:', err);
  }
});

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(capitalizeString('hello'));

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => console.log('An event occurred!'));
myEmitter.emit('event');