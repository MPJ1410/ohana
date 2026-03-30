// ===== PRODUCT DATA =====
const products = [
  { id:1, category:'tortas', img:'images/cake-unicorn.png', name:'Torta Unicornio', badge:'Tortas', desc:'Diseño mágico con colores pastel, cuerno dorado y flores de fondant. Perfecta para cumpleaños de princesas.', price:'S/120.00', theme:'🦄 Temática Unicornio' },
  { id:2, category:'cupcakes', img:'images/cupcakes-bouquet.png', name:'Bouquet de Cupcakes', badge:'Cupcakes', desc:'Arreglo de 6 o 12 cupcakes decorados como un ramo de flores. Ideal para regalar en cualquier ocasión.', price:'S/55.00', theme:'🌸 Bouquet Floral' },
  { id:3, category:'bento', img:'images/bento-cake.png', name:'Bento Cake', badge:'Bento', desc:'Mini torta individual en cajita especial con mensaje personalizado. Tendencia coreana perfecta para detalles únicos.', price:'S/35.00', theme:'💌 Mensaje Personalizado' },
  { id:4, category:'tortas', img:'images/wedding-cake.png', name:'Torta de Bodas', badge:'Tortas', desc:'Tortas elegantes de 2 o 3 pisos con flores y acabados en fondant premium. Tu día especial merece lo mejor.', price:'S/250.00', theme:'💍 Bodas & Aniversarios' },
  { id:5, category:'tortas', img:'images/baby-shower-cake.png', name:'Baby Shower', badge:'Tortas', desc:'Diseños tiernos con animalitos en colores suaves. Para dar la bienvenida al nuevo bebé.', price:'S/110.00', theme:'🐣 Baby Shower' },
  { id:6, category:'tortas', img:'images/mermaid-cake.png', name:'Torta Sirenita', badge:'Tortas', desc:'Cola de sirena, escamas oceánicas y decoraciones marinas. Colores teal y morado que enamorarán.', price:'S/130.00', theme:'🌊 Temática Marina' },
  { id:7, category:'especiales', img:'images/valentine-box.png', name:'Caja San Valentín', badge:'Especiales', desc:'Caja temática con cupcakes corazón, chocolates y detalles personalizados. La forma perfecta de decir "te amo".', price:'S/65.00', theme:'❤️ San Valentín' },
  { id:8, category:'cupcakes', img:'images/butterfly-cupcakes.png', name:'Cupcakes Mariposas', badge:'Cupcakes', desc:'Cupcakes decorados con mariposas comestibles, flores y glitter. Presentación elegante en caja.', price:'S/45.00', theme:'🌸 Mariposas & Flores' },
  { id:9, category:'especiales', img:'images/quinceanera-cake.png', name:'Quinceaños', badge:'Especiales', desc:'Tortas de 3 pisos con corona, flores y nombre en letras doradas. Diseño elegante para el momento más especial.', price:'S/300.00', theme:'👑 Quinceaños' }
];

// ===== GALLERY DATA =====
const galleryItems = [
  { img:'images/cake-unicorn.png', label:'Torta Unicornio', span:'span-2' },
  { img:'images/cupcakes-bouquet.png', label:'Cupcakes artesanales', span:'' },
  { img:'images/bento-cake.png', label:'Bento cake personalizado', span:'span-row' },
  { img:'images/mermaid-cake.png', label:'Torta temática sirenita', span:'' },
  { img:'images/valentine-box.png', label:'Caja San Valentín', span:'' },
  { img:'images/wedding-cake.png', label:'Torta de bodas', span:'span-2' },
  { img:'images/baby-shower-cake.png', label:'Torta Baby Shower', span:'' },
  { img:'images/quinceanera-cake.png', label:'Torta Quinceaños', span:'' },
];

// ===== TESTIMONIALS DATA =====
const testimonials = [
  { stars:'★★★★★', text:'"La torta de cumpleaños de mi hija quedó HERMOSA. El diseño de unicornio superó todas mis expectativas. ¡Además estaba deliciosa! 100% recomendadas."', avatar:'👩', name:'Carla M.', event:'Cumpleaños infantil' },
  { stars:'★★★★★', text:'"Pedí un bouquet de cupcakes para mi mamá y lloró de la emoción. La presentación era preciosa y el sabor increíble. OHANA hace magia con cada detalle."', avatar:'👨', name:'Diego P.', event:'Día de la Madre' },
  { stars:'★★★★★', text:'"Mi torta de bodas fue un sueño hecho realidad. María y Roxana entendieron exactamente lo que quería. Todos los invitados preguntaron dónde la había pedido."', avatar:'👰', name:'Lucía & Carlos', event:'Boda' },
  { stars:'★★★★★', text:'"Los bento cakes son el mejor regalo que existe. Pedí 10 para mis compañeras de trabajo y todas quedaron encantadas. Super prácticos y hermosos."', avatar:'👩‍💼', name:'Fernanda R.', event:'Detalle corporativo' },
  { stars:'★★★★★', text:'"Para el baby shower de mi hermana pedimos una torta de jirafita bebé y cupcakes a juego. ¡Todo perfecto! La atención por WhatsApp fue rapidísima."', avatar:'🤰', name:'Valeria G.', event:'Baby Shower' },
];

