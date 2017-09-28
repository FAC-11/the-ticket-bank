const tape = require('tape');

tape('Initialise tape', t => {
    t.equal(1, 1, '1 = 1');
    t.end();
})