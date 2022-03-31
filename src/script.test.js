const calculate = require('./cart');
const PERCENT_FOR_CLUB = require('./consts');

it('this is a test',()=>{   
    console.log('OK');
    let a=10;
    expect(a).toBe(10);
})


it('test 2',()=>{   
    console.log('OK');
    let a=10;
    expect(a).toBe(10);
})


it('this is a  cart test',()=>{   
    console.log(calculate(100));
    let price=100;

    expect(calculate(price)).toBe(price*PERCENT_FOR_CLUB);
});