// ===== FAQ DATA =====
const faqs = [
  { q:'¿Con cuánta anticipación debo hacer mi pedido?', a:'Recomendamos al menos 3 a 5 días de anticipación para tortas personalizadas. Para pedidos grandes (bodas, quinceaños), mínimo 2 semanas. Para bento cakes y cupcakes simples, 2 días es suficiente.' },
  { q:'¿Hacen envíos a domicilio?', a:'¡Sí! Realizamos envíos a todo Lima metropolitano. El costo de delivery varía según la zona. Consulta con nosotras por WhatsApp para más detalles.' },
  { q:'¿Puedo elegir el sabor de mi torta?', a:'¡Por supuesto! Tenemos variedad de sabores: vainilla, chocolate, red velvet, tres leches, lúcuma, y más. También hacemos combinaciones especiales.' },
  { q:'¿Cómo es el proceso de pago?', a:'Trabajamos con un adelanto del 50% para confirmar tu pedido. El saldo restante se paga contra entrega. Aceptamos transferencias, Yape y Plin.' },
  { q:'¿Puedo enviar una foto del diseño que quiero?', a:'¡Claro! Puedes enviarnos fotos de referencia por WhatsApp y nosotras adaptamos el diseño según tus gustos y presupuesto. Cada torta es única.' },
  { q:'¿Tienen opciones sin gluten o veganas?', a:'Actualmente ofrecemos algunas opciones adaptadas. Consulta disponibilidad por WhatsApp y con gusto te asesoramos con las opciones disponibles.' },
];

// ===== RENDER PRODUCTS =====
function renderProducts(filter = 'all') {
  const grid = document.getElementById('catalogGrid');
  grid.innerHTML = '';
  const list = filter === 'all' ? products : products.filter(p => p.category === filter);
  list.forEach((p, i) => {
    const waMsg = encodeURIComponent(`Hola OHANA! Me interesa: *${p.name}* 🎂\nMe gustaría consultar precio y disponibilidad.`);
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <span class="card-badge">${p.badge}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="card-footer">
          <span class="card-price">${p.price}</span>
          <a href="https://wa.me/51936402153?text=${waMsg}" target="_blank" class="card-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Consultar
          </a>
        </div>
      </div>`;
    grid.appendChild(card);
  });
  setTimeout(() => grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')), 50);
}

// ===== RENDER GALLERY =====
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  galleryItems.forEach(item => {
    const div = document.createElement('div');
    div.className = `gallery-item ${item.span} reveal`;
    div.innerHTML = `
      <img src="${item.img}" alt="${item.label}" loading="lazy" />
      <div class="gallery-overlay"><span>${item.label}</span></div>`;
    grid.appendChild(div);
  });
}

// ===== RENDER TESTIMONIALS =====
function renderTestimonials() {
  const slider = document.getElementById('testimonialsSlider');
  const dots = document.getElementById('testimonialDots');
  testimonials.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <div class="tc-stars">${t.stars}</div>
      <div class="tc-text">${t.text}</div>
      <div class="tc-author">
        <div class="tc-avatar">${t.avatar}</div>
        <div><div class="tc-name">${t.name}</div><div class="tc-event">${t.event}</div></div>
      </div>`;
    slider.appendChild(card);
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      slider.scrollTo({ left: card.offsetLeft - slider.offsetLeft - 20, behavior: 'smooth' });
    });
    dots.appendChild(dot);
  });
  slider.addEventListener('scroll', () => {
    const scrollLeft = slider.scrollLeft;
    const cards = slider.querySelectorAll('.testimonial-card');
    let activeIdx = 0;
    cards.forEach((c, i) => {
      if (c.offsetLeft - slider.offsetLeft <= scrollLeft + slider.clientWidth / 2) activeIdx = i;
    });
    dots.querySelectorAll('span').forEach((d, i) => d.classList.toggle('active', i === activeIdx));
  });
}

// ===== RENDER FAQ =====
function renderFAQ() {
  const list = document.getElementById('faqList');
  faqs.forEach(f => {
    const item = document.createElement('div');
    item.className = 'faq-item reveal';
    item.innerHTML = `
      <button class="faq-question">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>`;
    item.querySelector('.faq-question').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      list.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
    list.appendChild(item);
  });
}

// ===== FILTER BUTTONS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });

function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
  scrollTopBtn.classList.toggle('visible', y > 500);

  // Active nav link highlight
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (y >= sectionTop) current = section.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ===== SCROLL TO TOP =====
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== MOBILE NAV =====
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre   = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const evento   = document.getElementById('evento').value;
  const producto = document.getElementById('producto').value;
  const mensaje  = document.getElementById('mensaje').value.trim();
  const text = `Hola OHANA! 🎂\n\n*Nombre:* ${nombre}\n*Teléfono:* ${telefono || 'No indicado'}\n*Evento:* ${evento || 'No especificado'}\n*Producto:* ${producto || 'No especificado'}\n*Pedido:* ${mensaje || 'Sin descripción'}\n\n¡Me gustaría hacer un pedido! 🌸`;
  const waUrl = `https://wa.me/51936402153?text=${encodeURIComponent(text)}`;
  const btn = document.getElementById('submitBtn');
  btn.textContent = '¡Abriendo WhatsApp...';
  btn.style.background = '#128c7e';
  setTimeout(() => {
    window.open(waUrl, '_blank');
    e.target.reset();
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Enviar por WhatsApp`;
    btn.style.background = '';
  }, 800);
});

// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 1500);
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderGallery();
  renderTestimonials();
  renderFAQ();

  setTimeout(() => {
    observeReveal();
    document.querySelectorAll('.step-card, .value-card, .about-image, .about-text, .gallery-item, .faq-item').forEach(el => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      observer.observe(el);
    });
  }, 100);
});
