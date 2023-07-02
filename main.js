// Menentukan elemen-elemen yang memerlukan tindakan JavaScript
const projectImages = document.querySelectorAll('.project-image');

// Menambahkan event listener untuk setiap gambar proyek
projectImages.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('has-text');
  });
});
