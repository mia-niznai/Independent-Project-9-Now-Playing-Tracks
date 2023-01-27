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



//Your code comes above this line
