# ✅ Checklist de migration - Entretien MK Pro

## 📋 Avant de commencer

- [ ] Lire `MIGRATION_SUMMARY.md` pour comprendre les changements
- [ ] Avoir accès à un compte Resend (ou en créer un)
- [ ] Avoir accès aux credentials Vercel (si déploiement)
- [ ] Sauvegarder la version actuelle (git commit / backup)

## 🔧 Installation locale

- [ ] Supprimer l&apos;ancien `node_modules` et `yarn.lock`
  ```bash
  rm -rf node_modules yarn.lock
  ```
  
- [ ] Installer les nouvelles dépendances
  ```bash
  yarn install
  ```
  
- [ ] Vérifier qu&apos;aucune erreur n&apos;apparaît

## 🔑 Configuration Resend

- [ ] Créer un compte sur [resend.com](https://resend.com)
- [ ] Vérifier votre domaine d&apos;envoi dans Resend
  - [ ] Ajouter le domaine
  - [ ] Configurer les enregistrements DNS
  - [ ] Attendre la vérification (~quelques minutes)
- [ ] Générer une clé API Resend
  - [ ] Copier la clé (elle ne sera affichée qu&apos;une fois!)
  - [ ] La stocker de façon sécurisée

## 🌍 Configuration environnement local

- [ ] Créer `.env.local` depuis l&apos;exemple
  ```bash
  cp .env.example .env.local
  ```

- [ ] Remplir les variables dans `.env.local` :
  - [ ] `NEXT_PUBLIC_GOOGLE_ANALYTICS` (reprendre l&apos;ancienne valeur)
  - [ ] `RESEND_API_KEY` (nouvelle clé Resend)
  - [ ] `RESEND_FROM` (email vérifié dans Resend)
  - [ ] `RESEND_TO` (destination: entretienmkpro@hotmail.com)

## 🧪 Tests en local

- [ ] Démarrer le serveur de développement
  ```bash
  yarn dev
  ```

- [ ] Tester toutes les pages :
  - [ ] Page d&apos;accueil : http://localhost:3000
  - [ ] À propos : http://localhost:3000/a-propos
  - [ ] Contact : http://localhost:3000/contactez-nous
  - [ ] Service résidentiel : http://localhost:3000/services/residentiel
  - [ ] Service commercial : http://localhost:3000/services/commercial
  - [ ] Nettoyage vapeur : http://localhost:3000/services/nettoyage-a-la-vapeur
  - [ ] Véhicule domicile : http://localhost:3000/services/vehicule-a-domicile

- [ ] Vérifier que :
  - [ ] Toutes les pages se chargent sans erreur
  - [ ] Le menu de navigation fonctionne
  - [ ] Les images s&apos;affichent correctement
  - [ ] Le footer est présent sur toutes les pages
  - [ ] Le site est responsive (tester en mobile)

## 📧 Test du formulaire de contact (CRITIQUE)

- [ ] Aller sur http://localhost:3000/contactez-nous
- [ ] Remplir le formulaire avec :
  - [ ] Nom de test
  - [ ] Email valide
  - [ ] Numéro de téléphone
  - [ ] Service sélectionné
  - [ ] Message de test
- [ ] Soumettre le formulaire
- [ ] Vérifier :
  - [ ] Message de succès s&apos;affiche
  - [ ] Pas d&apos;erreur dans la console du navigateur
  - [ ] Pas d&apos;erreur dans les logs du serveur (terminal)
- [ ] Vérifier la réception des emails :
  - [ ] Email reçu sur l&apos;adresse principale (RESEND_TO)
  - [ ] Email reçu en cc sur info@nuube.ca
  - [ ] Le contenu de l&apos;email est correct (tous les champs présents)

## 🏗️ Build de production

- [ ] Lancer le build
  ```bash
  yarn build
  ```
  
- [ ] Vérifier qu&apos;il n&apos;y a pas d&apos;erreurs
- [ ] Tester en mode production local
  ```bash
  yarn start
  ```
- [ ] Re-tester quelques pages et le formulaire

## 🚀 Configuration Vercel (ou autre plateforme)

- [ ] Se connecter à Vercel
- [ ] Aller dans les settings du projet
- [ ] Section "Environment Variables"
- [ ] **AJOUTER** les nouvelles variables :
  - [ ] `RESEND_API_KEY` (avec la valeur de votre clé)
  - [ ] `RESEND_FROM` (votre email vérifié)
  - [ ] `RESEND_TO` (entretienmkpro@hotmail.com)
  - [ ] `NEXT_PUBLIC_GOOGLE_ANALYTICS` (si pas déjà présent)
- [ ] **SUPPRIMER** les anciennes variables SendGrid :
  - [ ] `NEXT_PUBLIC_SENDGRID_API_KEY`
  - [ ] `NEXT_PUBLIC_SENDGRID_EMAIL_FROM`
  - [ ] `NEXT_PUBLIC_SENDGRID_EMAIL_TO`

## 📤 Déploiement

- [ ] Commit des changements
  ```bash
  git add .
  git commit -m "Migration vers Next.js 15 avec App Router et Resend"
  ```

- [ ] Push vers la branche principale
  ```bash
  git push origin main
  ```
  
- [ ] Attendre la fin du déploiement sur Vercel
- [ ] Vérifier que le build réussit

## ✅ Tests post-déploiement (PRODUCTION)

- [ ] Visiter le site en production
- [ ] Tester toutes les pages principales
- [ ] **IMPORTANT** : Tester le formulaire de contact en production
  - [ ] Remplir avec de vraies données de test
  - [ ] Soumettre
  - [ ] Vérifier la réception de l&apos;email
  - [ ] Vérifier le cc vers info@nuube.ca

- [ ] Vérifier Google Analytics :
  - [ ] Aller dans le dashboard GA
  - [ ] Vérifier que les visites sont trackées
  - [ ] Faire quelques clics pour générer des événements

- [ ] Tests responsive :
  - [ ] Tester sur mobile
  - [ ] Tester sur tablette
  - [ ] Tester sur desktop

- [ ] Tests de navigation :
  - [ ] Tous les liens du menu fonctionnent
  - [ ] Les boutons "Obtenir une soumission" redirigent vers /contactez-nous
  - [ ] Le logo ramène à la page d&apos;accueil

## 📊 Monitoring (premiers jours)

- [ ] Vérifier les logs Vercel quotidiennement
- [ ] Vérifier le dashboard Resend pour les emails envoyés
- [ ] Vérifier Google Analytics pour le trafic
- [ ] Être attentif aux retours des utilisateurs

## 📝 Documentation finale

- [ ] Informer l&apos;équipe de la migration
- [ ] Partager les nouveaux identifiants Resend si nécessaire
- [ ] Archiver les anciennes credentials SendGrid
- [ ] Mettre à jour la documentation interne si applicable

## 🎉 C&apos;est terminé !

Si tous ces points sont cochés, félicitations ! 

Votre site est maintenant :
- ✅ Sur Next.js 15 avec App Router
- ✅ Utilisant Resend pour les emails
- ✅ Complètement migré et testé
- ✅ En production et fonctionnel

## 🆘 En cas de problème

### Problème avec le formulaire ?
→ Consulter `COMMANDES_MIGRATION.md` section "En cas de problème"

### Erreur de build ?
→ Consulter `NEXT_STEPS.md` section "En cas de problème"

### Question sur la migration ?
→ Lire `MIGRATION.md` pour les détails complets

---

**Documentation complète disponible** :
- `MIGRATION_SUMMARY.md` - Vue d&apos;ensemble rapide
- `MIGRATION.md` - Guide détaillé
- `NEXT_STEPS.md` - Prochaines étapes
- `COMMANDES_MIGRATION.md` - Toutes les commandes
- `README.md` - Documentation du projet

