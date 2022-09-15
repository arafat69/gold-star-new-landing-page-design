window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
      document.querySelector('.navbar').classList.add('fixed-top', 'shadow-sm');
  } else {
      document.querySelector('.navbar').classList.remove('fixed-top', 'shadow-sm');
  }
});