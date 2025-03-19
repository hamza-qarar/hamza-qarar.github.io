
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



  