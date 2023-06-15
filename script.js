var videoElement = document.getElementById("video-background")
var sourceElement = document.getElementById("video-source")

var videoIndex = 1
var videoPaths = [
  "./assets/video-background.mp4",
  "./assets/video-background2.mp4",
]

function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  videoIndex = (videoIndex + 1) % videoPaths.length
  sourceElement.src = videoPaths[videoIndex]
  videoElement.load()
}
videoElement.addEventListener("ended", switchVideo)