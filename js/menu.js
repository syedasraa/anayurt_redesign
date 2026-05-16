// /* ============================================================
//    AnaYurt — Menu Page JavaScript (speisekarte.html)
//    Data is embedded directly — no fetch(), works on file://
//    ============================================================ */

// (function () {
//   'use strict';

//   var MENU_DATA = {
//     categories: [
//       {
//         id: 'salate', name: 'Salate',
//         subcategories: [
//           {
//             id: 'kalte-salate', name: 'Kalte Salate',
//             dishes: [
//               { id:'dish-01', number:1,  name:'Rindfleisch Salat',                     description:'Zartes Rindfleisch in aromatischem Chiliöl mit Gewürzen',                  price:7.90,  protein:'Rind',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Rindflesisch-in-Chiliol.jpg' },
//               { id:'dish-02', number:2,  name:'Hühnchen Fleisch Salat mit Chilisauce', description:'Zartes Hühnchen in würziger Chilisauce',                                   price:6.90,  protein:'Hähnchen',    spice:'medium', dietary:['halal'],               chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Huhnchen-in-Chilisobe.jpg' },
//               { id:'dish-03', number:3,  name:'Auberginen Salat',                      description:'Frische Auberginen mit Gewürzen und Kräutern',                             price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Auberginen-Salat.jpg' },
//               { id:'dish-04', number:4,  name:'Gurken Salat',                          description:'Frischer Gurkensalat mit leichter Würzung',                                price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Gurken-Salat-768x768.jpg' },
//               { id:'dish-05', number:5,  name:'Uyghur Salat',                          description:'Gemüse mit würzigem Dressing nach uigurischer Art',                        price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Uyghur-Salat-768x768.jpg' },
//               { id:'dish-06', number:6,  name:'Karotten Salat',                        description:'Frische Karotten mit leichter Würzung',                                    price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Karotten-Salat-768x768.jpg' },
//               { id:'dish-28', number:28, name:'Nudelsalat mit Rindfleisch',            description:'Breite Nudeln mit zartem Fleisch, Gemüse und würziger Sauce',              price:13.90, protein:'Rind',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/nudelsalat-mit-Rindfleisch-768x768.jpg' }
//             ]
//           }
//         ]
//       },
//       {
//         id: 'nudelgerichte', name: 'Nudelgerichte / Pasta / Leghmen',
//         subcategories: [
//           {
//             id: 'gebratene-nudeln', name: 'Gebratene Nudelgerichte',
//             dishes: [
//               { id:'dish-07', number:7,  name:'Gebratene Nudeln mit Bärlauch',           description:'Gebratene Nudeln mit aromatischem Bärlauch und Gewürzen',           price:13.90, protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Nudeln-mit-barlauch.jpg' },
//               { id:'dish-12', number:12, name:'Gebratene Nudeln mit Fleisch und Gemüse', description:'Gebratene Nudeln mit frischem Gemüse und aromatischen Gewürzen',    price:13.90, protein:'Lamm',        spice:'mild',   dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Nudeln-mit-Gemuse-768x768.jpg' },
//               { id:'dish-15', number:15, name:'Gebratene Hähnchen mit Nudeln',           description:'Gebratenes Hähnchen mit Nudeln und Gemüse in würziger Sauce',       price:17.90, protein:'Hähnchen',    spice:'medium', dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Hahnchen-mit-Nudeln-768x768.jpg' }
//             ]
//           },
//           {
//             id: 'leghmen', name: 'Handgezogene Uyghur-Nudeln (Leghmen)',
//             dishes: [
//               { id:'dish-08', number:8,  name:'ANA YURT Leghmen',          description:'Handgezogene Nudeln mit Gemüse und Lammfleisch — Hausrezept',          price:14.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:true,  availability:'always', image:'assets/images/dishes/dish menu/ANA-YURT-Leghmen-768x768.jpg' },
//               { id:'dish-09', number:9,  name:'Leghmen',                   description:'Handgezogene Nudeln mit Fleisch, Gemüse und würziger Sauce',           price:12.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Leghmen-768x768.jpg' },
//               { id:'dish-10', number:10, name:'Suyru Leghmen',             description:'Uigurische Nudelsuppe mit Lammfleisch und handgezogenen Nudeln',       price:13.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Suyru-Leghmen-768x768.jpg' },
//               { id:'dish-11', number:11, name:'Dindin Nudeln',             description:'Kleingeschnittene Nudeln mit Rindfleisch, Gemüse und würziger Sauce',  price:13.90, protein:'Rind', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Dindin-Nudeln-768x768.jpg' },
//               { id:'dish-29', number:29, name:'Bandnudeln mit Rindfleisch',description:'Breite Bandnudeln mit Fleisch und würzigem Dressing',                  price:14.90, protein:'Rind', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Bandnudeln mit rindfleish.jpg' }
//             ]
//           }
//         ]
//       },
//       {
//         id: 'suppen', name: 'Suppen',
//         subcategories: [
//           {
//             id: 'nudelsuppen', name: 'Nudelsuppen',
//             dishes: [
//               { id:'dish-26', number:26, name:'Geschmorte Rindfleischsuppe mit Nudeln', description:'Kräftige Nudelsuppe mit geschmortem Rindfleisch und Gewürzen',          price:13.90, protein:'Rind', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Geschorte-Rindfleisch_Nudel-Suppe.jpg' },
//               { id:'dish-27', number:27, name:'Klassische Nudelsuppe',                  description:'Traditionelle Suppe mit Nudeln, Gemüse und aromatischen Gewürzen',     price:12.90, protein:'Lamm', spice:'mild',   dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Klassische-Nudelsuppe.jpg' }
//             ]
//           }
//         ]
//       },
//       {
//         id: 'teigtaschen', name: 'Teigtaschen / Dumplings / Momo Art',
//         subcategories: [
//           { id:'gedaempft', name:'Gedämpft',  dishes:[ { id:'dish-17', number:17, name:'Gedämpfte Teigtaschen',  description:'Zart gedämpfte Teigtaschen gefüllt mit Fleisch und Gewürzen',  price:7.90,  protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gedampfte-Teigtaschen.jpg' } ] },
//           { id:'gebraten',  name:'Gebraten', dishes:[ { id:'dish-18', number:18, name:'Gebratene Teigtaschen',  description:'Knusprig gebratene Teigtaschen mit Fleischfüllung',             price:7.90,  protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Teigtaschen-768x768.jpg' } ] },
//           { id:'gekocht',   name:'Gekocht',  dishes:[ { id:'dish-20', number:20, name:'Gekochte Teigtaschen',   description:'Zart gekochte Teigtaschen gefüllt mit Fleisch und Gewürzen',   price:13.90, protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gekochte-Teigaschen-768x768.jpg' } ] }
//         ]
//       },
//       {
//         id: 'hauptgerichte', name: 'Hauptgerichte',
//         subcategories: [
//           {
//             id: 'gebratene-fleischgerichte', name: 'Gebratene Fleischgerichte',
//             dishes: [
//               { id:'dish-13', number:13, name:'Kung Pao Huhn',                     description:'Gebratenes Huhn mit Erdnüssen, Gemüse und Chilisauce',                price:15.90, protein:'Hähnchen',    spice:'hot',    dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Kung-Pao-Huhn-768x768.jpg' },
//               { id:'dish-14', number:14, name:'Groß Teller Hähnchen',              description:'Große Portion gebratenes Hähnchen mit Gemüse und Gewürzen',           price:14.90, priceLabel:'14,90 / 39,90 \u20ac', protein:'Hähnchen', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gros-teller-Hahnchen-768x768.jpg' },
//               { id:'dish-16', number:16, name:'Gebratenes Lammfleisch mit Gemüse', description:'Zart gebratenes Lammfleisch mit frischem Gemüse und Gewürzen',        price:15.90, protein:'Lamm',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Lammfleisch-mit-Gemuse - 768x768.jpg' },
//               { id:'dish-21', number:21, name:'Gebratenes Lammfleisch',            description:'Zart gebratenes Lammfleisch mit aromatischen Gewürzen',               price:20.90, protein:'Lamm',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratenes-Lammfleisch-768x768.jpg' },
//               { id:'dish-25', number:25, name:'Gebratener Spinat mit Ei',          description:'Frischer Spinat gebraten mit Ei und Gewürzen',                        price:10.90, protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Spinat-mit-Ei-768x768.jpg' }
//             ]
//           },
//           {
//             id: 'grill-ofen', name: 'Grill / Ofen-Spezialitäten',
//             dishes: [
//               { id:'dish-22', number:22, name:'Lammspieße',  description:'Gegrillte Lammspieße mit uigurischen Gewürzen',              price:11.90, priceLabel:'11,90 / 14,90 \u20ac', protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:true,  availability:'always',       image:'assets/images/dishes/dish menu/Lammspiebe-768x768.jpg' },
//               { id:'dish-23', number:23, name:'Tonur Kebab', description:'Im Tonur-Ofen gegartes Lammfleisch nach uigurischer Art',     price:69.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:false, availability:'advance-order', image:'assets/images/dishes/dish menu/Tonur-Kebab-768x768.jpg' }
//             ]
//           },
//           {
//             id: 'reisgerichte', name: 'Reisgerichte',
//             dishes: [
//               { id:'dish-24', number:24, name:'Polo', description:'Uigurischer Reis mit Lammfleisch, Karotten und Gewürzen', price:14.90, protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:true, availability:'saturday-only', image:'assets/images/dishes/dish menu/Polo-768x768.jpg' }
//             ]
//           },
//           {
//             id: 'brot-spezialitaeten', name: 'Brot & Spezialitäten',
//             dishes: [
//               { id:'dish-19', number:19, name:'Göchnan', description:'Uigurisches gedämpftes Brot, serviert mit Fleisch und Gemüse', price:11.90, protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gochnan-768x768.jpg' }
//             ]
//           },
//           {
//             id: 'extras', name: 'Extras',
//             dishes: [
//               { id:'dish-30', number:30, name:'Extra Nudeln / Reis', description:'Zusätzliche Portion Nudeln oder Reis', price:2.50, protein:'Vegetarisch', spice:null, dietary:['halal','vegetarisch'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Extra-Nudeln-Reis.jpg'}
//             ]
//           }
//         ]
//       },
//       {
//         id: 'getraenke', name: 'Getränke',
//         subcategories: [
//           {
//             id: 'tee', name: 'Tee \u2014 ein Ritual, keine Beilage',
//             dishes: [
//               { id:'drink-01', name:'Uigurischer Tee', description:'Traditioneller uigurischer Schwarztee \u2014 kräftig, aromatisch, nach altem Rezept der Seidenstraße', priceLabel:'2,50 \u20ac / 7,00 \u20ac', protein:null, spice:null, dietary:['halal','vegetarisch'], badge:'Traditionell', image:null },
//               { id:'drink-02', name:'Ghulja Tee',       description:'Feiner Tee aus der uigurischen Stadt Ghulja \u2014 blumig, mild, mit warmen Gewürznoten',             priceLabel:'2,50 \u20ac / 7,00 \u20ac', protein:null, spice:null, dietary:['halal','vegetarisch'], badge:'Aus Ghulja',   image:null },
//               { id:'drink-03', name:'Grüner Tee',       description:'Leichter Grüntee \u2014 frisch und klar, perfekt zum Abschluss eines Gerichts',                       priceLabel:'2,50 \u20ac / 7,00 \u20ac', protein:null, spice:null, dietary:['halal','vegetarisch'], badge:'Leicht',       image:null },
//               { id:'drink-04', name:'Eistee',           description:'Hausgemachter Eistee \u2014 erfrischend und leicht gesüßt',                                           priceLabel:'3,50 \u20ac',               protein:null, spice:null, dietary:['halal','vegetarisch'], badge:'Kalt',         image:null }
//             ]
//           },
//           {
//             id: 'softdrinks', name: 'Softdrinks & Wasser',
//             drinks_list: [
//               { name:'Mineralwasser (klein / groß)', price:'3,00 \u20ac / 7,00 \u20ac' },
//               { name:'Fritz-Kola / Zero',            price:'3,00 \u20ac' },
//               { name:'Fritz-Rhabarber',              price:'3,00 \u20ac' },
//               { name:'Fritz-Apfelschorle',           price:'3,00 \u20ac' },
//               { name:'Fritz-Limo',                   price:'3,00 \u20ac' },
//               { name:'Fritz-Orange',                 price:'3,00 \u20ac' },
//               { name:'Fritz-Mischmasch',             price:'3,00 \u20ac' }
//             ]
//           }
//         ]
//       }
//     ]
//   };

