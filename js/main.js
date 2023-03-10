document.querySelector('.coffee').addEventListener('mouseover', hoverCoffee)
document.querySelector('.coffee').addEventListener('mouseout', unhoverCoffee)
document.querySelector('.book').addEventListener('mouseover', hoverBook)
document.querySelector('.book').addEventListener('mouseout', unhoverBook)
document.querySelector('.viz').addEventListener('mouseover', hoverViz)
document.querySelector('.viz').addEventListener('mouseout', unhoverViz)
document.querySelector('.tenzi').addEventListener('mouseover', hoverTenzi)
document.querySelector('.tenzi').addEventListener('mouseout', unhoverTenzi)
document.querySelector('.todont').addEventListener('mouseover', hoverTodont)
document.querySelector('.todont').addEventListener('mouseout', unhoverTodont)
document.querySelector('.bar').addEventListener('mouseover', hoverBar)
document.querySelector('.bar').addEventListener('mouseout', unhoverBar)

function hoverCoffee() {
	document.querySelector('#coffee').setAttribute('src', 'images/coffeewithsteff.gif')
}

function unhoverCoffee() {
	document.querySelector('#coffee').setAttribute('src', 'images/coffeewithsteff.png')
}

function hoverBook() {
	document.querySelector('#book').setAttribute('src', 'images/bookstreet.gif')
}

function unhoverBook() {
	document.querySelector('#book').setAttribute('src', 'images/bookstreet.png')
}

function hoverViz() {
	document.querySelector('#viz').setAttribute('src', 'images/businessviz.gif')
}

function unhoverViz() {
	document.querySelector('#viz').setAttribute('src', 'images/businessviz.png')
}

function hoverTenzi() {
	document.querySelector('#tenzi').setAttribute('src', 'images/gameoftenzi.gif')
}

function unhoverTenzi() {
	document.querySelector('#tenzi').setAttribute('src', 'images/gameoftenzi.png')
}

function hoverTodont() {
	document.querySelector('#todont').setAttribute('src', 'images/todont.gif')
}

function unhoverTodont() {
	document.querySelector('#todont').setAttribute('src', 'images/todont.png')
}

function hoverBar() {
	document.querySelector('#bar').setAttribute('src', 'images/cozybar.gif')
}

function unhoverBar() {
	document.querySelector('#bar').setAttribute('src', 'images/cozybar.png')
}