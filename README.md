# TELLORE - Landing Page

Une landing page moderne et accessible pour TELLORE, un service d'appels téléphoniques par IA pour seniors.

## 🎯 Caractéristiques

### Design
- **Palette de couleurs** : Bleu doux (#4A90E2) avec accents orange/corail (#FF8C69)
- **Typographie** :
  - Titres H1 : Google Font "Clicker Script"
  - Corps de texte : Google Font "Lato" (18px minimum)
- **Style** : Univers paramédical rassurant mais ludique et chaleureux

### Sections

1. **Hero Section**
   - Titre accrocheur "TELLORE - Vos conversations qui font du bien"
   - Sous-titre explicatif
   - Call-to-action bien visible

2. **Section Bénéfices**
   - 3 cartes illustrant les avantages :
     - Briser la solitude
     - Exercer votre mémoire
     - Enrichir votre culture

3. **Galerie des Personnages IA**
   - Marc : La compréhension et la bienveillance
   - Marie : Toujours de bonne humeur et primesautière
   - Edmond : Ancien prof d'université au grand cœur

4. **Formulaire d'Inscription**
   - Formulaire d'essai gratuit (maquette non-fonctionnelle)
   - Champs : Nom, Prénom, Téléphone, Email

### Accessibilité ♿

La landing page a été conçue avec l'accessibilité comme priorité :

- ✅ Contraste élevé (WCAG AA)
- ✅ Tailles de police généreuses (minimum 18px)
- ✅ Interligne généreux (1.8)
- ✅ Support `prefers-reduced-motion`
- ✅ Support `prefers-contrast: high`
- ✅ Focus visible pour tous les éléments interactifs
- ✅ Attributs ARIA appropriés
- ✅ Navigation au clavier
- ✅ Bouton "Skip to content"
- ✅ Labels clairs pour les formulaires

### Responsive Design 📱

Le design est entièrement responsive avec des breakpoints adaptés :
- Desktop : > 968px
- Tablette : 768px - 968px
- Mobile : < 768px
- Petit mobile : < 480px

### Animations

- Animations douces au scroll avec Intersection Observer
- Effet parallaxe subtil sur le hero
- Transitions fluides sur les cartes et boutons
- Respect de `prefers-reduced-motion` pour l'accessibilité

## 🚀 Utilisation

1. Ouvrez simplement le fichier `index.html` dans votre navigateur
2. Aucune compilation ou serveur nécessaire
3. Tous les assets sont chargés via CDN (Google Fonts)

## 📁 Structure des fichiers

```
.
├── index.html          # Structure HTML
├── styles.css          # Styles CSS
├── script.js           # JavaScript pour animations
└── README.md          # Ce fichier
```

## 🎨 Palette de couleurs

```css
--color-primary: #4A90E2    /* Bleu doux */
--color-accent: #FF8C69     /* Orange/Corail */
--color-text: #2D3748       /* Texte principal */
--color-text-light: #4A5568 /* Texte secondaire */
```

## 📝 Notes

- Le formulaire est une maquette non-fonctionnelle
- Les images des personnages sont des placeholders avec dégradés
- Les icônes SVG sont intégrées directement dans le HTML

## 🌟 Améliorations futures possibles

- Intégration d'un backend pour le formulaire
- Ajout de vraies photos pour les personnages
- Animations plus avancées (GSAP)
- Mode sombre
- Multilingue

---

**Développé avec amour et accessibilité ❤️**
