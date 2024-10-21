window.addEventListener('scroll', () => {
  const texts = document.querySelectorAll('.scrolling-text');
  const triangle = document.getElementById('triangle');
  const screenHeight = window.innerHeight;
  const halfwayPoint = screenHeight / 2;

  const containerTop = triangle.parentElement.getBoundingClientRect().top;
  const lastText = texts[texts.length - 1];
  const lastTextPosition = lastText.getBoundingClientRect().top;

  // Handle triangle alignment based on scroll position
  if (containerTop > halfwayPoint) {
    triangle.classList.remove('center', 'bottom', 'top');
  } else if (lastTextPosition > halfwayPoint) {
    triangle.classList.remove('bottom', 'top');
    triangle.classList.add('center');
  } else {
    triangle.classList.remove('center', 'top');
    triangle.classList.add('bottom');
  }

  // Align text based on its position relative to the halfway point
  texts.forEach(text => {
    const textPosition = text.getBoundingClientRect().top;
    if (textPosition > halfwayPoint) {
      text.classList.add('align-left');
      text.classList.remove('align-right');
    } else {
      text.classList.add('align-right');
      text.classList.remove('align-left');
    }
  });
});
