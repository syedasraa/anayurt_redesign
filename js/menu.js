/* ============================================================
   AnaYurt — Menu Page JavaScript (speisekarte.html)
   Data is embedded directly — no fetch(), works on file://
   ============================================================ */

(function () {
  'use strict';

  var MENU_DATA = {
    categories: [
      {
        id: 'salate', name: 'Salate',
        subcategories: [
          {
            id: 'kalte-salate', name: 'Kalte Salate',
            dishes: [
              { id:'dish-01', number:1,  name:'Rindfleisch Salat',                     description:'Zartes Rindfleisch in aromatischem Chiliöl mit Gewürzen',                  price:7.90,  protein:'Rind',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always',        image:'assets/images/dishes/rindfleisch-salat.webp' },
              { id:'dish-02', number:2,  name:'Hühnchen Fleisch Salat mit Chilisauce', description:'Zartes Hühnchen in würziger Chilisauce',                                   price:6.90,  protein:'Hähnchen',    spice:'medium', dietary:['halal'],               chefPick:false, availability:'always',        image:'assets/images/dishes/huehnchen-salat.webp' },
              { id:'dish-03', number:3,  name:'Auberginen Salat',                      description:'Frische Auberginen mit Gewürzen und Kräutern',                             price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/auberginen-salat.webp' },
              { id:'dish-04', number:4,  name:'Gurken Salat',                          description:'Frischer Gurkensalat mit leichter Würzung',                                price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/gurken-salat.webp' },
              { id:'dish-05', number:5,  name:'Uyghur Salat',                          description:'Gemüse mit würzigem Dressing nach uigurischer Art',                        price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/uyghur-salat.webp' },
              { id:'dish-06', number:6,  name:'Karotten Salat',                        description:'Frische Karotten mit leichter Würzung',                                    price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/karotten-salat.webp' },
              { id:'dish-28', number:28, name:'Nudelsalat mit Rindfleisch',            description:'Breite Nudeln mit zartem Fleisch, Gemüse und würziger Sauce',              price:13.90, protein:'Rind',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always',        image:'assets/images/dishes/nudelsalat-rind.webp' }
            ]
          }
        ]
      },
      {
        id: 'nudelgerichte', name: 'Nudelgerichte / Pasta / Leghmen',
        subcategories: [
          {
            id: 'gebratene-nudeln', name: 'Gebratene Nudelgerichte',
            dishes: [
              { id:'dish-07', number:7,  name:'Gebratene Nudeln mit Bärlauch',           description:'Gebratene Nudeln mit aromatischem Bärlauch und Gewürzen',           price:13.90, protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always', image:'assets/images/dishes/nudeln-baerlauch.webp' },
              { id:'dish-12', number:12, name:'Gebratene Nudeln mit Fleisch und Gemüse', description:'Gebratene Nudeln mit frischem Gemüse und aromatischen Gewürzen',    price:13.90, protein:'Lamm',        spice:'mild',   dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/nudeln-fleisch-gemuese.webp' },
              { id:'dish-15', number:15, name:'Gebratene Hähnchen mit Nudeln',           description:'Gebratenes Hähnchen mit Nudeln und Gemüse in würziger Sauce',       price:17.90, protein:'Hähnchen',    spice:'medium', dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/haehnchen-nudeln.webp' }
            ]
          },
          {
            id: 'leghmen', name: 'Handgezogene Uyghur-Nudeln (Leghmen)',
            dishes: [
              { id:'dish-08', number:8,  name:'ANA YURT Leghmen',          description:'Handgezogene Nudeln mit Gemüse und Lammfleisch — Hausrezept',          price:14.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:true,  availability:'always', image:'assets/images/dishes/ana-yurt-leghmen.webp' },
              { id:'dish-09', number:9,  name:'Leghmen',                   description:'Handgezogene Nudeln mit Fleisch, Gemüse und würziger Sauce',           price:12.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/leghmen.webp' },
              { id:'dish-10', number:10, name:'Suyru Leghmen',             description:'Uigurische Nudelsuppe mit Lammfleisch und handgezogenen Nudeln',       price:13.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/suyru-leghmen.webp' },
              { id:'dish-11', number:11, name:'Dindin Nudeln',             description:'Kleingeschnittene Nudeln mit Rindfleisch, Gemüse und würziger Sauce',  price:13.90, protein:'Rind', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dindin-nudeln.webp' },
              { id:'dish-29', number:29, name:'Bandnudeln mit Rindfleisch',description:'Breite Bandnudeln mit Fleisch und würzigem Dressing',                  price:14.90, protein:'Rind', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/bandnudeln-rind.webp' }
            ]
          }
        ]
      },
      {
        id: 'suppen', name: 'Suppen',
        subcategories: [
          {
            id: 'nudelsuppen', name: 'Nudelsuppen',
            dishes: [
              { id:'dish-26', number:26, name:'Geschmorte Rindfleischsuppe mit Nudeln', description:'Kräftige Nudelsuppe mit geschmortem Rindfleisch und Gewürzen',          price:13.90, protein:'Rind', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/rindfleischsuppe-nudeln.webp' },
              { id:'dish-27', number:27, name:'Klassische Nudelsuppe',                  description:'Traditionelle Suppe mit Nudeln, Gemüse und aromatischen Gewürzen',     price:12.90, protein:'Lamm', spice:'mild',   dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/klassische-nudelsuppe.webp' }
            ]
          }
        ]
      },
      {
        id: 'teigtaschen', name: 'Teigtaschen / Dumplings / Momo Art',
        subcategories: [
          { id:'gedaempft', name:'Gedämpft',  dishes:[ { id:'dish-17', number:17, name:'Gedämpfte Teigtaschen',  description:'Zart gedämpfte Teigtaschen gefüllt mit Fleisch und Gewürzen',  price:7.90,  protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/gedaempfte-teigtaschen.webp' } ] },
          { id:'gebraten',  name:'Gebraten', dishes:[ { id:'dish-18', number:18, name:'Gebratene Teigtaschen',  description:'Knusprig gebratene Teigtaschen mit Fleischfüllung',             price:7.90,  protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/gebratene-teigtaschen.webp' } ] },
          { id:'gekocht',   name:'Gekocht',  dishes:[ { id:'dish-20', number:20, name:'Gekochte Teigtaschen',   description:'Zart gekochte Teigtaschen gefüllt mit Fleisch und Gewürzen',   price:13.90, protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/gekochte-teigtaschen.webp' } ] }
        ]
      },
      {
        id: 'hauptgerichte', name: 'Hauptgerichte',
        subcategories: [
          {
            id: 'gebratene-fleischgerichte', name: 'Gebratene Fleischgerichte',
            dishes: [
              { id:'dish-13', number:13, name:'Kung Pao Huhn',                     description:'Gebratenes Huhn mit Erdnüssen, Gemüse und Chilisauce',                price:15.90, protein:'Hähnchen',    spice:'hot',    dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/kung-pao-huhn.webp' },
              { id:'dish-14', number:14, name:'Groß Teller Hähnchen',              description:'Große Portion gebratenes Hähnchen mit Gemüse und Gewürzen',           price:14.90, priceLabel:'14,90 / 39,90 \u20ac', protein:'Hähnchen', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/gross-teller-haehnchen.webp' },
              { id:'dish-16', number:16, name:'Gebratenes Lammfleisch mit Gemüse', description:'Zart gebratenes Lammfleisch mit frischem Gemüse und Gewürzen',        price:15.90, protein:'Lamm',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/lammfleisch-gemuese.webp' },
              { id:'dish-21', number:21, name:'Gebratenes Lammfleisch',            description:'Zart gebratenes Lammfleisch mit aromatischen Gewürzen',               price:20.90, protein:'Lamm',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/gebratenes-lammfleisch.webp' },
              { id:'dish-25', number:25, name:'Gebratener Spinat mit Ei',          description:'Frischer Spinat gebraten mit Ei und Gewürzen',                        price:10.90, protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always', image:'assets/images/dishes/spinat-ei.webp' }
            ]
          },
          {
            id: 'grill-ofen', name: 'Grill / Ofen-Spezialitäten',
            dishes: [
              { id:'dish-22', number:22, name:'Lammspieße',  description:'Gegrillte Lammspieße mit uigurischen Gewürzen',              price:11.90, priceLabel:'11,90 / 14,90 \u20ac', protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:true,  availability:'always',       image:'assets/images/dishes/lammspies.webp' },
              { id:'dish-23', number:23, name:'Tonur Kebab', description:'Im Tonur-Ofen gegartes Lammfleisch nach uigurischer Art',     price:69.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:false, availability:'advance-order', image:'assets/images/dishes/tonur-kebab.webp' }
            ]
          },
          {
            id: 'reisgerichte', name: 'Reisgerichte',
            dishes: [
              { id:'dish-24', number:24, name:'Polo', description:'Uigurischer Reis mit Lammfleisch, Karotten und Gewürzen', price:14.90, protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:true, availability:'saturday-only', image:'assets/images/dishes/polo.webp' }
            ]
          },
          {
            id: 'brot-spezialitaeten', name: 'Brot & Spezialitäten',
            dishes: [
              { id:'dish-19', number:19, name:'Göchnan', description:'Uigurisches gedämpftes Brot, serviert mit Fleisch und Gemüse', price:11.90, protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/goechnan.webp' }
            ]
          },
          {
            id: 'extras', name: 'Extras',
            dishes: [
              { id:'dish-30', number:30, name:'Extra Nudeln / Reis', description:'Zusätzliche Portion Nudeln oder Reis', price:2.50, protein:'Vegetarisch', spice:null, dietary:['halal','vegetarisch'], chefPick:false, availability:'always', image:null }
            ]
          }
        ]
      },
      {
        id: 'getraenke', name: 'Getränke',
        subcategories: [
          {
            id: 'tee', name: 'Tee \u2014 ein Ritual, keine Beilage',
            dishes: [
              { id:'drink-01', name:'Uigurischer Tee', description:'Traditioneller uigurischer Schwarztee \u2014 kräftig, aromatisch, nach altem Rezept der Seidenstraße', priceLabel:'2,50 \u20ac / 7,00 \u20ac', protein:null, spice:null, dietary:['halal','vegetarisch'], badge:'Traditionell', image:null },
              { id:'drink-02', name:'Ghulja Tee',       description:'Feiner Tee aus der uigurischen Stadt Ghulja \u2014 blumig, mild, mit warmen Gewürznoten',             priceLabel:'2,50 \u20ac / 7,00 \u20ac', protein:null, spice:null, dietary:['halal','vegetarisch'], badge:'Aus Ghulja',   image:null },
              { id:'drink-03', name:'Grüner Tee',       description:'Leichter Grüntee \u2014 frisch und klar, perfekt zum Abschluss eines Gerichts',                       priceLabel:'2,50 \u20ac / 7,00 \u20ac', protein:null, spice:null, dietary:['halal','vegetarisch'], badge:'Leicht',       image:null },
              { id:'drink-04', name:'Eistee',           description:'Hausgemachter Eistee \u2014 erfrischend und leicht gesüßt',                                           priceLabel:'3,50 \u20ac',               protein:null, spice:null, dietary:['halal','vegetarisch'], badge:'Kalt',         image:null }
            ]
          },
          {
            id: 'softdrinks', name: 'Softdrinks & Wasser',
            drinks_list: [
              { name:'Mineralwasser (klein / groß)', price:'3,00 \u20ac / 7,00 \u20ac' },
              { name:'Fritz-Kola / Zero',            price:'3,00 \u20ac' },
              { name:'Fritz-Rhabarber',              price:'3,00 \u20ac' },
              { name:'Fritz-Apfelschorle',           price:'3,00 \u20ac' },
              { name:'Fritz-Limo',                   price:'3,00 \u20ac' },
              { name:'Fritz-Orange',                 price:'3,00 \u20ac' },
              { name:'Fritz-Mischmasch',             price:'3,00 \u20ac' }
            ]
          }
        ]
      }
    ]
  };

  /* ── State ── */
  var activeFilter = 'alle';

  /* ── DOM refs ── */
  var menuBody  = document.getElementById('menuBody');
  var menuEmpty = document.getElementById('menuEmpty');
  var resetBtn  = document.getElementById('resetFilter');

  /* ══════════════════════════════════════════
     INIT — synchronous, no fetch, no loading state
  ══════════════════════════════════════════ */
  function init() {
    /* Kill the skeleton immediately */
    var loading = document.getElementById('menuLoading');
    if (loading) loading.hidden = true;
    var error = document.getElementById('menuError');
    if (error) error.hidden = true;

    renderAll();
    initTabs();
    initFilters();
    handleHashScroll();
  }

  /* ══════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════ */
  function renderAll() {
    menuBody.innerHTML = '';
    MENU_DATA.categories.forEach(function (cat) {
      menuBody.appendChild(renderSection(cat));
    });
  }

  function renderSection(cat) {
    var section = document.createElement('section');
    section.className = 'menu-section';
    section.id = cat.id;
    section.setAttribute('aria-labelledby', 'stitle-' + cat.id);
    section.innerHTML =
      '<div class="section-header">' +
        '<div class="section-accent" aria-hidden="true"></div>' +
        '<h2 class="section-title" id="stitle-' + cat.id + '">' + esc(cat.name) + '</h2>' +
      '</div>';
    cat.subcategories.forEach(function (sub) {
      section.appendChild(renderSubcategory(sub, cat.id));
    });
    return section;
  }

  function renderSubcategory(sub, catId) {
    var wrap = document.createElement('div');
    var label = document.createElement('div');
    label.className = 'subcategory-label';
    label.textContent = sub.name;
    wrap.appendChild(label);

    if (sub.drinks_list) { wrap.appendChild(renderSoftdrinks(sub.drinks_list)); return wrap; }

    if (catId === 'getraenke' && sub.id === 'tee') {
      var tl = document.createElement('div');
      tl.className = 'tea-list';
      sub.dishes.forEach(function (d) { tl.appendChild(renderTeaCard(d)); });
      wrap.appendChild(tl);
      return wrap;
    }

    var list = document.createElement('div');
    list.className = 'dish-list';
    list.setAttribute('role', 'list');
    sub.dishes.forEach(function (d) { list.appendChild(renderDishCard(d)); });
    wrap.appendChild(list);
    return wrap;
  }

  function renderDishCard(dish) {
    var article = document.createElement('article');
    article.className = 'dish-card';
    article.setAttribute('role', 'listitem');
    article.setAttribute('data-protein', dish.protein || '');

    var badges = '';
    if (dish.protein) badges += '<span class="protein-tag">' + esc(dish.protein) + '</span>';
    if (dish.dietary && dish.dietary.indexOf('halal') > -1) badges += '<span class="badge--halal-inline">\u2713 Halal</span>';
    if (dish.availability === 'advance-order') badges += '<span class="badge--availability-advance">VORBESTELLUNG</span>';
    if (dish.availability === 'saturday-only') badges += '<span class="badge--availability-saturday">NUR SAMSTAGS</span>';

    var priceDisplay = dish.priceLabel || formatPrice(dish.price);
    var imgHtml = dish.image
      ? '<img class="dish-card__img" src="' + esc(dish.image) + '" alt="' + esc(dish.name) + '" loading="lazy" ' +
        'onload="this.parentElement.classList.remove(\'is-loading\')" ' +
        'onerror="this.parentElement.classList.remove(\'is-loading\');this.outerHTML=\'<div class=\\\'dish-card__img-fallback\\\'>🍽</div>\'">'
      : '<div class="dish-card__img-fallback">🍽</div>';

    article.innerHTML =
      '<div class="dish-card__img-wrap' + (dish.image ? ' is-loading' : '') + '">' +
        (dish.number ? '<span class="dish-number" aria-hidden="true">No.' + dish.number + '</span>' : '') +
        imgHtml +
        (dish.chefPick ? '<span class="chef-star" aria-label="Empfehlung">\u2605</span>' : '') +
      '</div>' +
      '<div class="dish-card__body">' +
        '<div class="dish-card__badges">' + badges + '</div>' +
        '<h3 class="dish-name">' + esc(dish.name) + '</h3>' +
        (dish.description ? '<p class="dish-desc">' + esc(dish.description) + '</p>' : '') +
        '<div class="dish-card__footer">' +
          renderSpiceDots(dish.spice) +
          '<span class="dish-price">' + priceDisplay + '</span>' +
        '</div>' +
      '</div>';

    return article;
  }

  function renderTeaCard(drink) {
    var icons = { 'Traditionell':'🫖', 'Aus Ghulja':'🌿', 'Leicht':'🍃', 'Kalt':'🧊' };
    var a = document.createElement('article');
    a.className = 'tea-card';
    a.innerHTML =
      '<div class="tea-card__accent" aria-hidden="true">' + (icons[drink.badge] || '☕') + '</div>' +
      '<div>' +
        (drink.badge ? '<div class="tea-badge">' + esc(drink.badge) + '</div>' : '') +
        '<div class="tea-name">' + esc(drink.name) + '</div>' +
        '<div class="tea-desc">' + esc(drink.description) + '</div>' +
        '<div class="tea-price">' + (drink.priceLabel || formatPrice(drink.price)) + '</div>' +
      '</div>';
    return a;
  }

  function renderSoftdrinks(list) {
    var div = document.createElement('div');
    div.className = 'softdrinks-list';
    list.forEach(function (item) {
      var row = document.createElement('div');
      row.className = 'softdrinks-row';
      row.innerHTML = '<span>' + esc(item.name) + '</span><span class="softdrinks-row__price">' + esc(item.price) + '</span>';
      div.appendChild(row);
    });
    return div;
  }

  /* ══════════════════════════════════════════
     TABS
  ══════════════════════════════════════════ */
  function initTabs() {
    var tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.dataset.target;
        tabs.forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected','true');
        if (target === 'alle') {
          var ctrl = document.getElementById('menuControls');
          if (ctrl) window.scrollTo({ top: ctrl.offsetTop, behavior: 'smooth' });
        } else {
          var sec = document.getElementById(target);
          if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          tabs.forEach(function (t) {
            var m = t.dataset.target === e.target.id;
            t.classList.toggle('active', m);
            t.setAttribute('aria-selected', m ? 'true' : 'false');
          });
          var at = document.querySelector('.tab-btn.active');
          if (at) at.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
      }, { rootMargin: '-20% 0px -70% 0px' });
      document.querySelectorAll('.menu-section').forEach(function (s) { obs.observe(s); });
    }
  }

  /* ══════════════════════════════════════════
     FILTERS
  ══════════════════════════════════════════ */
  function initFilters() {
    var btns = document.querySelectorAll('.filter-btn');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeFilter = btn.dataset.filter;
        btns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
        btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
        applyFilter();
      });
    });
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        activeFilter = 'alle';
        btns.forEach(function (b) { var a = b.dataset.filter==='alle'; b.classList.toggle('active',a); b.setAttribute('aria-pressed',a?'true':'false'); });
        applyFilter();
      });
    }
  }

  function applyFilter() {
    var cards = document.querySelectorAll('.dish-card');
    var vis = 0;
    cards.forEach(function (c) { var show = activeFilter==='alle'||c.getAttribute('data-protein')===activeFilter; c.hidden=!show; if(show)vis++; });
    if (menuEmpty) menuEmpty.hidden = !(vis===0 && activeFilter!=='alle');
  }

  /* ══════════════════════════════════════════
     HASH SCROLL
  ══════════════════════════════════════════ */
  function handleHashScroll() {
    var hash = window.location.hash.replace('#','');
    if (!hash) return;
    var sec = document.getElementById(hash);
    if (sec) setTimeout(function () { sec.scrollIntoView({ behavior:'smooth', block:'start' }); }, 50);
  }

  /* ══════════════════════════════════════════
     UTILS
  ══════════════════════════════════════════ */
  function renderSpiceDots(level) {
    if (!level) return '<span class="spice-dots" aria-hidden="true"></span>';
    var fill = { mild:1, medium:2, hot:3 }[level] || 0;
    var cls  = { mild:'filled-mild', medium:'filled-medium', hot:'filled-hot' }[level] || '';
    var dots = '';
    for (var i = 1; i <= 3; i++) dots += '<span class="spice-dot ' + (i<=fill ? cls : '') + '"></span>';
    var lbl = { mild:'Mild', medium:'Mittelscharf', hot:'Uigurisch scharf' }[level] || '';
    return '<span class="spice-dots" aria-label="Schärfe: ' + lbl + '">' + dots + '</span>';
  }

  function formatPrice(n) {
    if (n == null) return '';
    return n.toFixed(2).replace('.', ',') + '\u00a0\u20ac';
  }

  function esc(s) {
    if (!s) return '';
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ── Boot ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();