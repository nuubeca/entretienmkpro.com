import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "Entretien MK Pro - Vos spécialistes de l'entretien à Sherbrooke",
  description: "Nous offrons des services d'entretien ménager commercial et résidentiel à Sherbrooke et les environs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ''} />
      </body>
    </html>
  );
}

