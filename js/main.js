/**
 * Clean Quality Fragrâncias - High Conversion Interactive Logic
 * Developed for maximum engagement, accessibility and conversion.
 */

// Product Data Catalog - 4 Fragrâncias Exclusivas + Combos
const PRODUCTS = {
  'bamboo': {
    id: 'bamboo',
    name: 'Difusor Bamboo 250ml',
    tag: '🍃 Frescor, Natureza & Sofisticação',
    price: 89.90,
    oldPrice: 119.90,
    image: 'assets/images/card_bamboo.jpg',
    realImage: 'assets/images/real_product_bamboo.jpg',
    description: 'Fragrância fresca e envolvente inspirada na natureza. Presença marcante e equilibrada. Sabe aquele cheiro de hotel 5 estrelas quando você entra no lobby? Essa é a sensação do Bamboo.'
  },
  'cha-branco': {
    id: 'cha-branco',
    name: 'Difusor Chá Branco 250ml',
    tag: '🌸 Leveza, Elegância & Tranquilidade',
    price: 89.90,
    oldPrice: 119.90,
    image: 'assets/images/card_cha_branco.jpg',
    description: 'Fragrância delicada e sofisticada, com sensação limpa, fresca e confortável. Transmite cuidado e equilíbrio sem dominar o ambiente.'
  },
  'bergamota': {
    id: 'bergamota',
    name: 'Difusor Bergamota 250ml',
    tag: '🍋 Frescor, Energia & Personalidade',
    price: 89.90,
    oldPrice: 119.90,
    image: 'assets/images/card_bergamota.jpg',
    description: 'Fragrância cítrica, vibrante e elegante. Traz uma sensação refrescante e iluminada ao ambiente, perfeita para quem busca energia e sofisticação.'
  },
  'elegance': {
    id: 'elegance',
    name: 'Difusor Elegance 250ml',
    tag: '✨ Sofisticação, Aconchego & Exclusividade',
    price: 89.90,
    oldPrice: 119.90,
    image: 'assets/images/card_elegance.jpg',
    description: 'Fragrância criada para transmitir a sensação de um ambiente refinado e acolhedor. Notas nobres e envolventes que impressionam com elegância.'
  },
  'combo-duo': {
    id: 'combo-duo',
    name: 'Kit 2 Difusores (Escolha seus 2 Aromas)',
    tag: '👑 2 Unidades • R$ 84,95 cada',
    price: 169.90,
    oldPrice: 239.80,
    image: 'assets/images/catalog_presentation_4.png',
    description: 'Escolha quaisquer 2 fragrâncias exclusivas da Clean Quality (Bamboo, Chá Branco, Bergamota ou Elegance). Embalagem nobre especial para presente.'
  },
  'colecao-4': {
    id: 'colecao-4',
    name: 'Coleção Completa (4 Fragrâncias 250ml)',
    tag: '🔥 4 Unidades • Todos os 4 Aromas',
    price: 299.90,
    oldPrice: 479.60,
    image: 'assets/images/hero_4_fragrancias.png',
    description: 'A experiência sensorial definitiva com a linha completa: Bamboo + Chá Branco + Bergamota + Elegance 250ml com varetas pretas de alta absorção.'
  }
};

// State variables
let currentSelectedProduct = 'bamboo';
let currentQty = 1;

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initFaqAccordion();
  initStickyHeader();
  initSmoothAnchors();
});

/* ==========================================================================
   1. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('drawerClose');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

function openDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const toggleBtn = document.getElementById('mobileToggle');
  if (drawer) drawer.classList.add('open');
  if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const toggleBtn = document.getElementById('mobileToggle');
  if (drawer) drawer.classList.remove('open');
  if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ==========================================================================
   2. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const arrow = item.querySelector('.faq-arrow');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(i => {
        i.classList.remove('active');
        const q = i.querySelector('.faq-question');
        const a = i.querySelector('.faq-arrow');
        if (q) q.setAttribute('aria-expanded', 'false');
        if (a) a.textContent = '+';
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        if (arrow) arrow.textContent = '✕';
      }
    });
  });
}

/* ==========================================================================
   3. STICKY HEADER & ACTIVE LINKS
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header styling on scroll
    if (scrollY > 50) {
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
    } else {
      header.style.boxShadow = 'none';
    }

    // Active Section Detection
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   4. QUICK BUY MODAL LOGIC
   ========================================================================== */
