let cars = new Map()
cars.set('BMW','AUDI')
cars.set('jaguar','ford');
console.log(cars)

// Various display options

val = cars.entries()
console.log(val)
console.log(cars.keys())
console.log(cars.values())

// To determine size
console.log('No. of cars : '+cars.size)

// To find a particular value 
console.log(cars.get(''))
console.log(cars.has('AUDI'))
 
// to delete any value

 cars.delete('ford')
 console.log(cars)

let a =cars.values()
console.log(a)

for(let [key,value] of cars)
{
    console.log(key+ ' performance is better ' + value)
}
