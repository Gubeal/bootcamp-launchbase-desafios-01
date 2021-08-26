const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  user.transactions.push(transaction);
  if (transaction.type == "debit") {
    user.balance -= transaction.value;
  }
  if (transaction.type == "credit") {
    user.balance += transaction.value;
  }
}

function getHigherTransactionByType(type) {
  let transaction = {
    type,
    value: undefined
  }
  let list = [];

  for (let transaction of user.transactions) {
    if (transaction.type == type) {
        list.push(transaction.value);
    }
  }

  let higher;

  for (let i = 0; i < list.length; i++) {
    if (i==0) { 
      higher = list[i] 
    } else {
      if (list[i] > higher) {
        higher = list[i];
      }
    }
  }

  transaction.value = higher;

  return transaction;
}

function getAverageTransactionValue() {
  let sum = 0;

  for (let transaction of user.transactions) {
    sum += transaction.value;
  }

  const average = sum / user.transactions.length;

  return average;
}

function  getTransactionCount() {
  let count = {
    credit: 0,
    debit: 0
  }

  for (let transaction of user.transactions) {
    if (transaction.type == "credit") {
      count.credit++;
    }
    if (transaction.type == "debit") {
      count.debit++;
    }
  }
  return count;
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionCount()); // { credit: 2, debit: 2 }