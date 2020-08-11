//map -- The Map object holds key-value pairs and remembers the original insertion order of the keys.
//Map -- A Map does not contain any keys by default. It only contains what is explicitly put into it.
//object -- An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful.

//Map -- A Map's keys can be any value (including functions, objects, or any primitive)
//Object -- The keys of an Object must be either a String or a Symbol.
let myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (let [key, value] of myMap) {      //for..of
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

for (let key of myMap.keys()) {
  console.log(key)
}
// 0
// 1

for (let value of myMap.values()) {
  console.log(value)
}
// zero
// one

let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let second = new Map([
  [1, 'hello'],
  [2, 'evening']
])

// Merge maps with an array. The last repeated key wins.
let merged = new Map([...first, ...second, [1, 'hi']])

console.log(merged.get(1)) // eins
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three

//passing function as a parameter in map
var arr=[{name: 'parvish',maths: 50, science: 63, social: 81},{name: 'nishi',maths: 70, science: 63, social:76}];
var newarr=arr.map(Func);
console.log(newarr)
function Func(item){
	
	var n=item.name;
	var v=item.maths+item.science+item.social;
	return {[n]:v}
}

var a = [1,2,3,4];
var b = a.map(mul)
function mul(n){
	return n*n;
}
console.log(b)



//anonymous function
var a = 100
var b = 200
var c = function(a,b){
	return a+b;
}
console.log(c(a,b));