const { randomBytes } = require('crypto');

const operation = process.argv[2];
const args = process.argv.slice(3);

const calculate = (operation, args) => {
  switch (operation) {
    case 'add':
      return args.reduce((acc, val) => acc + parseFloat(val), 0);
    case 'sub':
      return args.reduce((acc, val) => acc - parseFloat(val), 0);
    case 'mult':
      return args.reduce((acc, val) => acc * parseFloat(val), 1);
    case 'divide':
      return args.reduce((acc, val) => acc / parseFloat(val), args[0]);
    case 'sin':
      return Math.sin(parseFloat(args[0]));
    case 'cos':
      return Math.cos(parseFloat(args[0]));
    case 'tan':
      return Math.tan(parseFloat(args[0]));
    case 'random':
      const length = parseInt(args[0]) || 8;
      return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
    default:
      return 'Invalid operation';
  }
};

const result = calculate(operation, args);
console.log(result);
