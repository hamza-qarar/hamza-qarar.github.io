
// Create the observer
const observer = new IntersectionObserver(entries => {
      // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animation');
    }
  });
}/*, { threshold: 0.2 }*/);
  
  // Tell the observer which elements to track
  observer.observe(document.querySelector('#projekttitel'));
  observer.observe(document.querySelector('.boxen'));
  observer.observe(document.querySelector('#vitatitel'));
  observer.observe(document.querySelector('#vitabox'));



  /*window.onscroll = function() { scrollFunction(); };

  function scrollFunction() {
      var header = document.getElementById("header");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          // Box-Shadow hinzufügen
          header.style.boxShadow = "inset 20px 0 80px hsl(182, 76.20%, 32.90%), inset -20px 0 80px hsl(180, 100%, 50%), inset 20px 0 300px hsl(182, 76.20%, 32.90%), inset -20px 0 300px rgb(117, 99, 255), -10px 0 10px hsl(182, 76.20%, 32.90%), 10px 0 10px hsl(180, 100%, 50%) !important";
          // Hintergrundbild ändern
          header.style.background = "linear-gradient(180deg, hsl(182, 78.20%, 44.90%), hsl(210, 59.00%, 44.90%))  !important"; // Pfad zum neuen Bild
      } else {
          // Box-Shadow entfernen
          header.style.boxShadow = "inset 20px 0 80px rgb(149, 1, 255), inset -20px 0 80px hsl(180, 100%, 50%), inset 20px 0 300px rgb(144, 0, 255), inset -20px 0 300px rgb(117, 99, 255), -10px 0 10px rgb(149, 0, 255), 10px 0 10px hsl(180, 100%, 50%) !important";
          // Ursprüngliches Hintergrundbild wiederherstellen
          header.style.background = "linear-gradient(180deg, hsl(255, 80%, 51%), hsl(255, 59%, 45%))  !important"; // Pfad zum ursprünglichen Bild
      }
  }*/

/*
// Create the observer
const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
entries.forEach(entry => {
  // If the element is visible
  if (entry.isIntersecting) {
    // Add the animation class
    entry.target.classList.add('leuchten');
  }
});
}, { threshold: 0.2 });

// Tell the observer which elements to track
observer.observe(document.querySelector('#header'));*/


document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      const nav = document.getElementById('header');
      if (window.scrollY > 300) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      const nav = document.getElementById('header');
      if (window.scrollY > 1200) {
        nav.classList.add('scrolled2');
      } else {
        nav.classList.remove('scrolled2');
      }
    });
  });