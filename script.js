function showPage(pageId) {
  // Pokazanie sekcji
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');

  // Podmiana ikon w menu (PNG w tym samym folderze co index.html)
  document.querySelectorAll('.bottom-nav button').forEach(btn => {
    const btnPage = btn.dataset.page;
    const img = btn.querySelector('img');
    if (btnPage === pageId) {
      img.src = `${btnPage}-active.png`; // aktywna ikona w fioletowym kole
    } else {
      img.src = `${btnPage}-white.png`;  // ikona biała
    }
  });
}

// Inicjalizacja przy starcie strony
document.addEventListener('DOMContentLoaded', () => {
  showPage('announcements'); // domyślnie otwiera stronę Ogłoszenia
});
