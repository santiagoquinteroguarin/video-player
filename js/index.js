// ? Obtener Video
const $video = document.querySelector('#video');

// ? Botones para acciones
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

// ? Obtner progreso
const $progress = document.querySelector('#progress');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);

// ? Obtener los metadatos, en este caso la duración del video
$video.addEventListener('loadedmetadata', handleLoaded);
// ? obtener el tiempo del video en tiempo real
$video.addEventListener('timeupdate', handleUpdate);
// ? para actualizar el tiempo de la barra
$progress.addEventListener('input', handleInput);

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

function handleBackward() {
    $video.currentTime -= 10;
}

function handleForward() {
    $video.currentTime += 10;
}

function handleLoaded() {
    $progress.max = $video.duration;
}

function handleUpdate() {
    $progress.value = $video.currentTime;
}

function handleInput() {
    $video.currentTime = $progress.value;
}