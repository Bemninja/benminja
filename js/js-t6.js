function playVideo() {
  const container = document.querySelector(".video-container");
  const img = container.querySelector(".foto");
  const video = container.querySelector(".video");

  img.style.display = "none"; // Hide the image
  video.style.display = "block"; // Show the video
  video.play(); // Start playing the video
}
