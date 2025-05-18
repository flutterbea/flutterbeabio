function showSection(id) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Открыть первую секцию по умолчанию
document.addEventListener("DOMContentLoaded", () => {
  showSection('about');
});
