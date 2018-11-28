const test = require('tape');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;


const trace = label => val => {
    console.log(`${label}: ${val}`);
    return val;
};


const fns = {
    fnAnagramPalindrome: str => {
        let arr = str.split('');
        let letters = arr.reduce((hash, char) => {
            hash[char] === undefined ? 
            hash[char] = 1 : 
            hash[char]+= 1;
            return hash;
        }, {});

        let filterOdds = 
            Object.values(letters)
                        .filter(num => num % 2 !== 0).length > 1;
        return filterOdds === true ? false : true;
    },
    anagramPalindrome: str => {
        let letters = {};
        // frequency of letters
        for(let i = 0; i < str.length; i++) {
            if(letters[str[i]] === undefined) {
                letters[str[i]] = 1;
            } else {
                letters[str[i]] = letters[str[i]] + 1;
            }
        }
        // check odds
        let sumOfOdds = 0;
        for(let char in letters) {
            if(letters[char] % 2 === 1) {
                sumOfOdds++
                if(sumOfOdds > 1) {
                    return false
                }
            }
        }
        return true;
    },
    bitArraySort: arr => {
        let left = 0;
        let right = arr.length - 1;
        while(left < right) {
            while(arr[left] === 0) { left++; }
            while(arr[right] === 1) { right--; }
            if (left < right) {
                [ arr[left], arr[right] ] = [arr[right], arr[left]];
            }
        }
        return arr;
    },
    mergeSortedArrays: (arr1, arr2) => {
        // complete    
    }
}


const testSuite = () => {
    test('anagramPalindrome#loop', assert => {
        const string = 'cat';
        const msg = 'should check is a string is a palindrome.';
        const actual = fns.anagramPalindrome(string);
        const expected = false;
        console.log(actual, 'expected =>', expected);
        assert.same(actual, expected, msg);
        assert.end();
    });

    test('anagramPalindrome#reduce', assert => {
        const msg = 'should check is a string is a palindrome.';

        const string = 'cat';
        
        const actual = fns.fnAnagramPalindrome(string);
        const expected = false;

        assert.same(actual, expected, msg);
        assert.end();
    });

    test('bitArraySort w/ multiple pointers', assert => {
        const msg = 'should sort an array of 0s and 1s';

        const arr = [1,0,0,0,1,1,1,0,0,1,0,0,1];

        const actual = fns.bitArraySort(arr);
        const expected = arr.sort();

        assert.same(actual, expected, msg);
        assert.end();
    })
    
}

const perf = () => {
    suite
    .add('anagramPalindrone#reduce', () => {
        fns.fnAnagramPalindrome('cat');
    })
    .add('anagramPalindrome#loop', () => {
        fns.anagramPalindrome('cat')
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        // cant use arrow fns w/ this.
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
};

module.exports = {testSuite, fns, perf}