# Migration vers Next.js 15 et App Router

## Résumé de la migration

Ce projet a été migré de Next.js 12 (Pages Router) vers Next.js 15 (App Router) avec les modifications suivantes :

### Changements majeurs

#### 1. Architecture
- **Avant** : Pages Router (`pages/` directory)
- **Après** : App Router (`app/` directory)

#### 2. Envoi de courriels
- **Avant** : SendGrid (`@sendgrid/mail`)
- **Après** : Resend (`resend`)
- **Implémentation** : Server Actions au lieu de API Routes

#### 3. Dépendances mises à jour
- `next`: 12.3.1 → 15.1.3
- `react`: 18.2.0 → 19.0.0
- `react-dom`: 18.2.0 → 19.0.0
- `eslint`: 8.25.0 → 9.17.0
- `daisyui`: 2.31.0 → 4.12.14
- Ajout de `@next/third-parties` pour Google Analytics
- Ajout de `resend` pour l&apos;envoi de courriels
- Suppression de `@sendgrid/mail`
- Suppression de `next-seo` (remplacé par l&apos;API metadata native)

### Structure du projet

```
entretienmkpro.com/
├── app/                          # App Router (nouveau)
│   ├── layout.js                 # Layout racine
│   ├── page.js                   # Page d&apos;accueil
│   ├── a-propos/
│   │   └── page.js
│   ├── contactez-nous/
│   │   └── page.js
│   ├── services/
│   │   ├── residentiel/
│   │   │   └── page.js
│   │   ├── commercial/
│   │   │   └── page.js
│   │   ├── nettoyage-a-la-vapeur/
│   │   │   └── page.js
│   │   └── vehicule-a-domicile/
│   │       └── page.js
│   └── actions.js                # Server Actions
├── components/
│   ├── ContactFormClient.js      # Formulaire de contact (client component)
│   ├── Footer.js
│   └── Navbar.js
├── pages/                        # SUPPRIMÉ (ancien Pages Router)
├── public/
└── styles/
```

### Variables d&apos;environnement

#### Variables supprimées (SendGrid)
```env
NEXT_PUBLIC_SENDGRID_API_KEY
NEXT_PUBLIC_SENDGRID_EMAIL_FROM
NEXT_PUBLIC_SENDGRID_EMAIL_TO
```

#### Nouvelles variables (Resend)
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM=onboarding@resend.dev
RESEND_TO=entretienmkpro@hotmail.com
```

#### Variables conservées
```env
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

### Configuration Resend

1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier votre domaine d&apos;envoi
3. Générer une clé API
4. Configurer les variables d&apos;environnement dans votre plateforme de déploiement (Vercel, etc.)

### SEO et Metadata

Le package `next-seo` a été remplacé par l&apos;API metadata native de Next.js 15 :

**Avant** (next-seo) :
```jsx
import { NextSeo } from "next-seo";

export default function Page() {
  return (
    <>
      <NextSeo
        title="Titre de la page"
        description="Description"
        canonical="https://example.com"
      />
      {/* contenu */}
    </>
  );
}
```

**Après** (metadata API) :
```jsx
export const metadata = {
  title: "Titre de la page",
  description: "Description",
  alternates: {
    canonical: "https://example.com",
  },
};

export default function Page() {
  return <div>{/* contenu */}</div>;
}
```

### Composants client

Les composants utilisant des hooks React ou de l&apos;interactivité doivent être marqués avec `"use client"` :

- `Navbar.js` (utilise `useState`)
- `ContactFormClient.js` (utilise `useState`, `useFormStatus`)

### Google Analytics

L&apos;intégration de Google Analytics utilise maintenant `@next/third-parties/google` au lieu de scripts personnalisés dans `_app.js`.

**Implémentation** dans `app/layout.js` :
```jsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      </body>
    </html>
  );
}
```

### Server Actions

Le formulaire de contact utilise maintenant des Server Actions au lieu d&apos;API Routes :

**Fichier** : `app/actions.js`
```javascript
"use server";

import { Resend } from "resend";

export async function sendContactForm(formData) {
  // Logique d&apos;envoi d&apos;email
}
```

**Utilisation** dans `app/contactez-nous/page.js` :
```jsx
import ContactFormClient from "../../components/ContactFormClient";
import { sendContactForm } from "../actions";

export default function ContactezNous() {
  return <ContactFormClient action={sendContactForm} />;
}
```

### Installation et démarrage

1. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

2. Configurer les variables d&apos;environnement :
```bash
cp .env.example .env.local
# Éditer .env.local avec vos valeurs
```

3. Lancer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000)

### Déploiement

Avant de déployer en production :

1. ✅ Configurer les variables d&apos;environnement Resend sur votre plateforme de déploiement
2. ✅ Retirer les anciennes variables SendGrid
3. ✅ Vérifier que votre domaine est vérifié dans Resend
4. ✅ Tester l&apos;envoi de formulaire sur l&apos;environnement de staging

### Breaking Changes

Si vous avez du code personnalisé qui dépendait de l&apos;ancien système :

1. **API Routes** : Toutes les API routes dans `pages/api/` ont été supprimées. Utilisez des Server Actions à la place.
2. **next-seo** : Remplacez les imports `next-seo` par l&apos;API metadata native.
3. **SendGrid** : Tout code utilisant `@sendgrid/mail` doit être migré vers Resend.

### Support

Pour toute question sur cette migration, consultez :
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Resend Documentation](https://resend.com/docs)
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)



