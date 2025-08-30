'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc) {
  containerMovements.innerHTML = '';
  //OR .tetxtContent = 0

  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">Date comes soon</div>
    <div class="movements__value">${mov}£</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// (displayMovements(account1));

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}£`;
};
// calcDisplayBalance(account1);

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}£`;

  const outs = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outs)}£`;

  // const interest = incomes * account.interestRate/100;
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(income => (income * account.interestRate) / 100)
    .filter(inc => inc >= 1)
    .reduce((acc, inc) => acc + inc, 0);
  labelSumInterest.textContent = `${interest}£`;
};
// calcDisplaySummary(account1);

const createUsername = function (acc) {
  acc.forEach(function (user) {
    user.ownerUserName = user.owner
      .toLowerCase()
      .split(' ')
      .map(userName => userName[0])
      .join('');
  });
  // return acc
};
createUsername(accounts);
// console.log(accounts);
// console.log(createUsername(accounts));

const updateActiveUI = function (logAccount) {
  displayMovements(logAccount);
  calcDisplaySummary(logAccount);
  calcDisplayBalance(logAccount);
};

let loggedAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  loggedAccount = accounts.find(
    acc => acc.ownerUserName === inputLoginUsername.value
  );
  if (loggedAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome ${loggedAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    updateActiveUI(loggedAccount);

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  } else {
    labelWelcome.textContent = `Log in to get started`;
    containerApp.style.opacity = 0;
    alert(`Username / PIN is not correct, Please try again.`);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  let transferAmount = Number(inputTransferAmount.value);
  const clearInputs = () => {
    inputTransferAmount.value = '';
    inputTransferTo.value = '';
    inputTransferAmount.blur();
  };
  const targetAccount = accounts.find(
    acc => acc.ownerUserName === inputTransferTo.value
  );
  /* 
  if (targetAccount && targetAccount !== loggedAccount) {
    if (loggedAccount.balance >= transferAmount && transferAmount > 0) {
      loggedAccount.movements.push(-transferAmount);
      targetAccount.movements.push(transferAmount);

      updateActiveUI(loggedAccount);

      clearInputs();
    } else {
      alert(
        `${transferAmount} is more than you balance (${loggedAccount.balance})`
      );
      clearInputs();
    }
  } else {
    alert(
      `Transfer to "${inputTransferTo.value}" is not allowed, please check and retry.`
    );
    clearInputs();
  }
 */
  if (
    !targetAccount ||
    targetAccount.ownerUserName === loggedAccount.ownerUserName
  ) {
    alert(
      `Transfer to "${inputTransferTo.value}" is not allowed, please check and retry.`
    );
    return;
  }
  if (transferAmount <= 0 || loggedAccount.balance < transferAmount) {
    alert(
      `${transferAmount} is not vaalid, you balance is (${loggedAccount.balance})`
    );
    return;
  }

  loggedAccount.movements.push(-transferAmount);
  targetAccount.movements.push(transferAmount);

  updateActiveUI(loggedAccount);
  clearInputs();
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  const closingAccount = accounts.find(
    acc => acc.ownerUserName === inputCloseUsername.value
  );
  const closingAccountIndex = accounts.findIndex(acc => acc === closingAccount);
  if (!closingAccount || closingAccount !== loggedAccount) {
    alert('Not allowed');
    return;
  }
  if (Number(inputClosePin.value) !== closingAccount.pin) {
    alert('Wrong PIN');
    return;
  }

  accounts.splice(closingAccountIndex, 1);
  alert('Account Closed Successfully.');
  labelWelcome.textContent = `Log in to get started`;
  containerApp.style.opacity = 0;

  console.log(accounts);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/* 
const rate = 1.1;
const mov = movements.map(move => move * rate);
console.log(mov);

const strMov = movements.map(
  (mov, i, arr) =>
    //  mov > 0
    //  ? `Movment ${i + 1}: You diposited ${mov}`
    //  : `Movment ${i + 1}: You withdrew ${Math.abs(mov)}`

    `Movment ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(strMov);
 */
/////////////////////////////////////////////////
