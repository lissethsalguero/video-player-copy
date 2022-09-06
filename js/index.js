
const $play = document.querySelector('#play') //paso 1
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)//Paso 3
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

const $video = document.querySelector('#videoId')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

const $progress = document.querySelector('#progress')
$progress.addEventListener('input', handleInput)

function handlePlay() {//Paso 2
    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

function handleBackward() {
    $video.currentTime -= 10
}

function handleForward() {
    $video.currentTime += 10
}

function handleLoaded() {
    $progress.max = $video.duration
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

function handleInput() {
    $video.currentTime = $progress.value
}