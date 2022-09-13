import { FaQuoteLeft, FaStar } from "react-icons/fa";
import ContactForm from "../components/contact-form";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactezNous = () => {
  return (
    <>
      <div className="w-full min-h-screen font-bold text-stone-800 flex flex-col">
        <Header />
        <div className="flex-grow">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="lg:max-w-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7908.806219764724!2d-73.56241227337188!3d45.50634925683275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb7b3bde60eb1f1%3A0xf7d99b8ac0b76f98!2s721%20Rue%20des%20Capucines%2C%20Sherbrooke%2C%20QC%20J1E%200G5!5e0!3m2!1sfr!2sca!4v1648775643555!5m2!1sfr!2sca"
                  width="600"
                  height="400px"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h1 className="text-5xl font-bold">Contactez-nous</h1>
                  <div className="flex">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="py-6 text-stone-800/70">
                  Formulaire de demande de soumission
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactezNous;
