/*document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                return;
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.2 });

    const allAnimatedElements = document.querySelectorAll('.animation');

    allAnimatedElements.forEach((element) => observer.observe(element));
})*/


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