// get reference to sliders

const x_slider = document.getElementById( 'x' )
const y_slider = document.getElementById( 'y' )

// listen to slider events

function makeRows() {

  // remove existing table
  let table = document.getElementById( 'table' )

  if ( table ) {
    table.remove()
  }

  // create new table
  table = document.createElement( 'table' )
  table.id = 'table'
  document.body.appendChild( table )

  // get slider values
  const columns = x_slider.valueAsNumber
  const rows = y_slider.valueAsNumber

  // update labels
  document.getElementById( 'x_label' ).innerHTML = 'X: ' + columns
  document.getElementById( 'y_label' ).innerHTML = 'Y: ' + rows

  // make table items
  for ( i = 0; i < rows; i ++ ) {

    // create a table row
    const row = document.createElement( 'tr' )
    table.appendChild( row )

    for ( j = 0; j < columns; j ++ ) {

      // create a table cell
      const cell = document.createElement( 'td' )
      cell.innerText = i + ',' + j

      // uncomment to generate a random background color for cell on mouseover
      // const color = Math.floor( Math.random() * 16777215 ).toString( 16 )

      // cell.addEventListener( 'mouseover', function () {
      //   cell.style.background = '#' + color
      // }, false )

      // cell.addEventListener( 'mouseout', function () {
      //   cell.style.background = 'white'
      // }, false )

      row.appendChild( cell )

    }
  }
}

// run once to initialise table
makeRows();