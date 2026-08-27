function scaleToFit() {
  const scale = window.innerWidth / 1920;
  document.body.style.transform = `scale(${scale})`;
  document.body.style.height = (window.innerHeight / scale) + 'px';
}

scaleToFit();
window.addEventListener('resize', scaleToFit);