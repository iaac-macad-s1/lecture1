const x_slider = document.getElementById( 'x' )
const y_slider = document.getElementById( 'y' )

x_slider.addEventListener( 'mouseup', onMouseUp, false)
y_slider.addEventListener( 'mouseup', onMouseUp, false)

function makeRows() {

    // remove existing container

    let container = document.getElementById( 'container' )
    console.log(container)

    if ( container ) {

        container.remove()

    }

    // create new container

    container = document.createElement( 'div' )
    container.classList.add( 'grid' )
    container.id = 'container'
    document.body.appendChild( container )

    // get slider values

    const rows = y_slider.valueAsNumber
    const columns = x_slider.valueAsNumber

    // update labels

    document.getElementById( 'x_label' ).innerHTML = 'X: ' + columns
    document.getElementById( 'y_label' ).innerHTML = 'Y: ' + rows

    // update number of rows and columns

    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', columns)

    // make grid items

    for ( i = 0; i < ( rows * columns ); i ++ ) {

      let cell = document.createElement( 'div' )
      cell.innerText = ( i + 1 )
      container.appendChild(cell).className = 'grid-item'

      const color = Math.floor( Math.random() * 16777215 ).toString( 16 )

      cell.addEventListener( 'mouseover', function () {

        cell.style.background = '#' + color

      }, false )

      cell.addEventListener( 'mouseout', function () {

        cell.style.background = 'white'

      }, false )

    }
}
  
makeRows();

function onMouseUp () {
    makeRows()
}