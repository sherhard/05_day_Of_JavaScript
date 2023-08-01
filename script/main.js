let empty = Array();
console.log(empty)

let arr_05 = [1, 'hello', true, 23.5, 22];
console.log(arr_05)
console.log(arr_05.length);
console.log(arr_05[0]);
console.log(arr_05[3]);
console.log(arr_05[4]);
console.log('---------------------------------------------')

let mixedDataTypes = [1.2, false, true, 'js', 'hello', 1997];
console.log(mixedDataTypes.length)
console.log('---------------------------------------------')

let itCompanies = [];
// 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
itCompanies.push('Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon');
console.log(itCompanies);
console.log(itCompanies.lastIndexOf('Amazon'))
console.log(itCompanies.join())


console.log('---------------------------------------------')
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log('---------------------------------------------')
console.log(itCompanies.toString())
console.log('---------------------------------------------')
console.log(itCompanies.includes('Google'));
console.log('---------------------------------------------')
console.log(itCompanies.sort());
console.log('---------------------------------------------')
console.log(itCompanies.reverse())
console.log('---------------------------------------------')

console.log(itCompanies.slice(1, 3));
console.log('---------------------------------------------')
itCompanies.shift()
console.log(itCompanies);
itCompanies.pop()
console.log(itCompanies);
console.log(itCompanies.splice())


