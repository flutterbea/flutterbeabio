function showSection(id) {
  const contents = document.querySelectorAll('.content');
  contents.forEach(c => c.classList.add('hidden'));

  document.getElementById(id).classList.remove('hidden');
}
