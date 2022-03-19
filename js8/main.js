//Create a stopwatch object that has four properties and three methods

const stopwatch = {}

stopwatch.brand = 'Aqua'
stopwatch.model = 'water'
stopwatch.color = 'green'
stopwatch.material = 'plastic'

stopwatch.start = function() {
    console.log('RUUUNNNN!')
}
stopwatch.stop = function() {
    console.log('Sttoooppp!')
}
stopwatch.pause = function() {
    console.log('Take a break you\'ve earned it')
}
