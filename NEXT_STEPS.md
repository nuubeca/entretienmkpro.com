# Prochaines étapes après la migration

## ✅ Migration terminée

La migration vers Next.js 15 avec App Router et Resend est maintenant complète! Voici ce qui a été fait :

### Modifications effectuées

1. ✅ Mise à jour de Next.js 12 → Next.js 15
2. ✅ Migration de Pages Router vers App Router
3. ✅ Remplacement de SendGrid par Resend
4. ✅ Implémentation de Server Actions pour le formulaire
5. ✅ Mise à jour de toutes les dépendances
6. ✅ Migration du SEO (next-seo → metadata API)
7. ✅ Suppression de l&apos;ancien code Pages Router
8. ✅ Documentation complète de la migration

## 🚀 Avant de déployer

### 1. Installer les dépendances

```bash
yarn install
# ou
npm install
```

### 2. Configurer Resend

1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier votre domaine d&apos;envoi
3. Générer une clé API
4. Ajouter les variables d&apos;environnement :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM=votre-email@votredomaine.com
RESEND_TO=entretienmkpro@hotmail.com
```

### 3. Configurer les variables d&apos;environnement

#### Sur Vercel (ou votre plateforme de déploiement) :

**Ajouter** :
- `RESEND_API_KEY`
- `RESEND_FROM`
- `RESEND_TO`
- `NEXT_PUBLIC_GOOGLE_ANALYTICS` (si ce n&apos;est pas déjà fait)

**Supprimer** (anciennes variables SendGrid) :
- `NEXT_PUBLIC_SENDGRID_API_KEY`
- `NEXT_PUBLIC_SENDGRID_EMAIL_FROM`
- `NEXT_PUBLIC_SENDGRID_EMAIL_TO`

### 4. Tester en local

```bash
# Créer .env.local avec vos variables
cp .env.example .env.local

# Lancer le serveur de dev
yarn dev

# Tester toutes les pages :
# - http://localhost:3000/
# - http://localhost:3000/a-propos
# - http://localhost:3000/contactez-nous (IMPORTANT: tester le formulaire!)
# - http://localhost:3000/services/residentiel
# - http://localhost:3000/services/commercial
# - http://localhost:3000/services/nettoyage-a-la-vapeur
# - http://localhost:3000/services/vehicule-a-domicile
```

### 5. Build de production

Vérifier que tout compile correctement :

```bash
yarn build
```

Si le build réussit, vous êtes prêt à déployer!

### 6. Déploiement

```bash
# Si vous utilisez Vercel CLI
vercel

# Ou pushez sur votre branche principale pour déployer automatiquement
git add .
git commit -m "Migration vers Next.js 15 avec App Router et Resend"
git push origin main
```

## 🧪 Tests post-déploiement

Une fois déployé en production :

1. ✅ Vérifier que toutes les pages se chargent correctement
2. ✅ **IMPORTANT** : Tester le formulaire de contact et vérifier la réception du courriel
3. ✅ Vérifier que le cc vers `info@nuube.ca` fonctionne
4. ✅ Tester la navigation entre les pages
5. ✅ Vérifier que Google Analytics fonctionne
6. ✅ Vérifier les images (logo, photos de services)
7. ✅ Tester sur mobile et desktop

## 📊 Monitoring

Après le déploiement, surveillez :

- Les logs Vercel pour détecter les erreurs
- Le tableau de bord Resend pour voir les emails envoyés
- Google Analytics pour vérifier le trafic

## 🐛 En cas de problème

### Le formulaire ne fonctionne pas

1. Vérifier que `RESEND_API_KEY` est bien configurée
2. Vérifier que l&apos;adresse `RESEND_FROM` est vérifiée dans Resend
3. Consulter les logs dans le dashboard Resend
4. Vérifier les logs Vercel pour voir les erreurs

### Erreur de build

1. Vérifier que toutes les dépendances sont installées
2. Supprimer `.next/` et `node_modules/` et réinstaller
3. Vérifier la version de Node.js (doit être >= 18.17)

### Images ne s&apos;affichent pas

1. Vérifier que les images sont bien dans `public/images/`
2. Dans l&apos;App Router, les chemins d&apos;import des images peuvent nécessiter des ajustements

## 📚 Ressources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Resend Documentation](https://resend.com/docs)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

## 💡 Améliorations futures possibles

Considérations pour plus tard :

1. **TypeScript** : Migrer vers TypeScript pour une meilleure sécurité de type
2. **Tests** : Ajouter des tests avec Jest et React Testing Library
3. **Performance** : Optimiser les images avec le composant Image de Next.js
4. **PWA** : Transformer le site en Progressive Web App
5. **Internationalization** : Ajouter le support anglais si nécessaire
6. **CMS** : Intégrer un CMS headless pour gérer le contenu facilement
7. **Analytics avancés** : Ajouter des événements personnalisés dans GA4

---

✨ **Bonne chance avec votre site migré vers Next.js 15!**