//   /* ── State ── */
//   var activeFilter = 'alle';

//   /* ── DOM refs ── */
//   var menuBody  = document.getElementById('menuBody');
//   var menuEmpty = document.getElementById('menuEmpty');
//   var resetBtn  = document.getElementById('resetFilter');

//   /* ══════════════════════════════════════════
//      INIT — synchronous, no fetch, no loading state
//   ══════════════════════════════════════════ */
//   function init() {
//     /* Kill the skeleton immediately */
//     var loading = document.getElementById('menuLoading');
//     if (loading) loading.hidden = true;
//     var error = document.getElementById('menuError');
//     if (error) error.hidden = true;

//     renderAll();
//     initTabs();
//     initFilters();
//     handleHashScroll();
//   }

//   /* ══════════════════════════════════════════
//      RENDER
//   ══════════════════════════════════════════ */
//   function renderAll() {
//     menuBody.innerHTML = '';
//     MENU_DATA.categories.forEach(function (cat) {
//       menuBody.appendChild(renderSection(cat));
//     });
//   }

//   function renderSection(cat) {
//     var section = document.createElement('section');
//     section.className = 'menu-section';
//     section.id = cat.id;
//     section.setAttribute('aria-labelledby', 'stitle-' + cat.id);
//     section.innerHTML =
//       '<div class="section-header">' +
//         '<div class="section-accent" aria-hidden="true"></div>' +
//         '<h2 class="section-title" id="stitle-' + cat.id + '">' + esc(cat.name) + '</h2>' +
//       '</div>';
//     cat.subcategories.forEach(function (sub) {
//       section.appendChild(renderSubcategory(sub, cat.id));
//     });
//     return section;
//   }

