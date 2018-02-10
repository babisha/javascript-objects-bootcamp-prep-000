var playlist = { artist: 'Justin Bieber' , song: 'baby'}

function updatePlaylist(object, Justin, baby) {
  object[Justin] = baby

  return object  
}

function removeFromPlaylist(playlister, artistName) {
  delete playlister.artistName
  
  return playlister
}