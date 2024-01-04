let adjective = prompt('Enter an adjective:')
let noun = prompt('Enter an noun:')
let verb = prompt('Enter an verb:')
let adverb = prompt('Enter an adverb:')
let relative = prompt('Enter a family relation:')
let place = prompt('Enter a place:')
let animal = prompt('Enter an animal:')
let vacay = prompt('Enter a vacation spot:')

let story = `Dear Santa... I have been a very ${adjective} ${noun}. This year I helped my ${relative} with chores around the ${place}. It's my job to ${verb} the ${noun} and take out the ${noun} everyday. I really hope I am on the ${adjective} list this year. I have done a lot of ${adjective} things, so I think I deserve it. I even helped my ${relative} feed their ${animal} while they were at ${vacay}. 


`

let madLibOutputDiv = document.getElementById('madLibOutput')
madLibOutputDiv.innerHTML = `<p>${story}</p>`
