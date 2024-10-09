document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio');
  const enterOverlay = document.querySelector('.enter-overlay');
  const muteButton = document.getElementById('mute-button');
  
  function startAudio() {
      audio.volume = 0.1;
      audio.play();
      enterOverlay.style.display = 'none';
      enterOverlay.removeEventListener('click', startAudio);
  }

  function toggleMute() {
      audio.muted = !audio.muted;
      muteButton.innerHTML = audio.muted ? '<i class="fa fa-volume-off"></i>' : '<i class="fa fa-volume-mute"></i>';
  }

  enterOverlay.style.display = 'block';
  enterOverlay.addEventListener('click', startAudio);
  muteButton.addEventListener('click', toggleMute);
});
