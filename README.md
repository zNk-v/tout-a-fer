# Tout à fer — Site vitrine

Site vitrine de démonstration pour **Tout à fer**, ferronnerie d'art, métallerie et serrurerie à Breuillet (91).

Site statique : HTML / CSS / JS, sans build, hébergé sur GitHub Pages.

---

## 1. Remplacer les photos placeholder par les vraies photos

Les photos de l'artisan sont sur sa page Facebook :
https://www.facebook.com/p/Tout-%C3%A0-fer-100057649239787/

**Étapes :**

1. Sur la page Facebook, ouvrir une photo en grand, clic droit → « Enregistrer l'image sous… ».
2. Renommer le fichier **exactement** comme le placeholder qu'il remplace (voir tableau ci-dessous).
3. Déposer le fichier dans le dossier `assets/img/` (remplacer l'ancien).
4. C'est tout : le site l'affiche sans toucher au code.

| Fichier à créer | Contenu attendu |
|---|---|
| `hero-01.jpg` | LA plus belle photo (grand format, plein écran en haut du site) |
| `atelier-01.jpg` | Photo de l'atelier ou de l'artisan au travail (format portrait) |
| `portail-01.jpg` à `portail-03.jpg` | Portails |
| `garde-corps-01.jpg` à `garde-corps-03.jpg` | Garde-corps, rampes |
| `ferronnerie-01.jpg` à `ferronnerie-03.jpg` | Ferronnerie d'art, pièces déco |
| `serrurerie-01.jpg`, `serrurerie-02.jpg` | Grilles de défense, portes métalliques |
| `mobilier-01.jpg`, `mobilier-02.jpg` | Mobilier en fer forgé |

**Pour ajouter plus de photos** : déposer le fichier dans `assets/img/` puis ajouter une ligne dans la liste `GALERIE` en haut de `js/config.js` (le format est expliqué dans le fichier).

Conseil : viser des photos de moins de 500 Ko (les exporter en JPG qualité ~80, largeur 1200 px suffit). Des photos trop lourdes ralentissent le site.

## 2. Modifier les textes

- **Galerie, services, avis clients, communes** → `js/config.js` (tout est commenté en français).
- **Textes des sections (accroche, à propos, contact…)** → directement dans `index.html`.
- **Titre Google et description** → balises `<title>` et `<meta name="description">` en haut de `index.html`.

À faire avant mise en production réelle :

- [ ] Remplacer les 3 avis fictifs marqués `[À REMPLACER]` dans `js/config.js`
- [ ] Compléter les mentions légales dans le footer de `index.html` (raison sociale, SIRET, adresse)
- [ ] Vérifier la liste des communes desservies avec l'artisan

## 3. Déployer sur GitHub Pages

Le site est déjà déployé sur : **https://znk-v.github.io/tout-a-fer/**

Chaque `git push` sur la branche `main` met le site à jour en 1 à 2 minutes.

Pour redéployer sur un autre compte GitHub :

1. Créer un repo et pousser tout le contenu de ce dossier.
2. Sur GitHub : **Settings → Pages**.
3. Dans « Build and deployment », Source : **Deploy from a branch**, Branch : **main** / **/ (root)** → Save.
4. Attendre 1 à 2 minutes, l'URL apparaît en haut de la page Settings → Pages.

Si le site passe un jour sur un vrai nom de domaine (ex. `toutafer.fr`), penser à mettre à jour les URLs dans `index.html` : balise `<link rel="canonical">`, balises `og:url` / `og:image` et le bloc JSON-LD.
