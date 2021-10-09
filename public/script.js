const createList = function( e ) {
  e.preventDefault()

  const fname = document.querySelector( '#fname' ),
      fdescription = document.querySelector( '#fdescription' ),
      username = document.querySelector( '#usernameInList' ),
      json = { listName: fname.value, description: fdescription.value, username: username.innerHTML },
      body = JSON.stringify( json )

  fetch( '/create-list', {
    method:'POST',
    body 
  })
  .then( function( response ) {
    return response.json()
  })
  .then( function( json ) {
    console.log(json)

    // reloadTable(json)
    newListForm.reset()
  })

  return false
}

window.onload = function() {
  const createListButton = document.querySelector( '#create-list' )
  createListButton.onclick = createList
}

const newListForm = document.querySelector( '#newListForm' )