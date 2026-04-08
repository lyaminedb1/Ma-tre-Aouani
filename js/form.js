document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    let valid = true;
    form.querySelectorAll('[required]').forEach(f => { f.style.borderColor = ''; if (!f.value.trim()) { f.style.borderColor = 'var(--gold)'; valid = false; } });
    if (!valid) return;
    btn.textContent = 'Envoi en cours…'; btn.disabled = true;
    setTimeout(() => { btn.textContent = 'Message envoyé ✓'; btn.style.background = '#2E7D4A'; form.reset(); setTimeout(() => { btn.textContent = 'Envoyer ma demande'; btn.style.background = ''; btn.disabled = false; }, 5000); }, 1200);
  });
});
