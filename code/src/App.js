import React from 'react'
import data from './data.json'
import Album from './components/Album'


export const App = () => {

// AN ARRAY WITH ALL ALBUMS
const albumArray = data.albums.items
// console.log(albumArray)

// AN ARRAY WITH ARTISTS
const allArtists = albumArray.map(album => album.artists)
// console.log(allArtists)

// NAME OF ARTISTS
const nameOfArtists = allArtists.map(artist => artist.map((item) => item.name))
// console.log(nameOfArtists)

// URLS TO ARTISTS
const artistURL = allArtists.map(artist => artist.map((item) => item.external_urls.spotify))
// console.log(artistURL)



  return (
    <>
    <div className="main">
      <div className="headerContainer">
        <h1 className="heading">New albums & singles</h1>
      </div>
      <div className="albumWrapper">

        {albumArray.map((album) => {
              return (
              <Album 
              image={album.images[0].url} 
              title={album.name} 
              hrefAlbum={album.external_urls.spotify} 
              artist={album.artists.map((item, index) => <a>{item.name}</a>)}
              hrefArtist={album.artists.map((item) => item.external_urls.spotify)}
              key={album.name}/>
             )
          })
        }
      </div>
    </div>
    </>
  )
}


