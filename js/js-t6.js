document.addEventListener("scroll", () => {
  console.log("JavaScript loaded!");

  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const overlay = document.querySelector(".overlay");
  const baggrund = document.getElementById("baggrund");

  // Scroll-effekt for billederne
  const maxScroll = windowHeight; // Hvor langt billederne skal flytte
  const bottomOffset = Math.max(0, maxScroll - scrollPosition);
  overlay.style.bottom = `${bottomOffset}px`;

  // Defokusering af baggrunden
  const blurAmount = Math.min(10, scrollPosition / 20); // Maks blur på 10px
  baggrund.style.filter = `blur(${blurAmount}px)`;
});
