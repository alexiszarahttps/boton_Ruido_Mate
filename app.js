let boton = document.querySelector('.reproductor');

boton.addEventListener('click', () => {
	let etiquetaAudio = document.createElement('audio');
	etiquetaAudio.setAttribute('src', './audio/sonidomate.mp3');
	etiquetaAudio.play();
});
