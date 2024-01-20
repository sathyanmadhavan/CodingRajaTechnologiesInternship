
let songs = [
  {
    name: "6 Shots - NEFFEX",
    artist: "NEFFEX",
    img: "img1",
    audio: "music1"
  },
  {
    name: "No Mercy - TrackTribe",
    artist: "TrackTribe",
    img: "img2",
    audio: "music2"
  },
  {
    name: "Slipping Away - Dyalla",
    artist: "Dyalla",
    img: "img3",
    audio: "music3"
  },
  {
    name: "Desert Planet - Quincas",
    artist: "Quincas",
    img: "img4",
    audio: "music4"
  },
  {
    name: "Sakkarakati",
    artist: "Aadhi",
    img: "img4",
    audio: "music5"
  },
  {
    name: "Im on my way",
    artist: "Alan walker",
    audio: "music6"
  }
]
// Add the following code to handle playlist functionality
function showPlaylist() {
  const playlistContainer = document.getElementById('playlistContainer');
  playlistContainer.style.display = playlistContainer.style.display === 'none' ? 'block' : 'none';
}

function addSong() {
  const newSongInput = document.getElementById('newSong');
  const songUrl = newSongInput.value.trim();

  if (songUrl !== '') {
    const playlist = document.getElementById('playlist');
    const newSongItem = document.createElement('li');
    newSongItem.textContent = songUrl;
    playlist.appendChild(newSongItem);

    // Clear the input field
    newSongInput.value = '';
  }
}


