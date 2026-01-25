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

// ===== WSPÓŁZAWODNICTWO – PUNKTY Z ARKUSZA =====
const SHEET_ID = '1__HxGbJbebAaqxI255lH2IMs4fuowxyXpb59EuEkd08';

fetch(`https://opensheet.elk.sh/${SHEET_ID}/Scores`)
  .then(res => res.json())
  .then(data => {
    data.forEach(row => {
      const el = document.querySelector(`.${row.id}`);
      if (el) el.textContent = row.punkty;
    });
  })
  .catch(err => console.error('Błąd ładowania punktów:', err));
