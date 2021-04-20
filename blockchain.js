const sha256 = require("sha256");


function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
  this.createNewBlock(0, 0, 0); //genesis block
}


Blockchain.prototype.createNewBlock = function (hash, p, n) {
  var newBlock = {
    index: this.chain.length + 1,
    timeStamp: Date.now(),
    transactions: this.pendingTransactions,
    hash: hash,
    previousBlockHash: p,
    nonce: n,
  };
  this.chain.push(newBlock);
  this.pendingTransactions = [];
};


Blockchain.prototype.createNewTransaction = function (
  name,
  bloodgroup,
  sugarlevel,
  bp
) {
  var newTransaction = {
    name: name,
    bg: bloodgroup,
    sl: sugarlevel,
    bp: bp,
  };
  this.pendingTransactions.push(newTransaction);
  return newTransaction;
};


Blockchain.prototype.generateHash = function (
  nonce,
  currentBlockData,
  previousBlockHash
) {
  var stringData = nonce.toString();
  +JSON.stringify(currentBlockData) + previousBlockHash;
  var hash = sha256(stringData);
  return hash;
};


Blockchain.prototype.proofOfWork = function (
  currentBlockData,
  previousBlockHash
) {
  let nonce = 0;
  var hash = this.generateHash(nonce, currentBlockData, previousBlockHash);
  while (hash.substring(0, 5) != "00000") {
    hash = this.generateHash(nonce, currentBlockData, previousBlockHash);
    console.log(hash);
    nonce++;
  }
  return nonce;
};


module.exports = Blockchain;
{
  let nonce = 0;
  var hash = this.generateHash(nonce, currentBlockData, previousBlockHash);
  while (hash.substring(0, 5) != "00000") {
    hash = this.generateHash(nonce, currentBlockData, previousBlockHash);
    console.log(hash);
    nonce++;
  }
  return nonce;
};
HTMLIFrameElement
GeolocationPosition