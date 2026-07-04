# Tout à fer — Site vitrine

Site vitrine de démonstration pour **Tout à fer**, ferronnerie d'art, métallerie et serrurerie à Breuillet (91).

Site statique : HTML / CSS / JS, sans build, hébergé sur GitHub Pages.

---

## 1. Les photos

Les vraies photos de l'artisan sont déjà intégrées (récupérées du dossier « Atelier - Tout a fer », redimensionnées et compressées pour le web). Elles sont dans `assets/img/` :

| Fichier | Contenu |
|---|---|
| `hero-01.jpg` | Photo plein écran en haut du site (escalier rétroéclairé) |
| `atelier-01.jpg` | Image verticale de la section « L'atelier » |
| `verriere-01.jpg` … `verriere-06.jpg` | Verrières d'intérieur |
| `porte-01.jpg` … `porte-03.jpg` | Portes et portes coulissantes acier-verre |
| `portail-01.jpg` … `portail-03.jpg` | Portails et portillon |
| `escalier-01.jpg`, `escalier-02.jpg` | Escaliers et garde-corps |
| `marquise-01.jpg`, `marquise-02.jpg` | Marquises métal et verre |
| `mobilier-01.jpg` | Table sur mesure |

**Pour remplacer une photo** : déposer le nouveau fichier dans `assets/img/` avec le même nom (idéalement en JPG, largeur ~1200 px, moins de 250 Ko).

**Pour ajouter une photo** : la déposer dans `assets/img/` puis ajouter une ligne dans la liste `GALERIE` en haut de `js/config.js` (le format et les catégories sont expliqués dans le fichier).

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
