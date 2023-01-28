import web3 from './web3';

const address = '0x43cCDBB8275A6a36FE6D735cBE69C7E866D65769';

const abi = [
  {
    "constant":true,
    "inputs":[],
    "name":"manager",
    "outputs":[{"name":"","type":"address"}],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[],
    "name":"pickWinner",
    "outputs":[],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[],
    "name":"getPlayers",
    "outputs":[{"name":"","type":"address[]"}],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[],
    "name":"enter",
    "outputs":[],
    "payable":true,
    "stateMutability":"payable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[{"name":"","type":"uint256"}],
    "name":"players",
    "outputs":[{"name":"","type":"address"}],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"constructor"
  }
];

export default new web3.eth.Contract(abi, address);
