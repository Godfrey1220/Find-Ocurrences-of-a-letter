const countOcurrences = require('./count-ocurrences');


test('Expet to make the count of ocurrences of a specific letter', () => {

    expect(countOcurrences('hello', 'l')).toBe(2)
    expect(countOcurrences('Mandalorian', 'a')).toBe(3)
    expect(countOcurrences('Godfrey', 'y')).toBe(1)

});