function openQuickBuy(productId = 'bamboo') {
  const modal = document.getElementById('quickBuyModal');
  if (!modal) return;

  currentSelectedProduct = productId;
  currentQty = 1;

  // Set selected radio
  const radio = document.querySelector(`input[name="fragranceSelect"][value="${productId}"]`);
  if (radio) {
    radio.checked = true;
  }

  updateModalSelection(productId);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeQuickBuy() {
  const modal = document.getElementById('quickBuyModal');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Close on background click or ESC key
window.addEventListener('click', (e) => {
  const modal = document.getElementById('quickBuyModal');
  if (e.target === modal) {
    closeQuickBuy();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeQuickBuy();
    closeDrawer();
  }
});

function updateModalSelection(productId) {
  currentSelectedProduct = productId;
  const product = PRODUCTS[productId];
  if (!product) return;

  // Update modal preview
  const imgEl = document.getElementById('modalProductImg');
  const nameEl = document.getElementById('modalProductName');
  const tagEl = document.getElementById('modalProductTag');
  const priceEl = document.getElementById('modalProductPrice');

  if (imgEl) imgEl.src = product.image;
  if (nameEl) nameEl.textContent = product.name;
  if (tagEl) tagEl.textContent = product.tag;
  if (priceEl) priceEl.textContent = formatBRL(product.price);

  // Toggle combo aroma customizer visibility
  const customizer = document.getElementById('comboCustomizer');
  if (customizer) {
    if (productId === 'combo-duo') {
      customizer.style.display = 'block';
    } else {
      customizer.style.display = 'none';
    }
  }

  // Update active radio style
  document.querySelectorAll('.radio-card').forEach(card => {
    card.classList.remove('active');
  });
  const activeLabel = document.getElementById(`label-${productId}`);
  if (activeLabel) activeLabel.classList.add('active');

  calculateTotals();
}

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  const qtyEl = document.getElementById('modalQty');
  if (qtyEl) qtyEl.textContent = currentQty;
  calculateTotals();
}

function calculateTotals() {
  const product = PRODUCTS[currentSelectedProduct];
  if (!product) return;

  const subtotal = product.price * currentQty;

  const subtotalEl = document.getElementById('modalSubtotal');
  const shippingEl = document.getElementById('modalShipping');
  const grandTotalEl = document.getElementById('modalGrandTotal');

  if (subtotalEl) subtotalEl.textContent = formatBRL(subtotal);

  if (shippingEl) {
    shippingEl.textContent = 'Calculado no checkout';
    shippingEl.className = '';
  }

  if (grandTotalEl) grandTotalEl.textContent = formatBRL(subtotal);
}

function formatBRL(val) {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/* ==========================================================================
   5. CHECKOUT ROUTING (PREPARED FOR YAMPI CHECKOUT)
   ========================================================================== */
function proceedToCheckout(type = 'online') {
  const product = PRODUCTS[currentSelectedProduct];
  const total = (product.price * currentQty).toFixed(2).replace('.', ',');

  let aromaDetails = '';
  if (currentSelectedProduct === 'combo-duo') {
    const a1 = document.getElementById('aromaSelect1')?.value || 'Chá Branco';
    const a2 = document.getElementById('aromaSelect2')?.value || 'Bamboo';
    aromaDetails = `\n• Aromas Escolhidos: ${a1} + ${a2}`;
  } else if (currentSelectedProduct === 'colecao-4') {
    aromaDetails = `\n• Coleção Completa: Bamboo + Chá Branco + Bergamota + Elegance`;
  }

  // Checkout URLs mapped to each fragrance and bundle for Yampi
  const checkoutUrls = {
    'bamboo': '#',
    'cha-branco': '#',
    'bergamota': '#',
    'elegance': '#',
    'combo-duo': '#',
    'colecao-4': '#'
  };

  const targetUrl = checkoutUrls[currentSelectedProduct] || '#';

  if (targetUrl !== '#') {
    window.location.href = targetUrl;
  } else {
    // Confirmation feedback showing chosen aromas and totals
    alert(
      `🛒 Redirecionando para o Checkout Seguro...\n\n` +
      `Item: ${product.name}${aromaDetails}\n` +
      `Quantidade: ${currentQty}\n` +
      `Subtotal: R$ ${total}\n\n` +
      `Pronto para integrar ao checkout transparente da Yampi!`
    );
  }
}


