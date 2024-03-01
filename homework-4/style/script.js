let artworks = document.querySelectorAll ('.artwork');

document.querySelectorAll('.artwork').forEach(artwork => {
  artwork.addEventListener('click', function() {
    const infoDiv = this.querySelector('.artwork-info'); 
    const coverDiv = this.querySelector('.artwork-cover');
    infoDiv.classList.toggle('is-visible');
    coverDiv.style.opacity = coverDiv.style.opacity === '0' ? '1' : '0';
  });
});
