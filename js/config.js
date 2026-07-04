/* ============================================================
   TOUT À FER — CONTENU DU SITE
   C'est ICI qu'on modifie les textes des listes du site :
   galerie, services, avis clients, communes.
   Pas besoin de toucher au reste du code.
   ============================================================ */

/* ---------- GALERIE ----------
   Pour ajouter une photo : déposer le fichier dans assets/img/
   puis ajouter une ligne ici.
   cat : "portails" | "garde-corps" | "ferronnerie" | "serrurerie" | "mobilier"
*/
const GALERIE = [
  { src: "assets/img/portail-01.jpg",     cat: "portails",    alt: "Portail 2 battants en fer forgé avec volutes" },
  { src: "assets/img/portail-02.jpg",     cat: "portails",    alt: "Portail coulissant en acier, lignes contemporaines" },
  { src: "assets/img/portail-03.jpg",     cat: "portails",    alt: "Portillon assorti au portail, fer forgé" },
  { src: "assets/img/garde-corps-01.jpg", cat: "garde-corps", alt: "Garde-corps d'escalier intérieur en fer forgé" },
  { src: "assets/img/garde-corps-02.jpg", cat: "garde-corps", alt: "Rampe d'escalier extérieure en acier" },
  { src: "assets/img/garde-corps-03.jpg", cat: "garde-corps", alt: "Garde-corps de terrasse sur mesure" },
  { src: "assets/img/ferronnerie-01.jpg", cat: "ferronnerie", alt: "Ferronnerie d'art : rosace forgée à la main" },
  { src: "assets/img/ferronnerie-02.jpg", cat: "ferronnerie", alt: "Structure décorative en fer forgé" },
  { src: "assets/img/ferronnerie-03.jpg", cat: "ferronnerie", alt: "Pièce de ferronnerie d'art sur mesure" },
  { src: "assets/img/serrurerie-01.jpg",  cat: "serrurerie",  alt: "Grille de défense en acier posée sur fenêtre" },
  { src: "assets/img/serrurerie-02.jpg",  cat: "serrurerie",  alt: "Porte de service métallique sécurisée" },
  { src: "assets/img/mobilier-01.jpg",    cat: "mobilier",    alt: "Table en fer forgé et bois massif" },
  { src: "assets/img/mobilier-02.jpg",    cat: "mobilier",    alt: "Console murale en métal, fabrication artisanale" },
];

/* Les boutons de filtre de la galerie */
const CATEGORIES = [
  { id: "tous",        label: "Tout voir" },
  { id: "portails",    label: "Portails" },
  { id: "garde-corps", label: "Garde-corps" },
  { id: "ferronnerie", label: "Ferronnerie d'art" },
  { id: "serrurerie",  label: "Serrurerie" },
  { id: "mobilier",    label: "Mobilier" },
];

/* ---------- SERVICES ---------- */
const SERVICES = [
  {
    icone: "⌸",
    titre: "Portails & clôtures",
    texte: "Battants ou coulissants, en fer forgé ou en acier, dessinés à vos dimensions et posés par nos soins.",
  },
  {
    icone: "⌇",
    titre: "Garde-corps & rampes",
    texte: "Escaliers, terrasses, balcons : des ouvrages aux normes, qui sécurisent sans alourdir.",
  },
  {
    icone: "⊞",
    titre: "Grilles & protections",
    texte: "Grilles de défense, portes métalliques et fermetures qui protègent votre maison avec élégance.",
  },
  {
    icone: "✦",
    titre: "Ferronnerie d'art",
    texte: "Pièces uniques forgées à la main : volutes, rosaces, créations décoratives sur mesure.",
  },
  {
    icone: "⌂",
    titre: "Mobilier en fer forgé",
    texte: "Tables, consoles, étagères : du mobilier qui traverse les années, fabriqué à l'atelier.",
  },
  {
    icone: "⚿",
    titre: "Serrurerie",
    texte: "Installation et remplacement de serrures, sécurisation d'accès, interventions dans tout le secteur.",
  },
];

/* ---------- AVIS CLIENTS ----------
   ⚠ Avis fictifs pour la démo. À remplacer par de vrais avis
   (Google, Facebook ou retours clients directs).
*/
const AVIS = [
  {
    texte: "Portail posé en trois semaines, du dessin à l'installation. Le travail est propre et solide, on nous en parle à chaque visite.",
    auteur: "M. et Mme D., Breuillet",
    fictif: true,
  },
  {
    texte: "Une rampe d'escalier entièrement sur mesure. L'artisan a su traduire ce qu'on imaginait, le résultat dépasse le croquis de départ.",
    auteur: "Claire M., Arpajon",
    fictif: true,
  },
  {
    texte: "Grilles de défense posées rapidement, finitions impeccables. Contact direct avec l'artisan du début à la fin, ça change tout.",
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
