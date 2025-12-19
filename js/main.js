document.getElementById('year').textContent = new Date().getFullYear();

// Smooth fade-in
const sections = document.querySelectorAll('.section, .hero');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(40px)';
  sec.style.transition = 'all 1s ease';
  observer.observe(sec);
});
