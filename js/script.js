// ─── LOCAL STORAGE SIMULATED SECURE DATABASE ─────────────────────────────────
const DB_VERSION = "2.1";

const INITIAL_READY_PERFUMES = [
  { id: 1, name: "عود المجد النبيل", family: "شرقي", img: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=cover&w=500&q=80", basePrice: 280, notes: "عود ماليزي معتق، عنبر سائل، صندل هندي مدخّن، مسك دافئ، خيوط الزعفران النقي", description: "تركيبة ملوك السلاطين، عطر شرقي آمر مبني على أندر طبقات الأغاروود المدخن بجرعات زعفرانية متوهجة تتحدى الزمن." },
  { id: 2, name: "وردة الغموض الحسي", family: "زهري", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=cover&w=500&q=80", basePrice: 320, notes: "ورد دمشقي مقطر، مطلق الورد البلغاري، المسك الأبيض الشفاف، خشب الأرز النقي، البيرغامو الصقلي", description: "تجسيد دقيق لأناقة الأزهار الغامضة، بتلات الندى تختلط بنعومة فائقة مع نوتات خشبية دافئة وجذابة." },
  { id: 3, name: "عنبر المساء الداكن", family: "شرقي", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=cover&w=500&q=80", basePrice: 290, notes: "عنبر ذهبي نقي، قرون فانيليا مدغشقر، صمغ البنزوين، خشب الصندل الدافئ، أوراق الباتشولي الإندونيسي", description: "عبق الغروب الساحر، طبقات حسية عميقة تمنحك حضوراً دراماتيكياً آسراً ودافئاً في الأمسيات الرسمية." },
  { id: 4, name: "حمضيات الأزرق المطلق", family: "منعش حمضي", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=cover&w=500&q=80", basePrice: 260, notes: "البيرغامو الإيطالي، الليمون الصقلي الأخضر، النوتات البحرية المائية، المسك الأبيض، الفيتيفير الهايتي", description: "انفجار فوري من الحيوية والمتعة المتناهية، يحاكي هواء البحر المتوسط المالح الممتزج مع بساتين الفاكهة." },
  { id: 5, name: "خشب الغابات المقدسة", family: "خشبي", img: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=cover&w=500&q=80", basePrice: 310, notes: "خشب الأرز من أطلس، خشب الغاياك الدخاني، الجلود المدبوغة، الفيتيفير الترابي، طحلب السنديان الداكن", description: "رحلة تأملية عميقة في غابات قديمة غامضة، رائحة تمنح الطمأنينة والوقار بعبق دخاني وجلدي مهيب." }
];

const INITIAL_INGREDIENTS = [
  { id: "oud", name: "زيت العود الكمبودي", pricePerMl: 8.5, family: "راتنجي عميق" },
  { id: "rose", name: "مطلق الورد الدمشقي", pricePerMl: 6.0, family: "زهري مكثف" },
  { id: "sandalwood", name: "خشب الصندل النقي", pricePerMl: 5.5, family: "خشبي كريمي" },
  { id: "jasmine", name: "خلاصة الياسمين الهندي", pricePerMl: 5.0, family: "زهري حسي" },
  { id: "bergamot", name: "بيرغامو صقلي بارد", pricePerMl: 2.5, family: "حمضي فوار" },
  { id: "amber", name: "كريستالات العنبر الذهبي", pricePerMl: 4.5, family: "بلسمي دافئ" },
  { id: "vanilla", name: "مطلق فانيليا مدغشقر", pricePerMl: 4.0, family: "حلو غني" },
  { id: "musk", name: "المسك الأبيض الصافي", pricePerMl: 3.5, family: "مسكي مخملي" },
  { id: "patchouli", name: "الباتشولي الأرضي", pricePerMl: 3.0, family: "ترابي رطب" },
  { id: "saffron", name: "مستخلص الزعفران الأحمر", pricePerMl: 7.0, family: "توابل حارة" },
  { id: "leather", name: "نوتة الجلود الروسية", pricePerMl: 5.0, family: "جلدي حاد" },
  { id: "incense", name: "قطرات اللبان العماني", pricePerMl: 4.5, family: "بخوري مدخن" }
];

const INITIAL_REVIEWS = [
  { username: "خالد بن الوليد", rating: 5, comment: "ثبات عود المجد لا يصدق! يستمر في الملابس لأيام." },
  { username: "سارة المرزوقي", rating: 4, comment: "وردة الغموض عطر ناعم جداً ومميز ومثير للإعجاب." },
  { username: "طارق السعيد", rating: 5, comment: "المزيج المخصص الذي صنعته بنفسي كان تجربة مذهلة وحصلت على مئات المديح." }
];

// Initialize DB Collections
if (!localStorage.getItem("scentara_products")) localStorage.setItem("scentara_products", JSON.stringify(INITIAL_READY_PERFUMES));
if (!localStorage.getItem("scentara_ingredients")) localStorage.setItem("scentara_ingredients", JSON.stringify(INITIAL_INGREDIENTS));
if (!localStorage.getItem("scentara_orders")) localStorage.setItem("scentara_orders", JSON.stringify([]));

const getDB = (key) => JSON.parse(localStorage.getItem(key));
const setDB = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// State Management Variables
let globalCart = JSON.parse(localStorage.getItem("scentara_cart")) || [];
let activeCustomMix = {};
let currentSelectedProductForDetail = null;

// ─── PARTICLES ANIMATION BACKGROUND ──────────────────────────────────────────
(function() {
  const canvas = document.getElementById('particleCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  function Particle() { this.reset(); }
  Particle.prototype.reset = function() {
    this.x = Math.random() * canvas.width; this.y = canvas.height + 10;
    this.r = Math.random() * 2 + 0.5; this.speed = Math.random() * 0.4 + 0.1;
    this.vx = (Math.random() - 0.5) * 0.3; this.opacity = Math.random() * 0.4 + 0.05;
  };
  Particle.prototype.update = function() { this.y -= this.speed; this.x += this.vx; if (this.y < -10) this.reset(); };
  Particle.prototype.draw = function() {
    ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(201,168,76,${this.opacity})`; ctx.fill();
  };
  resize(); window.addEventListener('resize', resize);
  for (let i = 0; i < 50; i++) { const p = new Particle(); p.y = Math.random() * canvas.height; particles.push(p); }
  function loop() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(loop); }
  loop();
})();

// ─── RENDERING READYMADE PRODUCTS (WITH SEARCH/FILTER/SORT) ──────────────────
function renderReadyMadeGrid() {
  const grid = document.getElementById("perfumeGrid");
  if(!grid) return;
  grid.innerHTML = "";

  const products = getDB("scentara_products");
  const searchQuery = document.getElementById("searchBar").value.toLowerCase();
  const familyFilter = document.getElementById("familyFilter").value;
  const sortFilter = document.getElementById("sortFilter").value;

  let filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery) || p.notes.toLowerCase().includes(searchQuery);
    const matchesFamily = (familyFilter === "all") || (p.family === familyFilter);
    return matchesSearch && matchesFamily;
  });

  if (sortFilter === "price-asc") filtered.sort((a, b) => a.basePrice - b.basePrice);
  if (sortFilter === "price-desc") filtered.sort((a, b) => b.basePrice - a.basePrice);

  if(filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px; color:var(--muted);">لم يتم العثور على عطور تطابق معايير البحث الحالية.</div>`;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "perfume-card";
    card.innerHTML = `
      <div class="perfume-card-img"><img src="${p.img}" alt="${p.name}" loading="lazy"/></div>
      <div class="perfume-card-body">
        <span class="perfume-badge">${p.family}</span>
        <h3>${p.name}</h3>
        <p class="perfume-notes">${p.notes}</p>
        <div class="perfume-footer">
          <span class="perfume-price">يبدأ من <span>${p.basePrice}</span> جنيه</span>
          <span style="font-size:0.8rem; color:var(--gold); font-weight:500;">استعراض التفاصيل ←</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openProductDetailModal(p));
    grid.appendChild(card);
  });
}

// ─── PRODUCT DETAIL & REVIEWS SYSTEM ─────────────────────────────────────────
function openProductDetailModal(product) {
  currentSelectedProductForDetail = product;
  document.getElementById("detailModalImg").src = product.img;
  document.getElementById("detailModalName").textContent = product.name;
  document.getElementById("detailModalFamily").textContent = product.family;
  document.getElementById("detailModalDesc").textContent = product.description;
  document.getElementById("detailModalNotes").textContent = product.notes;

  // Build sizes and pricing scale
  const sizesGrid = document.getElementById("detailSizeSelectors");
  sizesGrid.innerHTML = "";
  const sizeScales = [
    { ml: 30, price: product.basePrice },
    { ml: 50, price: Math.round(product.basePrice * 1.5) },
    { ml: 80, price: Math.round(product.basePrice * 2.2) }
  ];

  sizeScales.forEach((scale, i) => {
    const btn = document.createElement("button");
    btn.className = `size-btn ${i === 1 ? 'active' : ''}`;
    btn.style.cssText = "padding:10px; background:var(--panel); border:1px solid var(--border); color:var(--cream); cursor:pointer; flex:1; border-radius:4px;";
    btn.innerHTML = `<div style="font-size:1rem; font-weight:700; color:var(--gold);">${scale.ml} مل</div><div>${scale.price} ج</div>`;
    btn.dataset.ml = scale.ml;
    btn.dataset.price = scale.price;
    btn.addEventListener("click", function() {
      sizesGrid.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
    });
    sizesGrid.appendChild(btn);
  });

  // Render simulated reviews
  const revContainer = document.getElementById("detailModalReviewsList");
  revContainer.innerHTML = "";
  INITIAL_REVIEWS.forEach(r => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <div class="review-user"><strong>${r.username}</strong><span class="review-stars">${"★".repeat(r.rating)}</span></div>
      <div style="font-size:0.82rem; color:var(--muted);">${r.comment}</div>
    `;
    revContainer.appendChild(div);
  });

  switchTab('tab-story');
  openModal("productDetailModal");
}

function switchTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
  
  event.target.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

document.getElementById("detailModalAddToCartBtn").addEventListener("click", () => {
  const activeSizeBtn = document.getElementById("detailSizeSelectors").querySelector(".size-btn.active");
  if (!activeSizeBtn) return;
  
  const selectedSize = parseInt(activeSizeBtn.dataset.ml);
  const selectedPrice = parseInt(activeSizeBtn.dataset.price);

  addToCart({
    uid: "ready_" + currentSelectedProductForDetail.id + "_" + selectedSize,
    name: currentSelectedProductForDetail.name,
    type: "جاهز",
    size: selectedSize,
    price: selectedPrice,
    meta: `العائلة: ${currentSelectedProductForDetail.family}`
  });
  
  closeAllModals();
  openCart();
});

// ─── DYNAMIC CUSTOM BLEND ATELIER LOGIC ──────────────────────────────────────
function renderIngredientsSelector() {
  const container = document.getElementById("ingredientsGrid");
  if(!container) return;
  container.innerHTML = "";
  
  const ingredients = getDB("scentara_ingredients");
  ingredients.forEach(ing => {
    const chip = document.createElement("div");
    chip.className = "ingredient-chip";
    chip.id = `chip_${ing.id}`;
    chip.innerHTML = `
      <span class="i-name">${ing.name}</span>
      <div class="i-meta"><span>${ing.family}</span><span class="i-price">${ing.pricePerMl} جنيه/مل</span></div>
    `;
    chip.addEventListener("click", () => toggleIngredientSelection(ing));
    container.appendChild(chip);
  });
}

function toggleIngredientSelection(ing) {
  if (activeCustomMix[ing.id]) {
    delete activeCustomMix[ing.id];
    document.getElementById(`chip_${ing.id}`).classList.remove("selected");
  } else {
    // Validate total ratio before inserting
    const currentTotal = Object.values(activeCustomMix).reduce((sum, item) => sum + item.qty, 0);
    if(currentTotal >= 100) { showToast("لقد بلغت الحد الأقصى للمزيج (100%). قم بخفض مكون لتضيف غيره."); return; }
    
    activeCustomMix[ing.id] = { ...ing, qty: 10 }; // default 10% allocation
    document.getElementById(`chip_${ing.id}`).classList.add("selected");
  }
  recalculateCustomMix();
}

function recalculateCustomMix() {
  const container = document.getElementById("selectedIngredients");
  const keys = Object.keys(activeCustomMix);
  
  if (keys.length === 0) {
    container.innerHTML = `<p class="mix-placeholder">انقر على الخامات المتواجدة بالقائمة اليمنى لتوليف صيغتك الكيميائية الخاصة.</p>`;
    updateRatioUI(0);
    return;
  }

  container.innerHTML = "";
  keys.forEach(id => {
    const item = activeCustomMix[id];
    const row = document.createElement("div");
    row.className = "mix-item";
    row.innerHTML = `
      <span class="mix-item-name">${item.name}</span>
      <div class="mix-qty-controls">
        <button class="btn-qty-mix" onclick="adjustIngredientQty('${id}', -5)">-</button>
        <span class="mix-qty-val">${item.qty}%</span>
        <button class="btn-qty-mix" onclick="adjustIngredientQty('${id}', 5)">+</button>
      </div>
      <button class="mix-remove" onclick="removeIngredientFromMix('${id}')">✕</button>
    `;
    container.appendChild(row);
  });

  // Calculate strict total ratio sum
  const totalRatio = keys.reduce((sum, id) => sum + activeCustomMix[id].qty, 0);
  updateRatioUI(totalRatio);
}

function adjustIngredientQty(id, amount) {
  const currentTotal = Object.values(activeCustomMix).reduce((sum, item) => sum + item.qty, 0);
  if (amount > 0 && currentTotal + amount > 100) {
    showToast("تجاوزت الحد الأقصى للمزيج (100%)"); return;
  }
  if (activeCustomMix[id].qty + amount <= 0) {
    removeIngredientFromMix(id); return;
  }
  activeCustomMix[id].qty += amount;
  recalculateCustomMix();
}

function removeIngredientFromMix(id) {
  delete activeCustomMix[id];
  const chip = document.getElementById(`chip_${id}`);
  if(chip) chip.classList.remove("selected");
  recalculateCustomMix();
}

function updateRatioUI(total) {
  const barContainer = document.getElementById("ratioBarContainer");
  const statusText = document.getElementById("ratioStatusText");
  const percentText = document.getElementById("ratioPercentage");
  const addBtn = document.getElementById("addCustomToCartBtn");
  const sizeSelect = document.getElementById("customSizeSelect");

  percentText.textContent = `${total}% / 100%`;
  barContainer.innerHTML = "";

  const keys = Object.keys(activeCustomMix);
  keys.forEach(id => {
    const item = activeCustomMix[id];
    const segment = document.createElement("div");
    segment.className = "ratio-segment";
    segment.style.width = `${item.qty}%`;
    // Generate simple deterministic hue for visual separation
    const h = Math.abs(id.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)) % 360;
    segment.style.background = `hsl(${h}, 60%, 50%)`;
    barContainer.appendChild(segment);
  });

  // Strict validation constraints check
  if (total === 100) {
    statusText.textContent = "المزيج متزن ومثالي بنسبة 100% عياراً وحجماً جاهز للاعتماد.";
    statusText.style.color = "var(--success)";
    addBtn.disabled = false;
  } else {
    statusText.textContent = `المزيج الحالي غير مكتمل (${total}%). يجب أن يكون المجموع 100% تماماً.`;
    statusText.style.color = "var(--danger)";
    addBtn.disabled = true;
  }

  // Calculate dynamic compound pricing formula
  // Price = Base Bottle Setup Fee + Sum(Ingredient cost factor per ml * targeted ml volume * ratio fraction)
  if (total > 0) {
    const volume = parseInt(sizeSelect.value);
    const baseSetupFee = volume === 30 ? 150 : (volume === 50 ? 220 : 300);
    
    let compoundIngredientsPrice = 0;
    keys.forEach(id => {
      const item = activeCustomMix[id];
      const mlAllocated = volume * (item.qty / 100);
      compoundIngredientsPrice += mlAllocated * item.pricePerMl;
    });

    const finalCalculatedPrice = Math.round(baseSetupFee + compoundIngredientsPrice);
    document.getElementById("customPriceDisplay").textContent = `${finalCalculatedPrice} جنيه`;
  } else {
    document.getElementById("customPriceDisplay").textContent = "0 جنيه";
  }
}

document.getElementById("customSizeSelect").addEventListener("change", () => {
  const total = Object.values(activeCustomMix).reduce((sum, item) => sum + item.qty, 0);
  updateRatioUI(total);
});

document.getElementById("addCustomToCartBtn").addEventListener("click", () => {
  const keys = Object.keys(activeCustomMix);
  const total = keys.reduce((sum, id) => sum + activeCustomMix[id].qty, 0);
  if (total !== 100) return;

  const volume = parseInt(document.getElementById("customSizeSelect").value);
  const price = parseInt(document.getElementById("customPriceDisplay").textContent);

  const formulasDesc = keys.map(id => `${activeCustomMix[id].name} (${activeCustomMix[id].qty}%)`).join(" + ");
  const customUid = "custom_" + Date.now();

  addToCart({
    uid: customUid,
    name: "مزيج شخصي مخصص",
    type: "مخصص",
    size: volume,
    price: price,
    meta: formulasDesc
  });

  // Reset state layer immediately
  activeCustomMix = {};
  renderIngredientsSelector();
  recalculateCustomMix();
  showToast("تم إدراج تركيبتك المخصصة داخل السلة المحلية بنجاح.");
  openCart();
});

// ─── SHOPPING CART INFRASTRUCTURE (LOCALSTORAGE PERSISTED) ────────────────────
function addToCart(item) {
  const existingIndex = globalCart.findIndex(i => i.uid === item.uid);
  if (existingIndex > -1) {
    globalCart[existingIndex].qty += 1;
  } else {
    item.qty = 1;
    globalCart.push(item);
  }
  syncCartWithStorage();
}

function adjustCartQty(uid, amt) {
  const idx = globalCart.findIndex(i => i.uid === uid);
  if(idx === -1) return;
  
  globalCart[idx].qty += amt;
  if(globalCart[idx].qty <= 0) globalCart.splice(idx, 1);
  
  syncCartWithStorage();
}

function syncCartWithStorage() {
  localStorage.setItem("scentara_cart", JSON.stringify(globalCart));
  renderCartUI();
}

function renderCartUI() {
  const countEl = document.getElementById("cart-count");
  const container = document.getElementById("cartItemsContainer");
  const totalAmountEl = document.getElementById("cartTotalAmount");
  const footerBlock = document.getElementById("cartFooterElement");

  const totalItems = globalCart.reduce((sum, i) => sum + i.qty, 0);
  countEl.textContent = totalItems;
  if (totalItems > 0) countEl.className = "visible"; else countEl.className = "";

  if (globalCart.length === 0) {
    container.innerHTML = `<div style="text-align:center; color:var(--muted); padding:40px 10px;">السلة فارغة حالياً.<br>تصفح المجموعة الجاهزة أو ابدأ تركيبتك الآن!</div>`;
    footerBlock.style.display = "none";
    return;
  }

  footerBlock.style.display = "block";
  container.innerHTML = "";

  let absoluteCartSum = 0;

  globalCart.forEach(item => {
    const itemTotal = item.price * item.qty;
    absoluteCartSum += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name} (${item.size} مل)</div>
        <div class="cart-item-meta">${item.meta}</div>
        <div class="cart-item-price">${item.price} جنيه</div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-item-qty">
          <button class="cart-qty-btn" onclick="adjustCartQty('${item.uid}', -1)">-</button>
          <span style="font-weight:bold; font-size:0.9rem;">${item.qty}</span>
          <button class="cart-qty-btn" onclick="adjustCartQty('${item.uid}', 1)">+</button>
        </div>
        <span style="font-size:0.9rem; font-weight:700; color:var(--gold);">${itemTotal} ج</span>
      </div>
    `;
    container.appendChild(div);
  });

  totalAmountEl.textContent = `${absoluteCartSum} جنيه`;
}

function openCart() { document.getElementById("cartOverlay").classList.add("open"); document.getElementById("cartPanel").classList.add("open"); }
function closeCart() { document.getElementById("cartOverlay").classList.remove("open"); document.getElementById("cartPanel").classList.remove("open"); }

document.getElementById("cart-btn").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("cartOverlay").addEventListener("click", closeCart);

// ─── CHECKOUT & TRANSACTION WORKFLOW ──────────────────────────────────────────
document.getElementById("goToCheckoutBtn").addEventListener("click", () => {
  closeCart();
  const summaryList = document.getElementById("checkoutSummary");
  let absoluteCartSum = 0;
  let summaryHtml = `<ul style="padding-right:16px; margin-bottom:8px;">`;
  
  globalCart.forEach(item => {
    const t = item.price * item.qty;
    absoluteCartSum += t;
    summaryHtml += `<li>${item.name} عدد ${item.qty} (${item.size}مل) = ${t} جنيه</li>`;
  });
  summaryHtml += `</ul><strong>الإجمالي النهائي للامتثال للشحن: ${absoluteCartSum} جنيه</strong>`;
  summaryList.innerHTML = summaryHtml;

  openModal("checkoutModal");
});

document.getElementById("submitOrderFinalBtn").addEventListener("click", () => {
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const city = document.getElementById("custCity").value.trim();
  const address = document.getElementById("custAddress").value.trim();

  if(!name || !phone || !city || !address) { showToast("يرجى ملء كافة الحقول الإلزامية برمز النجمة (*)"); return; }

  const trackCode = "SCT-" + Math.floor(100000 + Math.random() * 900000);
  const totalAmount = globalCart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  const newOrder = {
    trackCode: trackCode,
    customerName: name,
    phone: phone,
    city: city,
    address: address,
    items: [...globalCart],
    total: totalAmount,
    status: "قيد المراجعة والمعايرة",
    timestamp: new Date().toLocaleString("ar-EG")
  };

  // Push into database repository simulation
  const currentOrders = getDB("scentara_orders");
  currentOrders.push(newOrder);
  setDB("scentara_orders", currentOrders);

  // Clear tracking UI states
  document.getElementById("generatedTrackCode").textContent = trackCode;
  
  // Format clean programmatic text for WhatsApp API integration routing fallback securely
  let waText = `مرحباً دار سينتارا، وددت تأكيد طلبي عبر الكود (${trackCode}).\nالاسم: ${name}\nالإجمالي: ${totalAmount} جنيه.`;
  document.getElementById("successWaLink").href = `https://wa.me/201113053074?text=${encodeURIComponent(waText)}`;

  closeAllModals();
  globalCart = [];
  syncCartWithStorage();
  
  openModal("successTrackingModal");
});

// ─── ADMIN BACKOFFICE PORTAL LOGIC ───────────────────────────────────────────
document.getElementById("admin-panel-btn").addEventListener("click", () => {
  renderAdminOrders();
  renderAdminProducts();
  openModal("adminDashboardModal");
});

function switchAdminTab(tabId, btn) {
  document.querySelectorAll(".admin-tab-content").forEach(c => c.style.display = "none");
  document.querySelectorAll(".admin-nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById(tabId).style.display = "block";
  btn.classList.add("active");
}

function renderAdminOrders() {
  const tbody = document.getElementById("adminOrdersTableBody");
  tbody.innerHTML = "";
  const orders = getDB("scentara_orders");

  if(orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--muted);">لا يوجد طلبات مسجلة أونلاين حتى هذه الساعة.</td></tr>`;
    return;
  }

  orders.forEach((o, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="font-weight:700; color:var(--gold);">${o.trackCode}</td>
      <td><strong>${o.customerName}</strong><br><small>${o.phone} - ${o.city}</small></td>
      <td>${o.total} جنيه<br><small style="color:var(--muted);">${o.items.length} قطع</small></td>
      <td><span class="status-badge ${o.status.includes('شحن') ? 'status-shipped' : 'status-pending'}">${o.status}</span></td>
      <td>
        <select onchange="updateOrderStatusAdmin('${o.trackCode}', this.value)" style="padding:4px; font-size:0.75rem; background:var(--ink); color:var(--cream); border:1px solid var(--border);">
          <option value="">تعديل الحالة</option>
          <option value="تم تأكيد الفحص والتجهيز">تأكيد التجهيز</option>
          <option value="تم تسليم الشحنة للمندوب">تم الشحن للمحافظة</option>
          <option value="اكتمل الطلب وتم التوصيل">تم التوصيل بنجاح</option>
        </select>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateOrderStatusAdmin(trackCode, newStatus) {
  if(!newStatus) return;
  const orders = getDB("scentara_orders");
  const idx = orders.findIndex(o => o.trackCode === trackCode);
  if(idx > -1) {
    orders[idx].status = newStatus;
    setDB("scentara_orders", orders);
    renderAdminOrders();
    showToast(`تم ترقية وضع الطلب ${trackCode} بنجاح.`);
  }
}

function renderAdminProducts() {
  const tbody = document.getElementById("adminProductsTableBody");
  tbody.innerHTML = "";
  const products = getDB("scentara_products");

  products.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${p.name}</strong></td>
      <td>${p.family}</td>
      <td>${p.basePrice} جنيه</td>
      <td>
        <button onclick="deleteProductAdmin(${p.id})" style="background:none; border:none; color:var(--danger); cursor:pointer;">🗑️ حذف</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openAddProductForm() {
  const block = document.getElementById("addProductFormBlock");
  block.style.display = block.style.display === "none" ? "block" : "none";
}

function saveNewProductAdmin() {
  const name = document.getElementById("admPName").value.trim();
  const family = document.getElementById("admPFamily").value.trim();
  const notes = document.getElementById("admPNotes").value.trim();
  const desc = document.getElementById("admPDesc").value.trim();
  const img = document.getElementById("admPImg").value.trim() || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=cover&w=500&q=80";
  const price = parseInt(document.getElementById("admPPrice").value) || 300;

  if(!name || !family || !notes) { showToast("يرجى استيفاء البيانات لإنشاء مرجع عطر حقيقي."); return; }

  const products = getDB("scentara_products");
  const newP = { id: Date.now(), name, family, notes, description: desc, img, basePrice: price };
  
  products.push(newP);
  setDB("scentara_products", products);
  
  // Reset forms and redraw grids
  document.getElementById("admPName").value = "";
  document.getElementById("admPNotes").value = "";
  document.getElementById("addProductFormBlock").style.display = "none";
  
  renderAdminProducts();
  renderReadyMadeGrid();
  showToast("تم إدراج العطر بالكتالوج العام للمتجر بنجاح فوري.");
}

function deleteProductAdmin(id) {
  let products = getDB("scentara_products");
  products = products.filter(p => p.id !== id);
  setDB("scentara_products", products);
  renderAdminProducts();
  renderReadyMadeGrid();
  showToast("تم عزل وحذف المنتج المختار من كتالوج العرض المحلي.");
}

// ─── FAQ & POLICY EVENTS ─────────────────────────────────────────────────────
document.querySelectorAll(".faq-trigger").forEach(trigger => {
  trigger.addEventListener("click", function() {
    const content = this.nextElementSibling;
    const isVisible = content.style.display === "block";
    content.style.display = isVisible ? "none" : "block";
    this.querySelector("span").textContent = isVisible ? "+" : "−";
  });
});

document.getElementById("policy-btn-return").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("policyTitle").textContent = "سياسة الاستبدال والتعويض الضامن الفوري";
  document.getElementById("policyBody").innerHTML = `نظراً لأن عطور التركيب المخصصة تعتمد على توليف خامات مخصصة لذوق العميل، فإننا لا نقبل الاسترجاع الكامل إلا في حالة وجود عيب تلف في الصمام أو تسريب مؤكد من العبوة الكريستالية. العطور الجاهزة تخضع لسياسة استرجاع مرنة خلال 3 أيام من تاريخ الاستلام بشرط ألا تكون العبوة قد تم استخدام أكثر من رشتي فحص للتأكد من الرائحة.`;
  openModal("policyModal");
});

document.getElementById("policy-btn-privacy").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("policyTitle").textContent = "شروط الخصوصية وضوابط الأمان الفني";
  document.getElementById("policyBody").innerHTML = `في دار سينتارا، نحتفظ بصيغ التركيبات المخصصة للعملاء برقم هاتفهم في قاعدة البيانات لضمان قدرتهم على إعادة طلب نفس الصيغة الحصرية مستقبلاً دون تغيير في النوتات. لا يتم مشاركة بيانات العنوان أو أرقام التواصل مع أي أطراف ثالثة خارج النطاق التنفيذي لشركات الشحن المعتمدة لدينا لتأمين تسليم طلبك.`;
  openModal("policyModal");
});

// ─── UI UTILITIES GLOBAL HELPERS ──────────────────────────────────────────────
function openModal(id) { document.getElementById(id).classList.add("open"); }
function closeAllModals() { document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open")); }
function showToast(msg) {
  const toast = document.getElementById("toastElement");
  toast.textContent = msg; toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

// Global modal overlay backdrop click handler
document.querySelectorAll(".modal-overlay").forEach(m => {
  m.addEventListener("click", function(e) { if(e.target === this) this.classList.remove("open"); });
});

// Realtime listeners on Search input architecture
document.getElementById("searchBar").addEventListener("input", renderReadyMadeGrid);
document.getElementById("familyFilter").addEventListener("change", renderReadyMadeGrid);
document.getElementById("sortFilter").addEventListener("change", renderReadyMadeGrid);
// ─── APPLICATION REPOSITORY BOOTSTRAP INITIALIZER ───────────────────────────

// ─── APPLICATION REPOSITORY BOOTSTRAP INITIALIZER ───────────────────────────

window.addEventListener("DOMContentLoaded", async () => {
    
    // 1. الدوال دي تشتغل فوراً مش مستنية جوجل شيت (التركيبات والسلة)
    renderIngredientsSelector();
    recalculateCustomMix();
    renderCartUI();

    // 2. جلب بيانات المنتجات من رابط جوجل شيت (الأبلكيشن سكريبت)
    try {
        // ⚠️ استبدل الرابط اللي تحت ده برابط الـ Web App الجديد بتاعك بعد ما تعمل New Deployment
        const response = await fetch("https://script.google.com/macros/s/AKfycbxaTGr2VerlsmDmc91lOGxanplUTfx9LY_V17PcWReQFZTKoabXB03VI4nXA60kQP6kWg/exec", {
            method: 'GET',
            redirect: 'follow'
        });        
        
        const result = await response.json();
        
        // 3. التأكد من نجاح الطلب وحفظ المصفوفة (data) في الـ LocalStorage
        if (result && result.status === "success" && result.data.length > 0) {
            setDB("scentara_products", result.data); 
            console.log("تم مزامنة المنتجات بنجاح من جوجل شيت:", result.data);
        } else {
            console.warn("السيرفر رجع استجابة غير متوقعة أو فاضية:", result);
        }
        
        // 4. عرض شبكة المنتجات بالبيانات الجديدة
        renderReadyMadeGrid();

    } catch (error) {
        console.error("خطأ في جلب البيانات من جوجل شيت، تم تشغيل البيانات الاحتياطية المسجلة:", error);
        // لو حصلت مشكلة في الاتصال، الموقع هيعرض آخر منتجات كانت متخزنة في الجهاز كإجراء احتياطي
        renderReadyMadeGrid();
    }
});