const form = document.getElementById('contact-form');
const messageEl = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === '' || email === '' || message === '') {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Lütfen tüm alanları doldurun.';
    return;
  }

  if (!validateEmail(email)) {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Geçerli bir email adresi girin.';
    return;
  }

  // Burada gerçek form gönderimi için AJAX veya backend kodu yazılabilir.
  // Şimdilik sadece başarı mesajı gösteriyoruz.

  messageEl.style.color = 'green';
  messageEl.textContent = 'Mesajınız başarıyla gönderildi!';

  form.reset();
});

function validateEmail(email) {
  // Basit email doğrulama regex’i
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
