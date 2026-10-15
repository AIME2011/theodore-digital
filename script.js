"use strict";

/* ==========================================================
   1. INFORMATIONS À COMPLÉTER
   Tout ce qui est vide s'affiche comme un espace réservé.
   ========================================================== */
const CONFIG = {
  nom: "Théocratie",
  whatsapp: "22871594637", // chiffres uniquement, avec l'indicatif du pays
  telephone: "+228 71 59 46 37", // texte affiché au public
  adresse: "Lomé, Togo",
  devise: "FCFA",      // affichée après chaque prix
  horaires: [["Lundi – Vendredi", "10 h – 20 h"], ["Samedi", "11 h – 20 h"], ["Dimanche", "Fermé"]],
  heroImage: "",      // photo de la bannière (chemin du fichier)
  photoTheodore: "images/photo-proprietaire.png",  // photo de Théodore
  apropos: ["Je m'appelle ALOWETE Kossi Théo. Je vous accueille à Lomé pour la vente et la réparation de téléphones, ordinateurs, télévisions et accessoires électroniques."]
};

/* ==========================================================
   2. PRODUITS
   Pour ajouter un produit, copier une ligne et la modifier.
   cat : telephones | ordinateurs | televisions | accessoires
   prix : un nombre (ex. 150000), ou null tant qu'il n'est pas défini
   image : chemin de la photo du produit
   ========================================================== */
