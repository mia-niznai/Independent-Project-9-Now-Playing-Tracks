// Task 1
// When opening the webpage, the first track in the tracklist should be displayed.

// Task 2
// When the user clicks the divs with the class prev-track or prev-track, the webpage’s background changes to the previous or next color respectively, from the color array of [“red”, “green”, “blue”] by adding to the body element from classes player-bg1 or player-bg2 or player-bg3.
// Ex: Because the web page starts with the green background, when pressing the next button the body's background is set to blue by adding the class player-bg3 to the body element.

//When the page first loads the innerText of the div with the class 'track-name' is 'Night Owl'
//When the page first loads the innerText of the div with the class 'track-artist' is 'Broke For Free'

//When pressing the button with the class 'next-track' the body of the page should have the class 'player-bg3'
//When pressing the button with the class 'next-track' twice the body of the page should have the class 'player-bg1'

//When pressing the button with the class 'prev-track' twice the body of the page should have the class 'player-bg3'
//When pressing the button with the class 'prev-track' twice followd by pressing the button with the class 'next-track' the body of the page should have the class 'player-bg1'

const nowPlaying = document.querySelector('.now-playing');
const trackArt = document.querySelector('.track-art');
const trackName = document.querySelector('.track-name');
const trackArtist = document.querySelector('.track-artist');

const playPauseButton = document.querySelector('.playpause-track');
const nextButton = document.querySelector('.next-track');
const prevButton = document.querySelector('.prev-track');

const seekSlider = document.querySelector('.seek_slider');
const volumeSlider = document.querySelector('.volume_slider');
const currentTimeElement = document.querySelector('.current-time');
const totalDurationElement = document.querySelector('.total-duration');

let trackIndex = 0;
let isPlaying = false;

const currentTrack = document.createElement('audio');

const tracks = [
	{
		name: 'Night Owl',
		artist: 'Broke For Free',
		image: 'Image URL',
		path: 'Night_Owl.mp3'
	},
	{
		name: 'Enthusiast',
		artist: 'Tours',
		image: 'Image URL',
		path: 'Enthusiast.mp3'
	},
	{
		name: 'Shipping Lanes',
		artist: 'Chad Crouch',
		image: 'Image URL',
		path: 'Shipping_Lanes.mp3',
	},
];

//Your code comes below this line

//Task 1
trackName.textContent = tracks[0].name;
trackArtist.textContent = tracks[0].artist;

//Task 2

const body = document.querySelector('body');
const prevTrackBtn = document.querySelector('.prev-track');
const nextTrackBtn = document.querySelector('.next-track');
const colorArray = ["player-bg1", "player-bg2", "player-bg3"];
let currentColorIndex = 1; // starting index is 1 to match "green"

prevTrackBtn.addEventListener('click', () => {
  // remove current color class
  body.classList.remove(colorArray[currentColorIndex]);
  // update current color index and add previous color class
  currentColorIndex = currentColorIndex > 0 ? currentColorIndex - 1 : colorArray.length - 1;
  body.classList.add(colorArray[currentColorIndex]);
});

nextTrackBtn.addEventListener('click', () => {
  // remove current color class
  body.classList.remove(colorArray[currentColorIndex]);
  // update current color index and add next color class
  currentColorIndex = currentColorIndex < colorArray.length - 1 ? currentColorIndex + 1 : 0;
  body.classList.add(colorArray[currentColorIndex]);
});

//Your code comes above this line
