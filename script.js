let adjective = prompt('Enter an adjective:')
let adjective = prompt('Enter an noun:')
let adjective = prompt('Enter an verb:')
let adjective = prompt('Enter an adverb:')

let story =  `Once Upon a Time, in a ${adjective} ${noun} ${adverb} ${verb}.`

let madLibOutputDiv = document.getElementById('madLibOutput')
madLibOutputDiv.innerHTML = `<p>${story}</p>`