//   function renderSubcategory(sub, catId) {
//     var wrap = document.createElement('div');
//     var label = document.createElement('div');
//     label.className = 'subcategory-label';
//     label.textContent = sub.name;
//     wrap.appendChild(label);

//     if (sub.drinks_list) { wrap.appendChild(renderSoftdrinks(sub.drinks_list)); return wrap; }

//     if (catId === 'getraenke' && sub.id === 'tee') {
//       var tl = document.createElement('div');
//       tl.className = 'tea-list';
//       sub.dishes.forEach(function (d) { tl.appendChild(renderTeaCard(d)); });
//       wrap.appendChild(tl);
//       return wrap;
//     }

//     var list = document.createElement('div');
//     list.className = 'dish-list';
//     list.setAttribute('role', 'list');
//     sub.dishes.forEach(function (d) { list.appendChild(renderDishCard(d)); });
//     wrap.appendChild(list);
//     return wrap;
//   }

//   function renderDishCard(dish) {
//     var article = document.createElement('article');
//     article.className = 'dish-card';
//     article.setAttribute('role', 'listitem');
//     article.setAttribute('data-protein', dish.protein || '');

//     var badges = '';
//     if (dish.protein) badges += '<span class="protein-tag">' + esc(dish.protein) + '</span>';
//     if (dish.dietary && dish.dietary.indexOf('halal') > -1) badges += '<span class="badge--halal-inline">\u2713 Halal</span>';
//     if (dish.availability === 'advance-order') badges += '<span class="badge--availability-advance">VORBESTELLUNG</span>';
//     if (dish.availability === 'saturday-only') badges += '<span class="badge--availability-saturday">NUR SAMSTAGS</span>';

