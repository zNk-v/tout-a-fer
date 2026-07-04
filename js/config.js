/* ============================================================
   TOUT À FER — CONTENU DU SITE
   C'est ICI qu'on modifie les textes des listes du site :
   galerie, services, avis clients, communes.
   Pas besoin de toucher au reste du code.
   ============================================================ */

/* ---------- GALERIE ----------
   Pour ajouter une photo : déposer le fichier dans assets/img/
   puis ajouter une ligne ici.
   cat : "verrieres" | "portails" | "escaliers" | "marquises" | "mobilier"
*/
const GALERIE = [
  { src: "assets/img/verriere-01.jpg", cat: "verrieres", alt: "Verrière d'atelier séparant une cuisine, structure acier et porte vitrée" },
  { src: "assets/img/verriere-02.jpg", cat: "verrieres", alt: "Ensemble de portes-verrières en acier noir, style atelier industriel" },
  { src: "assets/img/verriere-03.jpg", cat: "verrieres", alt: "Verrière intérieure acier noir sur mesure" },
  { src: "assets/img/verriere-04.jpg", cat: "verrieres", alt: "Verrière séparant une cuisine, vue depuis l'escalier" },
  { src: "assets/img/verriere-05.jpg", cat: "verrieres", alt: "Verrière d'escalier en acier avec découpe sur mesure" },
  { src: "assets/img/verriere-06.jpg", cat: "verrieres", alt: "Verrière de séparation dans une pièce à vivre" },
  { src: "assets/img/porte-01.jpg",    cat: "verrieres", alt: "Porte coulissante acier et verre pour une cuisine ouverte" },
  { src: "assets/img/porte-02.jpg",    cat: "verrieres", alt: "Double porte-fenêtre en acier noir vitrée" },
  { src: "assets/img/porte-03.jpg",    cat: "verrieres", alt: "Porte coulissante acier-verre, séparation de pièce" },

  { src: "assets/img/portail-01.jpg",  cat: "portails",  alt: "Portail coulissant en acier avec pointes de défense" },
  { src: "assets/img/portail-02.jpg",  cat: "portails",  alt: "Portail battant en acier devant une maison de ville" },
  { src: "assets/img/portail-03.jpg",  cat: "portails",  alt: "Portillon en acier avec motif losange, finition anthracite" },

  { src: "assets/img/escalier-01.jpg", cat: "escaliers", alt: "Escalier avec marches rétroéclairées et rambarde acier géométrique" },
  { src: "assets/img/escalier-02.jpg", cat: "escaliers", alt: "Escalier extérieur en acier à marches galvanisées" },

  { src: "assets/img/marquise-01.jpg", cat: "marquises", alt: "Marquise métal et verre couvrant une cour intérieure" },
  { src: "assets/img/marquise-02.jpg", cat: "marquises", alt: "Marquise vitrée sur ossature acier, protection d'entrée" },

  { src: "assets/img/mobilier-01.jpg", cat: "mobilier",  alt: "Table basse plateau bois et piètement acier sur mesure" },
];

/* Les boutons de filtre de la galerie */
const CATEGORIES = [
  { id: "tous",      label: "Tout voir" },
  { id: "verrieres", label: "Verrières & portes" },
  { id: "portails",  label: "Portails" },
  { id: "escaliers", label: "Escaliers & garde-corps" },
  { id: "marquises", label: "Marquises" },
  { id: "mobilier",  label: "Mobilier" },
];

/* ---------- SERVICES ---------- */
const SERVICES = [
  {
    icone: "▤",
    titre: "Verrières d'intérieur",
    texte: "Séparations style atelier en acier, pour ouvrir l'espace et laisser passer la lumière sans perdre en cachet.",
  },
  {
    icone: "◫",
    titre: "Portes acier & verre",
    texte: "Portes coulissantes ou battantes, doubles portes vitrées : des ouvrages fins, sur mesure, montés au millimètre.",
  },
  {
    icone: "⊞",
    titre: "Portails & portillons",
    texte: "Battants ou coulissants, en acier, dessinés à vos dimensions et posés par nos soins.",
  },
  {
    icone: "⌇",
    titre: "Escaliers & garde-corps",
    texte: "Escaliers intérieurs et extérieurs, rambardes et garde-corps aux normes, du plus sobre au plus graphique.",
  },
  {
    icone: "◹",
    titre: "Marquises & verrières de toit",
    texte: "Marquises métal et verre pour abriter une entrée ou couvrir une cour, alliant légèreté et solidité.",
  },
  {
    icone: "✦",
    titre: "Mobilier & sur-mesure",
    texte: "Tables, structures, mezzanines, pièces uniques : tout ce que le métal permet d'imaginer pour votre lieu.",
  },
];

/* ---------- AVIS CLIENTS ----------
   ⚠ Avis fictifs pour la démo. À remplacer par de vrais avis
   (Google, Facebook ou retours clients directs).
*/
const AVIS = [
  {
    texte: "Une verrière d'atelier posée dans la cuisine, du dessin à l'installation. Le travail est net, l'acier parfaitement ajusté, la pièce a complètement changé.",
    auteur: "M. et Mme D., Breuillet",
    fictif: true,
  },
  {
    texte: "Un escalier sur mesure avec rambarde métal. L'artisan a su traduire ce qu'on imaginait, le résultat dépasse le croquis de départ.",
    auteur: "Claire M., Arpajon",
    fictif: true,
  },
  {
    texte: "Portail posé rapidement, finitions impeccables. Contact direct avec l'artisan du début à la fin, ça change tout.",
    auteur: "S. Lopez, Brétigny-sur-Orge",
    fictif: true,
  },
];

/* ---------- COMMUNES DESSERVIES ---------- */
const COMMUNES = [
  "Breuillet",
  "Brétigny-sur-Orge",
  "Arpajon",
  "Saint-Michel-sur-Orge",
  "Égly",
  "Ollainville",
  "Saint-Germain-lès-Arpajon",
  "Marolles-en-Hurepoix",
];

/* ---------- COORDONNÉES (utilisées par le formulaire) ---------- */
const CONTACT_EMAIL = "toutafer@live.fr";
