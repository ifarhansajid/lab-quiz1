// Navigation logic (Single Page Application switching)
function showPage(pageId) {
  // Hide all sections
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => section.classList.remove('active'));

  // Deactivate all nav links
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => link.classList.remove('active'));

  // Show selected section
  const targetSection = document.getElementById(pageId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Highlight active nav link
  const activeLink = Array.from(links).find(link => 
    link.getAttribute('onclick').includes(pageId)
  );
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dynamic price recalculation based on quantity
function updateTotal() {
  const pricePerUnit = 299;
  const quantityInput = document.getElementById('quantity');
  const totalPriceElement = document.getElementById('totalPrice');
  
  let qty = parseInt(quantityInput.value, 10);
  if (isNaN(qty) || qty < 1) {
    qty = 1;
  }
  
  const total = pricePerUnit * qty;
  totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

// Form submission handler
function handleOrderSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const color = document.getElementById('color').value;
  const quantity = document.getElementById('quantity').value;
  const total = document.getElementById('totalPrice').textContent;

  alert(`Thank you for your order, ${name}!\n\nOrder Details:\nProduct: AURA Sound Pro (${color})\nQuantity: ${quantity}\nTotal Amount: ${total}\n\nA confirmation email has been sent to your inbox.`);
  
  // Reset form fields and navigate back to Home
  document.getElementById('orderForm').reset();
  updateTotal();
  showPage('home');
}