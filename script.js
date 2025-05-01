// Event Handling: Button click
document.getElementById('changeColorBtn').addEventListener('click', () => {
  const text = document.getElementById('colorText');
  text.textContent = "Boom! Color changed! 💥";
  text.style.color = 'crimson';
});

// Hover effect
document.getElementById('colorText').addEventListener('mouseover', () => {
  document.getElementById('colorText').style.fontSize = '1.5rem';
});
document.getElementById('colorText').addEventListener('mouseout', () => {
  document.getElementById('colorText').style.fontSize = '1rem';
});

// Keypress detection
document.addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Double-click bonus action
document.getElementById('galleryImage').addEventListener('dblclick', () => {
  alert('🎉 You discovered a secret double-click!');
});

// Slideshow
const images = [
  'https://via.placeholder.com/300?text=1',
  'https://via.placeholder.com/300?text=2',
  'https://via.placeholder.com/300?text=3'
];
let index = 0;
function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById('galleryImage').src = images[index];
}

// Accordion
function toggleAccordion() {
  const content = document.getElementById('accordionContent');
  content.classList.toggle('hidden');
}

// Form validation
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const feedback = document.getElementById('formFeedback');

  if (!email.value.includes('@')) {
    feedback.textContent = 'Please enter a valid email.';
    feedback.style.color = 'red';
  } else if (password.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = '✅ Form submitted successfully!';
    feedback.style.color = 'green';
  }
});
