// get reference to sliders

const x_slider = document.getElementById( 'x' )
const y_slider = document.getElementById( 'y' )

// listen to slider events

x_slider.addEventListener( 'mouseup', onMouseUp, false)
y_slider.addEventListener( 'mouseup', onMouseUp, false)

function makeRows() {

    // remove existing container

    let table = document.getElementById( 'table' )

    if ( table ) {

        table.remove()

    }

    // create new container

    table = document.createElement( 'table' )
    table.id = 'table'
    document.body.appendChild( table )

    // get slider values

    const rows = y_slider.valueAsNumber
    const columns = x_slider.valueAsNumber

    // update labels

    document.getElementById( 'x_label' ).innerHTML = 'X: ' + columns
    document.getElementById( 'y_label' ).innerHTML = 'Y: ' + rows

    // make table items

    for ( r = 0; r < rows; r ++ ) {

      const row = document.createElement( 'tr' )
      table.appendChild( row )

      for ( c = 0; c < columns; c ++ ) {

        const cell = document.createElement( 'td' )
        cell.innerText = c + ',' + r
        cell.style.border = '1px solid grey'
        cell.style.padding = '0px'

        const color = Math.floor( Math.random() * 16777215 ).toString( 16 )

        cell.addEventListener( 'mouseover', function () {

          cell.style.background = '#' + color

        }, false )

        cell.addEventListener( 'mouseout', function () {

          cell.style.background = 'white'

        }, false )

        row.appendChild( cell )

      }

    }

}
  
makeRows();

function onMouseUp () {
    makeRows()
}