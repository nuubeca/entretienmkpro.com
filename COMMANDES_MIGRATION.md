# 🚀 Commandes essentielles après la migration

## Installation des nouvelles dépendances

```bash
# Supprimer l&apos;ancien dossier node_modules et yarn.lock
rm -rf node_modules yarn.lock

# Réinstaller toutes les dépendances
yarn install
```

## Configuration de l&apos;environnement

```bash
# Créer le fichier .env.local depuis l&apos;exemple
cp .env.example .env.local

# Éditer .env.local avec vos valeurs
nano .env.local  # ou code .env.local
```

Variables à configurer :
```env
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM=votre-email@votredomaine.com
RESEND_TO=entretienmkpro@hotmail.com
```

## Démarrage en développement

```bash
yarn dev
```

Le site sera accessible sur : http://localhost:3000

## Build de production

```bash
# Construire le projet
yarn build

# Démarrer en mode production
yarn start
```

## Tests à effectuer

### 1. Tester toutes les pages

```bash
# Pendant que yarn dev tourne, visitez :
open http://localhost:3000
open http://localhost:3000/a-propos
open http://localhost:3000/contactez-nous
open http://localhost:3000/services/residentiel
open http://localhost:3000/services/commercial
open http://localhost:3000/services/nettoyage-a-la-vapeur
open http://localhost:3000/services/vehicule-a-domicile
```

### 2. Tester le formulaire de contact

1. Aller sur http://localhost:3000/contactez-nous
2. Remplir le formulaire
3. Soumettre
4. Vérifier la réception du courriel

## Déploiement sur Vercel

### Via l&apos;interface Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Importer votre projet GitHub
3. **IMPORTANT** : Configurer les variables d&apos;environnement :
   - `RESEND_API_KEY`
   - `RESEND_FROM`
   - `RESEND_TO`
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS`
4. Déployer

### Via CLI Vercel

```bash
# Installer Vercel CLI si nécessaire
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Ou déployer en production directement
vercel --prod
```

## Configuration Resend

1. Aller sur https://resend.com
2. Créer un compte / Se connecter
3. Vérifier votre domaine d&apos;envoi :
   - Aller dans "Domains"
   - Ajouter votre domaine
   - Ajouter les enregistrements DNS fournis
4. Générer une clé API :
   - Aller dans "API Keys"
   - Créer une nouvelle clé
   - Copier la clé (elle ne sera affichée qu&apos;une fois!)

## Vérification du déploiement

### Checklist post-déploiement

- [ ] Toutes les pages se chargent
- [ ] Le formulaire de contact fonctionne
- [ ] Les courriels sont reçus
- [ ] Le cc vers info@nuube.ca fonctionne
- [ ] Les images s&apos;affichent correctement
- [ ] La navigation fonctionne
- [ ] Google Analytics est actif
- [ ] Le site est responsive (mobile + desktop)

## En cas de problème

### Erreur "Module not found"

```bash
rm -rf node_modules .next
yarn install
yarn dev
```

### Le formulaire ne soumet pas

1. Vérifier que `RESEND_API_KEY` est définie
2. Vérifier les logs du serveur :
   ```bash
   # Dans le terminal où yarn dev tourne
   # Les logs apparaîtront après soumission
   ```
3. Vérifier le dashboard Resend pour les erreurs

### Build échoue

```bash
# Nettoyer complètement
rm -rf .next node_modules yarn.lock
yarn install
yarn build
```

### Variables d&apos;environnement ne fonctionnent pas

- Variables côté **client** : doivent commencer par `NEXT_PUBLIC_`
- Variables côté **serveur** : pas de préfixe (ex: `RESEND_API_KEY`)
- Redémarrer `yarn dev` après changement de `.env.local`

## Commandes utiles

```bash
# Linter
yarn lint

# Analyser le bundle
yarn build --analyze

# Vérifier les types (si TypeScript)
yarn type-check

# Nettoyer complètement
rm -rf .next node_modules yarn.lock
```

## Support

- Documentation Next.js : https://nextjs.org/docs
- Documentation Resend : https://resend.com/docs
- Voir aussi : `MIGRATION.md` et `NEXT_STEPS.md`



