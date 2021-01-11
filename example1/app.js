// get reference to html elements
const container = document.getElementById( 'container' )
const img = document.getElementById( 'myImage' )

// listen to events related to the image
img.addEventListener( 'mouseover', mouseOver, false )
img.addEventListener( 'mouseout', mouseOut, false )

// define what happens when there is a mouse over event
function mouseOver () {

    console.log( 'in' )
    const el = document.createElement( 'div' )
    el.id = 'caption'
    el.innerText = 'The Event Horizon Telescope (EHT) — a planet-scale array of eight ground-based radio telescopes forged through international collaboration — was designed to capture images of a black hole. In coordinated press conferences across the globe, EHT researchers revealed that they succeeded, unveiling the first direct visual evidence of the supermassive black hole in the centre of Messier 87 and its shadow.'
    container.appendChild( el )

}

// define what happens when there is a mouse out event
function mouseOut () {

    console.log( 'out' )
    document.getElementById( 'caption' ).remove()

}

