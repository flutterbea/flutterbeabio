function showSection(id) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
    if (section.id === id) {
      section.classList.add('active');
      section.classList.add('animated');
    } else {
      section.classList.remove('active');
      section.classList.remove('animated');
    }
  });
}