//     var priceDisplay = dish.priceLabel || formatPrice(dish.price);
//     var imgHtml = dish.image
//       ? '<img class="dish-card__img" src="' + esc(dish.image) + '" alt="' + esc(dish.name) + '" loading="lazy" ' +
//         'onload="this.parentElement.classList.remove(\'is-loading\')" ' +
//         'onerror="this.parentElement.classList.remove(\'is-loading\');this.outerHTML=\'<div class=\\\'dish-card__img-fallback\\\'>🍽</div>\'">'
//       : '<div class="dish-card__img-fallback">🍽</div>';

//     article.innerHTML =
//       '<div class="dish-card__img-wrap' + (dish.image ? ' is-loading' : '') + '">' +
//         (dish.number ? '<span class="dish-number" aria-hidden="true">No.' + dish.number + '</span>' : '') +
//         imgHtml +
//         (dish.chefPick ? '<span class="chef-star" aria-label="Empfehlung">\u2605</span>' : '') +
//       '</div>' +
//       '<div class="dish-card__body">' +
//         '<div class="dish-card__badges">' + badges + '</div>' +
//         '<h3 class="dish-name">' + esc(dish.name) + '</h3>' +
//         (dish.description ? '<p class="dish-desc">' + esc(dish.description) + '</p>' : '') +
//         '<div class="dish-card__footer">' +
//           renderSpiceDots(dish.spice) +
//           '<span class="dish-price">' + priceDisplay + '</span>' +
//         '</div>' +
//       '</div>';

//     return article;
//   }

//   function renderTeaCard(drink) {
//     var icons = { 'Traditionell':'🫖', 'Aus Ghulja':'🌿', 'Leicht':'🍃', 'Kalt':'🧊' };
//     var a = document.createElement('article');
//     a.className = 'tea-card';
//     a.innerHTML =
//       '<div class="tea-card__accent" aria-hidden="true">' + (icons[drink.badge] || '☕') + '</div>' +
//       '<div>' +
//         (drink.badge ? '<div class="tea-badge">' + esc(drink.badge) + '</div>' : '') +
//         '<div class="tea-name">' + esc(drink.name) + '</div>' +
//         '<div class="tea-desc">' + esc(drink.description) + '</div>' +
//         '<div class="tea-price">' + (drink.priceLabel || formatPrice(drink.price)) + '</div>' +
//       '</div>';
//     return a;
//   }

//   function renderSoftdrinks(list) {
//     var div = document.createElement('div');
//     div.className = 'softdrinks-list';
//     list.forEach(function (item) {
//       var row = document.createElement('div');
//       row.className = 'softdrinks-row';
//       row.innerHTML = '<span>' + esc(item.name) + '</span><span class="softdrinks-row__price">' + esc(item.price) + '</span>';
//       div.appendChild(row);
//     });
//     return div;
//   }

//   /* ══════════════════════════════════════════
//      TABS
//   ══════════════════════════════════════════ */
//   function initTabs() {
//     var tabs = document.querySelectorAll('.tab-btn');
//     tabs.forEach(function (btn) {
//       btn.addEventListener('click', function () {
//         var target = btn.dataset.target;
//         tabs.forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
//         btn.classList.add('active');
//         btn.setAttribute('aria-selected','true');
//         if (target === 'alle') {
//           var ctrl = document.getElementById('menuControls');
//           if (ctrl) window.scrollTo({ top: ctrl.offsetTop, behavior: 'smooth' });
//         } else {
//           var sec = document.getElementById(target);
//           if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//       });
//     });

//     if ('IntersectionObserver' in window) {
//       var obs = new IntersectionObserver(function (entries) {
//         entries.forEach(function (e) {
//           if (!e.isIntersecting) return;
//           tabs.forEach(function (t) {
//             var m = t.dataset.target === e.target.id;
//             t.classList.toggle('active', m);
//             t.setAttribute('aria-selected', m ? 'true' : 'false');
//           });
//           var at = document.querySelector('.tab-btn.active');
//           if (at) at.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
//         });
//       }, { rootMargin: '-20% 0px -70% 0px' });
//       document.querySelectorAll('.menu-section').forEach(function (s) { obs.observe(s); });
//     }
//   }

//   /* ══════════════════════════════════════════
//      FILTERS
//   ══════════════════════════════════════════ */
//   function initFilters() {
//     var btns = document.querySelectorAll('.filter-btn');
//     btns.forEach(function (btn) {
//       btn.addEventListener('click', function () {
//         activeFilter = btn.dataset.filter;
//         btns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
//         btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
//         applyFilter();
//       });
//     });
//     if (resetBtn) {
//       resetBtn.addEventListener('click', function () {
//         activeFilter = 'alle';
//         btns.forEach(function (b) { var a = b.dataset.filter==='alle'; b.classList.toggle('active',a); b.setAttribute('aria-pressed',a?'true':'false'); });
//         applyFilter();
//       });
//     }
//   }

//   function applyFilter() {
//     var cards = document.querySelectorAll('.dish-card');
//     var vis = 0;
//     cards.forEach(function (c) { var show = activeFilter==='alle'||c.getAttribute('data-protein')===activeFilter; c.hidden=!show; if(show)vis++; });
//     if (menuEmpty) menuEmpty.hidden = !(vis===0 && activeFilter!=='alle');
//   }

//   /* ══════════════════════════════════════════
//      HASH SCROLL
//   ══════════════════════════════════════════ */
//   function handleHashScroll() {
//     var hash = window.location.hash.replace('#','');
//     if (!hash) return;
//     var sec = document.getElementById(hash);
//     if (sec) setTimeout(function () { sec.scrollIntoView({ behavior:'smooth', block:'start' }); }, 50);
//   }

