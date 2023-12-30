console.log('localStorage', window.localStorage)

const isMusicPlaying = window.localStorage.getItem('isMusicPlaying')

const Storage = {
  isMusicPlaying: isMusicPlaying === null || isMusicPlaying === 'true',
  userDeck: {},
}
