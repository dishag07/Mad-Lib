let adjective = prompt('Enter an adjective:')
let noun = prompt('Enter an noun:')
let verb = prompt('Enter an verb:')
let adverb = prompt('Enter an adverb:')
let relative = prompt ('Enter a relationship')
let place = prompt ('Enter a place')

let story = `Dear Santa... I have been a very ${adjective} ${noun}. This year I helped my ${relative} with chores around the ${place}. `
let madLibOutputDiv = document.getElementById('madLibOutput')
madLibOutputDiv.innerHTML = `<p>${story}</p>`