//   /* ══════════════════════════════════════════
//      UTILS
//   ══════════════════════════════════════════ */
//   function renderSpiceDots(level) {
//     if (!level) return '<span class="spice-dots" aria-hidden="true"></span>';
//     var fill = { mild:1, medium:2, hot:3 }[level] || 0;
//     var cls  = { mild:'filled-mild', medium:'filled-medium', hot:'filled-hot' }[level] || '';
//     var dots = '';
//     for (var i = 1; i <= 3; i++) dots += '<span class="spice-dot ' + (i<=fill ? cls : '') + '"></span>';
//     var lbl = { mild:'Mild', medium:'Mittelscharf', hot:'Uigurisch scharf' }[level] || '';
//     return '<span class="spice-dots" aria-label="Schärfe: ' + lbl + '">' + dots + '</span>';
//   }

//   function formatPrice(n) {
//     if (n == null) return '';
//     return n.toFixed(2).replace('.', ',') + '\u00a0\u20ac';
//   }

//   function esc(s) {
//     if (!s) return '';
//     return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
//   }

//   /* ── Boot ── */
//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', init);
//   } else {
//     init();
//   }

// })();

/* ============================================================
   AnaYurt — Menu Page JavaScript (speisekarte.html)
   Data is embedded directly — no fetch(), works on file://
   Phase 13 · Expanded dish detail card (Figma frame 91:22)
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
              { id:'dish-01', number:1,  name:'Rindfleisch Salat',                     description:'Zartes Rindfleisch in aromatischem Chiliöl mit Gewürzen',                  price:7.90,  protein:'Rind',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Rindflesisch-in-Chiliol.jpg',
                ingredients:'Rindfleisch · Chiliöl · Zwiebeln · Koriander · Gewürze', allergens:'Enthält: Sellerie' },
              { id:'dish-02', number:2,  name:'Hühnchen Fleisch Salat mit Chilisauce', description:'Zartes Hühnchen in würziger Chilisauce',                                   price:6.90,  protein:'Hähnchen',    spice:'medium', dietary:['halal'],               chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Huhnchen-in-Chilisobe.jpg',
                ingredients:'Hähnchenfleisch · Chilisauce · Knoblauch · Ingwer · Frühlingszwiebeln', allergens:'Enthält: Soja' },
              { id:'dish-03', number:3,  name:'Auberginen Salat',                      description:'Frische Auberginen mit Gewürzen und Kräutern',                             price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Auberginen-Salat.jpg',
                ingredients:'Auberginen · Knoblauch · Sesamöl · Chili · Koriander', allergens:'Enthält: Sesam' },
              { id:'dish-04', number:4,  name:'Gurken Salat',                          description:'Frischer Gurkensalat mit leichter Würzung',                                price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Gurken-Salat-768x768.jpg',
                ingredients:'Gurken · Knoblauch · Reisessig · Sesamöl · Gewürze', allergens:'Enthält: Sesam' },
              { id:'dish-05', number:5,  name:'Uyghur Salat',                          description:'Gemüse mit würzigem Dressing nach uigurischer Art',                        price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Uyghur-Salat-768x768.jpg',
                ingredients:'Paprika · Tomaten · Zwiebeln · Gurken · Kräuter · uigurisches Dressing', allergens:'Keine bekannten Allergene' },
              { id:'dish-06', number:6,  name:'Karotten Salat',                        description:'Frische Karotten mit leichter Würzung',                                    price:4.90,  protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/Karotten-Salat-768x768.jpg',
                ingredients:'Karotten · Knoblauch · Sesamöl · Koriander · Gewürze', allergens:'Enthält: Sesam' },
              { id:'dish-28', number:28, name:'Nudelsalat mit Rindfleisch',            description:'Breite Nudeln mit zartem Fleisch, Gemüse und würziger Sauce',              price:13.90, protein:'Rind',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always',        image:'assets/images/dishes/dish menu/nudelsalat-mit-Rindfleisch-768x768.jpg',
                ingredients:'Rindfleisch · Bandnudeln · Paprika · Karotten · Chilisauce · Gewürze', allergens:'Enthält: Gluten (Weizen)' }
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
              { id:'dish-07', number:7,  name:'Gebratene Nudeln mit Bärlauch',           description:'Gebratene Nudeln mit aromatischem Bärlauch und Gewürzen',           price:13.90, protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Nudeln-mit-barlauch.jpg',
                ingredients:'Handgezogene Weizennudeln · Bärlauch · Sesamöl · Knoblauch · Gewürze', allergens:'Enthält: Gluten (Weizen), Sesam' },
              { id:'dish-12', number:12, name:'Gebratene Nudeln mit Fleisch und Gemüse', description:'Gebratene Nudeln mit frischem Gemüse und aromatischen Gewürzen',    price:13.90, protein:'Lamm',        spice:'mild',   dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Nudeln-mit-Gemuse-768x768.jpg',
                ingredients:'Handgezogene Weizennudeln · Lammfleisch · Paprika · Tomaten · Zwiebeln · Kreuzkümmel', allergens:'Enthält: Gluten (Weizen)' },
              { id:'dish-15', number:15, name:'Gebratene Hähnchen mit Nudeln',           description:'Gebratenes Hähnchen mit Nudeln und Gemüse in würziger Sauce',       price:17.90, protein:'Hähnchen',    spice:'medium', dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Hahnchen-mit-Nudeln-768x768.jpg',
                ingredients:'Hähnchenfleisch · Weizennudeln · Paprika · Zwiebeln · Sojasauce · Ingwer · Knoblauch', allergens:'Enthält: Gluten (Weizen), Soja' }
            ]
          },
          {
            id: 'leghmen', name: 'Handgezogene Uyghur-Nudeln (Leghmen)',
            dishes: [
              { id:'dish-08', number:8,  name:'ANA YURT Leghmen',          description:'Handgezogene Nudeln mit Gemüse und Lammfleisch — Hausrezept',          price:14.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:true,  availability:'always', image:'assets/images/dishes/dish menu/ANA-YURT-Leghmen-768x768.jpg',
                ingredients:'Lammfleisch · Handgezogene Weizennudeln · Paprika · Tomaten · Zwiebeln · Knoblauch · Kreuzkümmel · Chiliflocken · Koriander', allergens:'Enthält: Gluten (Weizen)' },
              { id:'dish-09', number:9,  name:'Leghmen',                   description:'Handgezogene Nudeln mit Fleisch, Gemüse und würziger Sauce',           price:12.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Leghmen-768x768.jpg',
                ingredients:'Lammfleisch · Handgezogene Weizennudeln · Gemüse · Knoblauch · Gewürze', allergens:'Enthält: Gluten (Weizen)' },
              { id:'dish-10', number:10, name:'Suyru Leghmen',             description:'Uigurische Nudelsuppe mit Lammfleisch und handgezogenen Nudeln',       price:13.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Suyru-Leghmen-768x768.jpg',
                ingredients:'Lammfleisch · Handgezogene Weizennudeln · Brühe · Tomaten · Paprika · Kreuzkümmel', allergens:'Enthält: Gluten (Weizen), Sellerie' },
              { id:'dish-11', number:11, name:'Dindin Nudeln',             description:'Kleingeschnittene Nudeln mit Rindfleisch, Gemüse und würziger Sauce',  price:13.90, protein:'Rind', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Dindin-Nudeln-768x768.jpg',
                ingredients:'Rindfleisch · Weizennudeln · Paprika · Zwiebeln · Sojaöl · Gewürze', allergens:'Enthält: Gluten (Weizen)' },
              { id:'dish-29', number:29, name:'Bandnudeln mit Rindfleisch',description:'Breite Bandnudeln mit Fleisch und würzigem Dressing',                  price:14.90, protein:'Rind', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Bandnudeln mit rindfleish.jpg',
                ingredients:'Rindfleisch · Breite Weizennudeln · Paprika · Tomaten · Gewürze · Koriander', allergens:'Enthält: Gluten (Weizen)' }
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
              { id:'dish-26', number:26, name:'Geschmorte Rindfleischsuppe mit Nudeln', description:'Kräftige Nudelsuppe mit geschmortem Rindfleisch und Gewürzen',          price:13.90, protein:'Rind', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Geschorte-Rindfleisch_Nudel-Suppe.jpg',
                ingredients:'Rindfleisch · Weizennudeln · Brühe · Tomaten · Zwiebeln · Sternanis · Gewürze', allergens:'Enthält: Gluten (Weizen), Sellerie' },
              { id:'dish-27', number:27, name:'Klassische Nudelsuppe',                  description:'Traditionelle Suppe mit Nudeln, Gemüse und aromatischen Gewürzen',     price:12.90, protein:'Lamm', spice:'mild',   dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Klassische-Nudelsuppe.jpg',
                ingredients:'Lammfleisch · Weizennudeln · Brühe · Karotten · Zwiebeln · Koriander', allergens:'Enthält: Gluten (Weizen), Sellerie' }
            ]
          }
        ]
      },
      {
        id: 'teigtaschen', name: 'Teigtaschen / Dumplings / Momo Art',
        subcategories: [
          { id:'gedaempft', name:'Gedämpft',  dishes:[ { id:'dish-17', number:17, name:'Gedämpfte Teigtaschen',  description:'Zart gedämpfte Teigtaschen gefüllt mit Fleisch und Gewürzen',  price:7.90,  protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gedampfte-Teigtaschen.jpg',
            ingredients:'Lammhackfleisch · Weizenteig · Zwiebeln · Kreuzkümmel · Koriander', allergens:'Enthält: Gluten (Weizen)' } ] },
          { id:'gebraten',  name:'Gebraten', dishes:[ { id:'dish-18', number:18, name:'Gebratene Teigtaschen',  description:'Knusprig gebratene Teigtaschen mit Fleischfüllung',             price:7.90,  protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Teigtaschen-768x768.jpg',
            ingredients:'Lammhackfleisch · Weizenteig · Zwiebeln · Kreuzkümmel · Pflanzenöl', allergens:'Enthält: Gluten (Weizen)' } ] },
          { id:'gekocht',   name:'Gekocht',  dishes:[ { id:'dish-20', number:20, name:'Gekochte Teigtaschen',   description:'Zart gekochte Teigtaschen gefüllt mit Fleisch und Gewürzen',   price:13.90, protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gekochte-Teigaschen-768x768.jpg',
            ingredients:'Lammhackfleisch · Weizenteig · Zwiebeln · Koriander · Kreuzkümmel', allergens:'Enthält: Gluten (Weizen)' } ] }
        ]
      },
      {
        id: 'hauptgerichte', name: 'Hauptgerichte',
        subcategories: [
          {
            id: 'gebratene-fleischgerichte', name: 'Gebratene Fleischgerichte',
            dishes: [
              { id:'dish-13', number:13, name:'Kung Pao Huhn',                     description:'Gebratenes Huhn mit Erdnüssen, Gemüse und Chilisauce',                price:15.90, protein:'Hähnchen',    spice:'hot',    dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Kung-Pao-Huhn-768x768.jpg',
                ingredients:'Hähnchenfleisch · Erdnüsse · Paprika · Chilischoten · Knoblauch · Ingwer · Sojasauce', allergens:'Enthält: Erdnüsse, Soja' },
              { id:'dish-14', number:14, name:'Groß Teller Hähnchen',              description:'Große Portion gebratenes Hähnchen mit Gemüse und Gewürzen',           price:14.90, priceLabel:'14,90 / 39,90 \u20ac', protein:'Hähnchen', spice:'medium', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gros-teller-Hahnchen-768x768.jpg',
                ingredients:'Hähnchen (klein 14,90 € / groß 39,90 €) · Paprika · Tomaten · Zwiebeln · Gewürze', allergens:'Keine bekannten Allergene' },
              { id:'dish-16', number:16, name:'Gebratenes Lammfleisch mit Gemüse', description:'Zart gebratenes Lammfleisch mit frischem Gemüse und Gewürzen',        price:15.90, protein:'Lamm',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Lammfleisch-mit-Gemuse - 768x768.jpg',
                ingredients:'Lammfleisch · Paprika · Zwiebeln · Tomaten · Kreuzkümmel · Koriander', allergens:'Keine bekannten Allergene' },
              { id:'dish-21', number:21, name:'Gebratenes Lammfleisch',            description:'Zart gebratenes Lammfleisch mit aromatischen Gewürzen',               price:20.90, protein:'Lamm',        spice:'medium', dietary:['halal'],               chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratenes-Lammfleisch-768x768.jpg',
                ingredients:'Lammfleisch · Zwiebeln · Paprika · Kreuzkümmel · Chiliflocken · Koriander', allergens:'Keine bekannten Allergene' },
              { id:'dish-25', number:25, name:'Gebratener Spinat mit Ei',          description:'Frischer Spinat gebraten mit Ei und Gewürzen',                        price:10.90, protein:'Vegetarisch', spice:'mild',   dietary:['halal','vegetarisch'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gebratene-Spinat-mit-Ei-768x768.jpg',
                ingredients:'Frischer Spinat · Eier · Knoblauch · Sesamöl · Salz · Gewürze', allergens:'Enthält: Eier, Sesam' }
            ]
          },
          {
            id: 'grill-ofen', name: 'Grill / Ofen-Spezialitäten',
            dishes: [
              { id:'dish-22', number:22, name:'Lammspieße',  description:'Gegrillte Lammspieße mit uigurischen Gewürzen',              price:11.90, priceLabel:'11,90 / 14,90 \u20ac', protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:true,  availability:'always',       image:'assets/images/dishes/dish menu/Lammspiebe-768x768.jpg',
                ingredients:'Lammfleisch · Kreuzkümmel · Chiliflocken · Salz · Koriander (ohne Salat+Reis 11,90 € / mit Salat+Reis 14,90 €)', allergens:'Keine bekannten Allergene' },
              { id:'dish-23', number:23, name:'Tonur Kebab', description:'Im Tonur-Ofen gegartes Lammfleisch nach uigurischer Art',     price:69.90, protein:'Lamm', spice:'medium', dietary:['halal'], chefPick:false, availability:'advance-order', image:'assets/images/dishes/dish menu/Tonur-Kebab-768x768.jpg',
                ingredients:'Ganzes Lammfleisch · Tonur-Ofen-Gewürze · Kreuzkümmel · Koriander — Einen Tag Vorbestellung erforderlich', allergens:'Keine bekannten Allergene' }
            ]
          },
          {
            id: 'reisgerichte', name: 'Reisgerichte',
            dishes: [
              { id:'dish-24', number:24, name:'Polo', description:'Uigurischer Reis mit Lammfleisch, Karotten und Gewürzen', price:14.90, protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:true, availability:'saturday-only', image:'assets/images/dishes/dish menu/Polo-768x768.jpg',
                ingredients:'Lammfleisch · Basmati-Reis · Karotten · Zwiebeln · Rosinen · Kreuzkümmel · Gewürze — Nur samstags zubereitet', allergens:'Keine bekannten Allergene' }
            ]
          },
          {
            id: 'brot-spezialitaeten', name: 'Brot & Spezialitäten',
            dishes: [
              { id:'dish-19', number:19, name:'Göchnan', description:'Uigurisches gedämpftes Brot, serviert mit Fleisch und Gemüse', price:11.90, protein:'Lamm', spice:'mild', dietary:['halal'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Gochnan-768x768.jpg',
                ingredients:'Lammfleisch · Weizenteig (gedämpft) · Paprika · Zwiebeln · Gewürze', allergens:'Enthält: Gluten (Weizen)' }
            ]
          },
          {
            id: 'extras', name: 'Extras',
            dishes: [
              { id:'dish-30', number:30, name:'Extra Nudeln / Reis', description:'Zusätzliche Portion Nudeln oder Reis', price:2.50, protein:'Vegetarisch', spice:null, dietary:['halal','vegetarisch'], chefPick:false, availability:'always', image:'assets/images/dishes/dish menu/Extra-Nudeln-Reis.jpg',
                ingredients:'Weizennudeln oder Reis', allergens:'Nudeln: Enthält Gluten (Weizen) · Reis: Keine bekannten Allergene' }
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
    var loading = document.getElementById('menuLoading');
    if (loading) loading.hidden = true;
    var error = document.getElementById('menuError');
    if (error) error.hidden = true;

    buildModal();
    renderAll();
    initTabs();
    initFilters();
    handleHashScroll();
  }

  /* ══════════════════════════════════════════
     DISH DETAIL MODAL (Figma frame 91:22)
  ══════════════════════════════════════════ */
  function buildModal() {
    var overlay = document.createElement('div');
    overlay.id = 'dishModal';
    overlay.className = 'dish-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'modalDishName');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
      '<div class="dish-modal" id="dishModalSheet">' +
        '<div class="dish-modal__photo-wrap" id="modalPhotoWrap">' +
          '<img class="dish-modal__photo" id="modalPhoto" src="" alt="" />' +
          '<div class="dish-modal__photo-gradient" aria-hidden="true"></div>' +
          '<button class="dish-modal__close" id="modalClose" aria-label="Schließen">✕</button>' +
        '</div>' +
        '<div class="dish-modal__body">' +
          '<div class="dish-modal__badges" id="modalBadges"></div>' +
          '<span class="dish-modal__number" id="modalNumber"></span>' +
          '<h2 class="dish-modal__title" id="modalDishName"></h2>' +
          '<div class="dish-modal__gold-bar" aria-hidden="true"></div>' +
          '<p class="dish-modal__desc" id="modalDesc"></p>' +
          '<div class="dish-modal__divider" aria-hidden="true"></div>' +
          '<p class="dish-modal__section-label">ZUTATEN &amp; ALLERGENE</p>' +
          '<p class="dish-modal__ingredients" id="modalIngredients"></p>' +
          '<p class="dish-modal__allergens" id="modalAllergens"></p>' +
          '<div class="dish-modal__divider" aria-hidden="true"></div>' +
          '<div class="dish-modal__footer">' +
            '<span class="dish-modal__price" id="modalPrice"></span>' +
            '<a class="dish-modal__cta" href="https://www.lieferando.de/speisekarte/ana-yurt-uyghur" target="_blank" rel="noopener noreferrer" aria-label="Jetzt online bestellen (öffnet in neuem Tab)">Jetzt bestellen →</a>' +
          '</div>' +
          '<p class="dish-modal__cta-note">Lieferung via Lieferando · Uber Eats</p>' +
          '<div class="dish-modal__handle" aria-hidden="true"></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    /* Close on overlay click */
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    /* Close button */
    document.getElementById('modalClose').addEventListener('click', closeModal);

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  function openModal(dish) {
    var overlay = document.getElementById('dishModal');
    if (!overlay) return;

    /* Photo */
    var photo = document.getElementById('modalPhoto');
    var wrap  = document.getElementById('modalPhotoWrap');
    if (dish.image) {
      photo.src = dish.image;
      photo.alt = dish.name;
      photo.hidden = false;
      wrap.classList.remove('dish-modal__photo-wrap--no-image');
    } else {
      photo.src = '';
      photo.hidden = true;
      wrap.classList.add('dish-modal__photo-wrap--no-image');
    }

    /* Badges */
    var badgesEl = document.getElementById('modalBadges');
    var badges = '';
    if (dish.protein) badges += '<span class="dish-modal__badge dish-modal__badge--protein">' + esc(dish.protein) + '</span>';
    if (dish.dietary && dish.dietary.indexOf('halal') > -1) badges += '<span class="dish-modal__badge dish-modal__badge--halal">\u2713 Halal</span>';
    if (dish.dietary && dish.dietary.indexOf('vegetarisch') > -1 && dish.protein === 'Vegetarisch') badges += '<span class="dish-modal__badge dish-modal__badge--veg">Vegetarisch</span>';
    if (dish.availability === 'advance-order') badges += '<span class="dish-modal__badge dish-modal__badge--special">VORBESTELLUNG</span>';
    if (dish.availability === 'saturday-only') badges += '<span class="dish-modal__badge dish-modal__badge--special">NUR SAMSTAGS</span>';
    badgesEl.innerHTML = badges;

    /* Number, name, desc */
    document.getElementById('modalNumber').textContent = dish.number ? 'Nr. ' + dish.number : '';
    document.getElementById('modalDishName').textContent = dish.name || '';
    document.getElementById('modalDesc').textContent = dish.description || '';

    /* Ingredients & allergens */
    document.getElementById('modalIngredients').textContent = dish.ingredients || '';
    var allerEl = document.getElementById('modalAllergens');
    allerEl.textContent = dish.allergens || '';
    allerEl.hidden = !dish.allergens;

    /* Price */
    document.getElementById('modalPrice').textContent = dish.priceLabel || formatPrice(dish.price);

    /* Show */
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-open');
    document.body.classList.add('modal-open');

    /* Trap focus on close button */
    setTimeout(function () {
      var closeBtn = document.getElementById('modalClose');
      if (closeBtn) closeBtn.focus();
    }, 50);
  }

  function closeModal() {
    var overlay = document.getElementById('dishModal');
    if (!overlay) return;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
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
    article.setAttribute('tabindex', '0');
    article.setAttribute('aria-label', 'Details zu ' + dish.name + ' anzeigen');
    article.style.cursor = 'pointer';

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

    /* Open expanded card on click or keyboard */
    function handleOpen(e) {
      /* Don't fire if user is clicking a link inside the card */
      if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
      if (e.type === 'keydown') e.preventDefault();
      openModal(dish);
    }
    article.addEventListener('click', handleOpen);
    article.addEventListener('keydown', handleOpen);

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