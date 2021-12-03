let boton = document.querySelector('.first');

boton.addEventListener('click', () => {
	let etiquetaAudio = document.createElement('audio');
	etiquetaAudio.setAttribute('src', './audio/sonidomate.mp3');
	etiquetaAudio.play();
});
