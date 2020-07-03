const db = require('./index');

const data = [
  { name: 'forest0', amount: 123 },
  { name: 'forest1', amount: 456 },
  { name: 'forest2', amount: 789 },
  { name: 'forest3', amount: 0.4 },
  { name: 'forest4', amount: 77 },
  { name: 'forest5', amount: 0 },
];

data.forEach(({ name, amount }) => {
  var msg = `INSERT INTO tennis (item_name, amount) VALUES ("${name}",${amount});`
  db.query(msg);
});