// Answers for 2nd problem set 
// https://github.com/andyttran/guide_to_algorithms#1h-understand-complexity-of-native-methods
const test = require('tape');

const fns = { 
    // native indexOf method
     indexOf: (arr, target) => {
        for(let i = 0; i < arr.length; ++i) {
            if(arr[i] == target) { return i }
        }
        return -1
    },

    evens:  (arr) => {
        let evens = [];
        for(let i = 0; i <= arr.length; ++i) {
            if(arr[i] % 2 === 0) { evens.push(arr[i]) }
        }
        return evens;
    },

    evensFilter: arr => arr.filter(num => num % 2 === 0),

    splitStr: (string) => {
        const chars = string.split('');
        return [].concat(chars);
    },

    sum: (arr) => arr.reduce((a, b) => a + b, 0),

    sumLoop: arr => {
        let sum = 0;
        for (let i in arr) {
            sum += arr[i];
        }
        return sum;
    },
    sumLoopTwo: arr => {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum
    }
};


const testSuite = () => {
    test('indexLookup', assert => {
        const array = [1,2,3,4,5];
        const msg = 'should equal array.indexOf()';
        const actual = fns.indexOf(array, 3);
        const expected = 2;
        console.log(actual, 'expected =>', expected);
        assert.same(actual, expected, msg);
        assert.end();
    });

    test('evens fn', assert => {
        const msg = 'should return a new list containing even numbers.';
        const d = [1,2,3,4,5];

        const actual = fns.evens(d);
        const expected = [2,4];

        assert.same(actual, expected, msg);
        assert.end();
    });

    test('evensFilter fn', assert => {
        const msg = 'should return a new list containing even numbers.';
        const d = [1,2,3,4,5];

        const actual = fns.evensFilter(d);
        const expected = [2,4];

        assert.same(actual, expected, msg);
        assert.end();
    });

    test('split fn', assert => {
        const msg = 'should split a word into an array where each letter is an item';

        const actual = fns.splitStr('Thomas');
        const expected = ['T','h','o','m','a','s'];

        assert.same(actual, expected, msg);
        assert.end()
    })

    test('sum fn', assert => {
        const msg = 'should add up all items in an array';
        
        const arr = [0,1,2,3];

        const actual = fns.sum(arr);
        const expected = 6;

        assert.same(actual, expected, msg);
        assert.end();
    })

    test('sum loop', assert => {
        const msg = 'should add up all items in an array';
        
        const arr = [0,1,2,3];

        const actual = fns.sumLoop(arr);
        const expected = 6;

        assert.same(actual, expected, msg);
        assert.end();
    })


    test('sum loop #2', assert => {
        const msg = 'should add up all items in an array';
        
        const arr = [0,1,2,3];

        const actual = fns.sumLoopTwo(arr);
        const expected = 6;

        assert.same(actual, expected, msg);
        assert.end();
    });
}

module.exports = {fns, testSuite};
