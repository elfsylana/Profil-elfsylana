const contentMap = {
  tentang: `<h3 class="fade">Tentang Saya</h3><p class="fade">Saya suka mie ayam</p>`,
  kontak: `
    <div class="gray-box fade">
    <h3>Hubungi Saya</h3>
    <a href="https://wa.me/6287818735150" target="_blank" class="contact-btn gray">
      <img src="https://img.icons8.com/ios-filled/24/ffffff/whatsapp.png"/> WhatsApp
    </a>
    <a href="https://instagram.com/elfsylana" target="_blank" class="contact-btn gray">
      <img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"/> Instagram
    </a>
    <a href="https://tiktok.com/@Lanaxonto" target="_blank" class="contact-btn gray">
      <img src="https://img.icons8.com/ios-filled/24/ffffff/tiktok--v1.png"/> TikTok
    </a>
    <a href="https://github.com/yourusername" target="_blank" class="contact-btn gray">
      <img src="https://img.icons8.com/ios-filled/24/ffffff/github.png"/> GitHub
    </a>
  </div>`,
  projek: `<h3 class="fade">Projek</h3><ul class="fade"><li>Portfolio 1</li><li>Portfolio 2</li></ul>`,
  album: `
    <h3 class="fade">Album</h3>
    <div class="carousel fade">
      <img src="https://via.placeholder.com/300x200?text=Foto+1" class="carousel-img" />
      <img src="https://via.placeholder.com/300x200?text=Foto+2" class="carousel-img hidden" />
      <img src="https://via.placeholder.com/300x200?text=Foto+3" class="carousel-img hidden" />
      <div class="carousel-controls">
        <button onclick="prevSlide()">⬅️</button>
        <button onclick="nextSlide()">➡️</button>
      </div>
    </div>`
};

function showContent(section) {
  const display = document.getElementById("displayArea");
  display.classList.remove("fade");
  display.innerHTML = contentMap[section] || "<p>Data tidak ditemukan.</p>";
  setTimeout(() => display.classList.add("fade"), 50);
}

document.getElementById("followBtn").addEventListener("click", function () {
  if (this.innerText === "Follow") {
    this.innerText = "Following";
    this.style.backgroundColor = "#999";
  } else {
    this.innerText = "Follow";
    this.style.backgroundColor = "#0077aa";
  }
});

// Form Kontak
function submitForm(e) {
  e.preventDefault();
  alert("Pesan kamu berhasil dikirim!");
  e.target.reset();
}

// Carousel
let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-img");
  if (!slides.length) return;
  slides.forEach(slide => slide.classList.add("hidden"));
  slides[index].classList.remove("hidden");
}
function prevSlide() {
  const slides = document.querySelectorAll(".carousel-img");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
function nextSlide() {
  const slides = document.querySelectorAll(".carousel-img");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
