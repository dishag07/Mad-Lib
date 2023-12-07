let adjective = prompt('Enter an adjective:')
let noun = prompt('Enter an noun:')
let verb = prompt('Enter an verb:')
let adverb = prompt('Enter an adverb:')

let story =  `Once Upon a Time, in a ${adjective} ${noun} ${adverb} ${verb}.`

let madLibOutputDiv = document.getElementById('madLibOutput')
madLibOutputDiv.innerHTML = `<p>${story}</p>`