const CATS = { iphones: "iPhones", ordinateurs: "Ordinateurs", androids: "Téléphones Android", televisions: "Télévisions", accessoires: "Accessoires" };
const PRODUITS = [
  { cat: "iphones", nom: "Apple iPhone 13 Pro / 13 Pro Max", prix: null, image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Apple_iPhone_13_Pro_and_13_Pro_Max.jpg/960px-Apple_iPhone_13_Pro_and_13_Pro_Max.jpg", photoCredit: "Simon Waldherr", photoSource: "https://commons.wikimedia.org/wiki/File:Apple_iPhone_13_Pro_and_13_Pro_Max.jpg" },
  { cat: "iphones", nom: "Apple iPhone 12", prix: null, image: "images/iphone-12.jpg", photoIllustrative: true },
  { cat: "iphones", nom: "Apple iPhone 14", prix: null, image: "images/iphone-14.jpg", photoIllustrative: true },
  { cat: "iphones", nom: "Apple iPhone 15", prix: null, image: "images/iphone-15.jpg", photoIllustrative: true },
  { cat: "ordinateurs", nom: "HP Laptop 15-da1xxx", prix: null, image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/HP_Laptop_15-da1xxx.jpg/960px-HP_Laptop_15-da1xxx.jpg", photoCredit: "খাঁ শুভেন্দু", photoSource: "https://commons.wikimedia.org/wiki/File:HP_Laptop_15-da1xxx.jpg" },
  { cat: "ordinateurs", nom: "HP EliteBook 840", prix: null, image: "images/ordinateur-hp-elitebook.jpg", photoIllustrative: true },
  { cat: "ordinateurs", nom: "Dell Latitude 5420", prix: null, image: "images/ordinateur-dell-latitude.jpg", photoIllustrative: true },
  { cat: "ordinateurs", nom: "Dell XPS 13", prix: null, image: "images/ordinateur-dell-xps.jpg", photoIllustrative: true },
  { cat: "ordinateurs", nom: "Lenovo ThinkPad T14", prix: null, image: "images/ordinateur-thinkpad.jpg", photoIllustrative: true },
  { cat: "ordinateurs", nom: "Lenovo IdeaPad 3", prix: null, image: "images/ordinateur-ideapad.jpg", photoIllustrative: true },
  { cat: "ordinateurs", nom: "ASUS VivoBook 15", prix: null, image: "images/ordinateur-asus.jpg", photoIllustrative: true },
  { cat: "ordinateurs", nom: "Acer Aspire 5", prix: null, image: "images/ordinateur-acer.jpg", photoIllustrative: true },
  { cat: "ordinateurs", nom: "Apple MacBook Air", prix: null, image: "images/exemple-ordinateur.jpg", photoIllustrative: true },
  { cat: "androids", nom: "Samsung Galaxy A15", prix: null, image: "images/android-samsung-a15.jpg", photoIllustrative: true },
  { cat: "androids", nom: "Samsung Galaxy A25", prix: null, image: "images/android-samsung-a25.jpg", photoIllustrative: true },
  { cat: "androids", nom: "Samsung Galaxy S23", prix: null, image: "images/android-samsung-s23.jpg", photoIllustrative: true },
  { cat: "androids", nom: "Xiaomi Redmi Note 13", prix: null, image: "images/android-xiaomi-redmi.jpg", photoIllustrative: true },
  { cat: "androids", nom: "Tecno Spark 20", prix: null, image: "images/android-tecno-spark.jpg", photoIllustrative: true },
  { cat: "androids", nom: "Infinix Hot 40", prix: null, image: "images/android-infinix-hot.jpg", photoIllustrative: true },
  { cat: "televisions", nom: "Téléviseur Samsung", prix: null, image: "images/television-samsung.jpg", photoIllustrative: true },
  { cat: "televisions", nom: "Téléviseur LG", prix: null, image: "images/television-lg.jpg", photoIllustrative: true },
  { cat: "televisions", nom: "Téléviseur Sony", prix: null, image: "images/television-sony.jpg", photoIllustrative: true },
  { cat: "televisions", nom: "Téléviseur TCL", prix: null, image: "images/television-tcl.jpg", photoIllustrative: true },
  { cat: "televisions", nom: "Téléviseur Hisense", prix: null, image: "images/television-hisense.jpg", photoIllustrative: true },
  { cat: "televisions", nom: "Téléviseur Toshiba", prix: null, image: "images/television-toshiba.jpg", photoIllustrative: true },
  { cat: "televisions", nom: "Téléviseur Philips", prix: null, image: "images/television-philips.jpg", photoIllustrative: true },
  { cat: "televisions", nom: "Téléviseur Panasonic", prix: null, image: "images/television-panasonic.jpg", photoIllustrative: true },
  { cat: "televisions", nom: "Téléviseur Sharp", prix: null, image: "images/television-sharp.jpg", photoIllustrative: true },
  { cat: "televisions", nom: "Téléviseur Skyworth", prix: null, image: "images/television-skyworth.jpg", photoIllustrative: true },
  { cat: "accessoires", nom: "Casque JBL TL0846", prix: null, image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/2023_S%C5%82uchawki_JBL_TL0846_%281%29.jpg/960px-2023_S%C5%82uchawki_JBL_TL0846_%281%29.jpg", photoCredit: "Jacek Halicki", photoSource: "https://commons.wikimedia.org/wiki/File:2023_S%C5%82uchawki_JBL_TL0846_(1).jpg", photoLicense: "CC BY-SA 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { cat: "accessoires", nom: "Apple AirPods (2e génération)", prix: null, image: "images/accessoire-airpods-2.jpg", photoIllustrative: true, photoCredit: "Gameplay010unused", photoSource: "https://commons.wikimedia.org/wiki/File:Second_generation_AirPods.jpg", photoLicense: "CC BY 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by/4.0/" },
  { cat: "accessoires", nom: "Apple AirPods (3e génération)", prix: null, image: "images/accessoire-airpods-3.jpg", photoIllustrative: true, photoCredit: "Yovt", photoSource: "https://commons.wikimedia.org/wiki/File:AirPods_3.jpg", photoLicense: "CC0", photoLicenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/" },
  { cat: "accessoires", nom: "Apple AirPods (4e génération)", prix: null, image: "images/accessoire-airpods-4.jpg", photoIllustrative: true, photoCredit: "茅野ふたば", photoSource: "https://commons.wikimedia.org/wiki/File:AirPods_4_and_AirPods_Pro_2.jpg", photoLicense: "CC BY-SA 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { cat: "accessoires", nom: "Apple AirPods Pro (2e génération)", prix: null, image: "images/accessoire-airpods-pro-2.jpg", photoIllustrative: true, photoCredit: "Hajoon0102", photoSource: "https://commons.wikimedia.org/wiki/File:AirPods_Pro_(2nd_generation).jpg", photoLicense: "CC BY-SA 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { cat: "accessoires", nom: "Apple AirPods Max", prix: null, image: "images/accessoire-airpods-max.jpg", photoIllustrative: true, photoCredit: "SimonWaldherr", photoSource: "https://commons.wikimedia.org/wiki/File:Apple_AirPods_Max_3.jpg", photoLicense: "CC BY-SA 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { cat: "accessoires", nom: "Samsung Galaxy Buds FE", prix: null, image: "images/accessoire-galaxy-buds-fe.jpg", photoIllustrative: true, photoCredit: "Gannu03", photoSource: "https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_Buds_FE_and_Samsung_Galaxy_Buds2_Pro.jpg", photoLicense: "CC BY-SA 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { cat: "accessoires", nom: "Samsung Galaxy Buds2 Pro", prix: null, image: "images/accessoire-galaxy-buds-fe.jpg", photoIllustrative: true, photoCredit: "Gannu03", photoSource: "https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_Buds_FE_and_Samsung_Galaxy_Buds2_Pro.jpg", photoLicense: "CC BY-SA 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { cat: "accessoires", nom: "Samsung Galaxy Buds3 / Buds3 Pro", prix: null, image: "images/accessoire-galaxy-buds3.jpg", photoIllustrative: true, photoCredit: "ScribblingGeek", photoSource: "https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_Z_Flip_6_and_Buds3.jpg", photoLicense: "CC BY-SA 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { cat: "accessoires", nom: "Casque audio sans fil JBL Tune", prix: null, image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/JBL_LIVE_650_BTNC_%28Over-Ear_Noise_Cancelling_Headphone%29._%2851127342181%29.jpg/960px-JBL_LIVE_650_BTNC_%28Over-Ear_Noise_Cancelling_Headphone%29._%2851127342181%29.jpg", photoIllustrative: true, photoCredit: "MIKI Yoshihito", photoSource: "https://commons.wikimedia.org/wiki/File:JBL_LIVE_650_BTNC_(Over-Ear_Noise_Cancelling_Headphone)._(51127342181).jpg", photoLicense: "CC BY 2.0", photoLicenseUrl: "https://creativecommons.org/licenses/by/2.0/" },
  { cat: "accessoires", nom: "Casque audio Sony WH-CH520", prix: null, image: "images/accessoire-casque-sony.jpg", photoIllustrative: true, photoCredit: "RPSkokie", photoSource: "https://commons.wikimedia.org/wiki/File:Sony_WH-CH510_Bluetooth_Over-Ear_Headphone.jpg", photoLicense: "CC BY-SA 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" }
];

/* ==========================================================
   3. RÉPARATIONS
   services : exemples de pannes fréquentes à vérifier au diagnostic
   ========================================================== */
const REPARATIONS = [
  { cat: "telephones", titre: "Téléphones", image: "images/reparation-telephone.jpg", services: ["Écran cassé ou tactile qui ne répond plus", "Batterie qui se décharge rapidement", "Problème de charge ou de connecteur"] },
  { cat: "ordinateurs", titre: "Ordinateurs", image: "images/reparation-ordinateur.jpg", services: ["Ordinateur lent ou qui ne démarre plus", "Écran ou clavier endommagé", "Batterie ou chargeur défectueux"] },
  { cat: "televisions", titre: "Télévisions", image: "images/reparation-television.jpg", services: ["Téléviseur qui ne s’allume plus", "Problème d’image ou de son", "Ports HDMI ou connexion qui ne fonctionnent plus"] }
];

/* ==========================================================
   4. FONCTIONS (pas besoin d'y toucher)
   ========================================================== */
const $ = s => document.querySelector(s);
const PATHS = {
  telephones:  '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  ordinateurs: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
  televisions: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  accessoires: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  photo:       '<rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M9 6l1.5-2h3L15 6"/>',
  user:        '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'
};
const ico = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PATHS[k]}</svg>`;
const todo = t => `<span class="todo">${t}</span>`;
const fmt = p => p.toLocaleString("fr-FR") + (CONFIG.devise ? " " + CONFIG.devise : "");
const wa = msg => `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
const waBtn = (msg, label) => `<a class="btn btn-p" target="_blank" rel="noopener" href="${wa(msg)}">${label}</a>`;

function tabs(el, items, onChange) {
  el.innerHTML = Object.entries({ tous: "Tous", ...items })
    .map(([k, v], i) => `<button class="tab${i ? "" : " on"}" data-k="${k}">${v}</button>`).join("");
  el.onclick = e => {
    const b = e.target.closest(".tab");
    if (!b) return;
    el.querySelectorAll(".tab").forEach(t => t.classList.toggle("on", t === b));
    onChange(b.dataset.k);
  };
}

function renderShop(k = "tous") {
  $("#shop").innerHTML = PRODUITS.filter(p => k === "tous" || p.cat === k).map(p => {
    return `
    <article class="card">
      <div class="ph">${p.image ? `<img src="${p.image}" alt="${p.photoIllustrative ? "Photo illustrative pour " : "Photo du "}${p.nom}" loading="lazy">` : ico(p.cat)}</div>
      ${p.photoIllustrative ? `<small class="photo-note">Photo d’illustration — ne représente pas nécessairement la marque ou le modèle vendu</small>` : ""}
      ${p.photoSource ? `<small class="photo-credit">Photo : <a href="${p.photoSource}" target="_blank" rel="noopener">${p.photoCredit}, Wikimedia Commons</a> — <a href="${p.photoLicenseUrl || "https://creativecommons.org/licenses/by-sa/4.0/"}" target="_blank" rel="noopener">${p.photoLicense || "CC BY-SA 4.0"}</a></small>` : ""}
      <div class="body">
        <span class="cat">${CATS[p.cat]}</span>
        <h3>${p.nom}</h3>
        <span class="availability">${p.cat === "iphones" ? "Exemple — qualité, état et stock à confirmer" : "Exemple — stock à confirmer"}</span>
        ${p.prix == null ? "" : `<div class="price">${fmt(p.prix)}</div>`}
        ${waBtn(`Bonjour, je souhaite connaître le prix et la disponibilité de : ${p.nom}.`, "Prix et disponibilité sur WhatsApp")}
      </div>
    </article>`;
  }).join("");
}

function renderRepairs() {
  $("#repairs").innerHTML = REPARATIONS.map(r => {
    const list = r.services.map(s => `<li>${s}</li>`).join("");
    return `
    <article class="card rep">
      <div class="ph">${r.image ? `<img src="${r.image}" alt="Illustration d'une réparation de ${r.titre.toLowerCase()}" loading="lazy">` : ico(r.cat)}</div>
      <span class="photo-note">Photo illustrative — pas une intervention de l'atelier</span>
      <div class="body">
        <h3>${r.titre}</h3>
        <span class="cat">Pannes fréquentes — prise en charge à confirmer après diagnostic</span>
        <ul>${list}</ul>
        ${waBtn(`Bonjour, je souhaite un diagnostic pour mon appareil : ${r.titre.toLowerCase()}.`, "Demander un diagnostic")}
      </div>
    </article>`;
  }).join("");
}

function renderAbout() {
  $("#portrait").innerHTML = CONFIG.photoTheodore
    ? `<img src="${CONFIG.photoTheodore}" alt="Théodore">`
    : `${ico("user")}<small>Photo de Théodore à ajouter</small>`;
  $("#about-text").innerHTML = CONFIG.apropos.length
    ? CONFIG.apropos.map(t => `<p>${t}</p>`).join("")
    : `<p>${todo("Présentation de Théodore et de son entreprise à rédiger")}</p>`;
}

function renderContact() {
  const tel = CONFIG.telephone;
  $("#contact-grid").innerHTML = `
    <div class="card box"><h3>WhatsApp</h3><p>Écrivez-nous directement par message.</p>${waBtn("Bonjour, j'aimerais avoir des informations.", "Écrire sur WhatsApp")}</div>
    <div class="card box"><h3>Téléphone</h3><p>${tel ? `<a href="tel:${tel.replace(/[^\d+]/g, "")}">${tel}</a>` : todo("Numéro à renseigner")}</p></div>
    <div class="card box"><h3>Adresse</h3><p>${CONFIG.adresse || todo("Adresse à renseigner")}</p></div>
    <div class="card box"><h3>Moyens de paiement</h3><p>Espèces (cash), TMoney ou Flooz.</p></div>
    <div class="card box"><h3>Horaires</h3><dl class="hours">${CONFIG.horaires.map(([j, h]) => `<dt>${j}</dt><dd>${h || todo("À renseigner")}</dd>`).join("")}</dl></div>`;
}

/* ===== Démarrage ===== */
$("#brand").textContent = $("#brand-foot").textContent = CONFIG.nom;
$("#year").textContent = new Date().getFullYear();
$("#faq-whatsapp").href = wa("Bonjour, j'aimerais avoir des informations sur vos appareils ou vos services.");
if (CONFIG.heroImage) {
  $("#accueil").style.backgroundImage = `linear-gradient(rgba(10,26,58,.78),rgba(10,26,58,.78)), url("${CONFIG.heroImage}")`;
}
tabs($("#shop-tabs"), CATS, renderShop);
renderShop(); renderRepairs(); renderAbout(); renderContact();

/* Menu mobile */
const menu = $("#menu"), burger = $("#burger");
burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
menu.onclick = e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } };