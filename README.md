# Entretien MK Pro

Site web officiel d&apos;Entretien MK Pro - Vos spécialistes de l&apos;entretien à Sherbrooke.

Ce projet utilise [Next.js 15](https://nextjs.org/) avec App Router, [Tailwind CSS](https://tailwindcss.com/), et [DaisyUI](https://daisyui.com/).

## 🚀 Migration récente

Ce projet a été migré de Next.js 12 (Pages Router) vers Next.js 15 (App Router). Consultez [MIGRATION.md](./MIGRATION.md) pour plus de détails.

## ⚙️ Configuration requise

- Node.js 18.17 ou supérieur
- Yarn ou npm
- Un compte [Resend](https://resend.com) pour l&apos;envoi de courriels

## 🛠️ Installation

1. Cloner le projet
2. Installer les dépendances :

```bash
yarn install
# ou
npm install
```

3. Copier le fichier d&apos;environnement :

```bash
cp .env.example .env.local
```

4. Configurer les variables d&apos;environnement dans `.env.local` :

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM=onboarding@resend.dev
RESEND_TO=entretienmkpro@hotmail.com
```

## 🚀 Démarrage

Lancer le serveur de développement :

```bash
yarn dev
# ou
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

## 📁 Structure du projet

```
entretienmkpro.com/
├── app/                    # App Router (Next.js 15)
│   ├── layout.js          # Layout racine
│   ├── page.js            # Page d&apos;accueil
│   ├── actions.js         # Server Actions
│   ├── a-propos/
│   ├── contactez-nous/
│   └── services/
├── components/            # Composants React
├── public/               # Fichiers statiques
└── styles/              # Styles globaux
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
