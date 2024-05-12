
const nextBtn = document.getElementById("nextBtn");
const images = document.querySelectorAll(".image");
let currentImageIndex = 0;

document.getElementById('nextBtn').addEventListener('click', function() {
    
    document.body.style.transition = "background-color 2s"; // 2 seconds transition duration
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
    images[currentImageIndex].classList.add("hidden");
			currentImageIndex = (currentImageIndex + 1) % images.length;
			images[currentImageIndex].classList.remove("hidden");
    // Reduce number of sparkles
    const sparkles = document.getElementById('sparkles');
    const sparklesChildren = sparkles.children;
    for (let i = sparklesChildren.length - 1; i >= 0; i--) {
        sparkles.removeChild(sparklesChildren[i]);
    }
    confetti({
        particleCount:  50,
        spread: 100,
        origin: { y: 0.6 }
      });
    for (let i = 0; i < 25; i++) { // Generate half the number of sparkles as before
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.animationDuration = `${Math.random() * 3 + 1}s`;
        sparkles.appendChild(sparkle);
    }
});


function generateHslaColors(saturation, minLightness, alpha, amount) {
    let colors = []
    let huedelta = Math.trunc(360 / amount)
  
    for (let i = 0; i < amount; i++) {
      let hue = i * huedelta
      let lightness = Math.random() * (100 - minLightness) + minLightness
      colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
    }
  
    return colors
  }


document.addEventListener('DOMContentLoaded', function() {
    // Generate sparkles
    const sparkles = document.getElementById('sparkles');
    for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.animationDuration = `${Math.random() * 3 + 1}s`;
        sparkles.appendChild(sparkle);
    }
});