/* ============================================================
   TOUT À FER — Mécanique du site (galerie, filtres, menu, formulaire)
   Le contenu se modifie dans config.js, pas ici.
   ============================================================ */

/* ---------- Galerie ---------- */
const gallery = document.getElementById("gallery");
const filters = document.getElementById("filters");

GALERIE.forEach(function (item, i) {
  const fig = document.createElement("figure");
  fig.className = "gallery-item";
  fig.dataset.cat = item.cat;
  fig.dataset.index = i;
  fig.setAttribute("role", "button");
  fig.setAttribute("tabindex", "0");
  fig.setAttribute("aria-label", "Agrandir : " + item.alt);

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;
  img.loading = "lazy";
  img.width = 1000;
  img.height = 750;
  img.addEventListener("error", function () {
    fig.replaceChildren(makePlaceholder(item.src));
    fig.style.cursor = "default";
    fig.removeAttribute("role");
    fig.removeAttribute("tabindex");
  });

  const cap = document.createElement("figcaption");
  cap.textContent = item.alt;

  fig.append(img, cap);
  fig.addEventListener("click", function () { openLightbox(i); });
  fig.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); }
  });
  gallery.appendChild(fig);
});

/* Bloc affiché quand la photo n'existe pas encore dans assets/img/ */
function makePlaceholder(src) {
  const div = document.createElement("div");
  div.className = "img-placeholder";
  const name = src.split("/").pop();
  div.innerHTML = "<span>Photo à venir</span><strong>" + name + "</strong>";
  return div;
}

/* Boutons de filtre */
CATEGORIES.forEach(function (cat, i) {
  const btn = document.createElement("button");
  btn.className = "filter-btn";
  btn.textContent = cat.label;
  btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
  btn.addEventListener("click", function () {
    filters.querySelectorAll(".filter-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", "false");
    });
    btn.setAttribute("aria-pressed", "true");
    gallery.querySelectorAll(".gallery-item").forEach(function (fig) {
      const show = cat.id === "tous" || fig.dataset.cat === cat.id;
      fig.classList.toggle("hidden", !show);
    });
  });
  filters.appendChild(btn);
});

/* ---------- Visionneuse : agrandir les images au clic ---------- */
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.setAttribute("role", "dialog");
lightbox.setAttribute("aria-modal", "true");
lightbox.innerHTML =
  '<button class="lightbox-close" aria-label="Fermer">&times;</button>' +
  '<button class="lightbox-nav lightbox-prev" aria-label="Image précédente">&#8249;</button>' +
  '<button class="lightbox-nav lightbox-next" aria-label="Image suivante">&#8250;</button>' +
  '<figure><img alt=""><figcaption></figcaption></figure>';
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector("img");
const lbCap = lightbox.querySelector("figcaption");
let lbCurrent = 0;

/* Ordre de navigation = uniquement les images actuellement visibles (filtre en cours) */
function visibleIndexes() {
  return GALERIE.map(function (_, i) { return i; }).filter(function (i) {
    const fig = gallery.querySelector('.gallery-item[data-index="' + i + '"]');
    return fig && !fig.classList.contains("hidden");
  });
}

function showLightbox(index) {
  lbCurrent = index;
  lbImg.src = GALERIE[index].src;
  lbImg.alt = GALERIE[index].alt;
  lbCap.textContent = GALERIE[index].alt;
}

function openLightbox(index) {
  showLightbox(index);
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function step(dir) {
  const vis = visibleIndexes();
  const pos = vis.indexOf(lbCurrent);
  if (pos === -1) return;
  showLightbox(vis[(pos + dir + vis.length) % vis.length]);
}

lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox-prev").addEventListener("click", function (e) { e.stopPropagation(); step(-1); });
lightbox.querySelector(".lightbox-next").addEventListener("click", function (e) { e.stopPropagation(); step(1); });
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox || e.target.tagName === "FIGURE") closeLightbox();
});
document.addEventListener("keydown", function (e) {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowLeft") step(-1);
  else if (e.key === "ArrowRight") step(1);
});

/* ---------- Services ---------- */
const servicesGrid = document.getElementById("services-grid");
SERVICES.forEach(function (s) {
  const card = document.createElement("div");
  card.className = "service-card";
  card.innerHTML =
    '<div class="icon" aria-hidden="true">' + s.icone + "</div>" +
    "<h3>" + s.titre + "</h3>" +
    "<p>" + s.texte + "</p>";
  servicesGrid.appendChild(card);
});

/* ---------- Avis ---------- */
const reviewsGrid = document.getElementById("reviews-grid");
AVIS.forEach(function (a) {
  const card = document.createElement("div");
  card.className = "review-card";
  card.innerHTML =
    (a.fictif ? '<span class="review-flag">[À REMPLACER — avis fictif]</span>' : "") +
    '<div class="review-stars" aria-label="5 étoiles sur 5">★★★★★</div>' +
    '<p class="review-text">« ' + a.texte + " »</p>" +
    '<p class="review-author">' + a.auteur + "</p>";
  reviewsGrid.appendChild(card);
});

/* ---------- Communes ---------- */
const zoneList = document.getElementById("zone-list");
COMMUNES.forEach(function (c) {
  const li = document.createElement("li");
  li.textContent = c;
  zoneList.appendChild(li);
});

/* ---------- Photo de l'atelier : placeholder si absente ---------- */
document.querySelectorAll(".about-img img").forEach(function (img) {
  img.addEventListener("error", function () {
    img.replaceWith(makePlaceholder(img.getAttribute("src")));
  });
});

/* ---------- Menu mobile ---------- */
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", function () {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});
nav.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Formulaire → email pré-rempli ---------- */
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = document.getElementById("f-nom").value.trim();
  const tel = document.getElementById("f-tel").value.trim();
  const msg = document.getElementById("f-msg").value.trim();
  const sujet = "Demande de devis — " + nom;
  const corps =
    "Bonjour,\n\n" + msg + "\n\n" +
    "Nom : " + nom + "\n" +
    "Téléphone : " + tel + "\n\n" +
    "(Message envoyé depuis le site Tout à fer)";
  window.location.href =
    "mailto:" + CONTACT_EMAIL +
    "?subject=" + encodeURIComponent(sujet) +
    "&body=" + encodeURIComponent(corps);
});

/* ---------- Année du footer ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
