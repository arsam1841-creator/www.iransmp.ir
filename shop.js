document.getElementById('applyCode').addEventListener('click', function() {
  const code = document.getElementById('promoCode').value.trim();
  const discountPercent = 5; // ۵٪ تخفیف
  if(code === "mr_mrm!!") {
    const cards = document.querySelectorAll('.rank-card');
    cards.forEach(card => {
      const originalPrice = parseInt(card.dataset.price);
      const discountedPrice = Math.floor(originalPrice * (1 - discountPercent / 100));
      card.querySelector('.price').textContent = discountedPrice.toLocaleString() + " تومان";
    });
    alert("کد تخفیف اعمال شد: ۵٪ کاهش قیمت!");
  } else {
    alert("کد تخفیف نامعتبر است.");
  }
});
