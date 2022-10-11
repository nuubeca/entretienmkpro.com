import { useState } from "react";
import { PatternFormat } from "react-number-format";

export default function ContactForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);
  const [service, setService] = useState("Service");
  const [phone, setPhone] = useState("");

  if (succeeded) {
    return (
      <>
        <div className="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Merci, votre message a bien été envoyé à notre équipe.</span>
          </div>
        </div>
      </>
    );
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    const result = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (result.status === 200) {
      setSucceeded(true);
    } else {
      setError(true);
    }
  }

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleOnSubmit}>
      <input
        className="input bg-white input-bordered"
        placeholder="Nom"
        id="name"
        type="text"
        name="name"
        required
      />
      <input
        className="input bg-white input-bordered"
        placeholder="Courriel"
        id="email"
        type="email"
        name="email"
        required
      />
      <PatternFormat
        className="input bg-white input-bordered"
        type="tel"
        format="(###) ###-####"
        mask=" "
        name="phone"
        id="phone"
        placeholder="Tél : 000-000-0000"
        onValueChange={(value) => setPhone(value.formattedValue)}
        required
      />
      {/* <input
        className="input input-bordered"
        placeholder="Tél : 000-000-0000"
        id="phone"
        type="tel"
        name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      /> */}
      <select
        value={service}
        onChange={(e) => {
          setService(e.target.value);
        }}
        className="select  bg-white select-bordered"
        id="service"
        name="service"
        required
      >
        <option value="Residentiel">Résidentiel</option>
        <option value="Commercial">Commercial</option>
        <option value="NettoyageVapeur">Nettoyage à la vapeur</option>
        <option value="VehiculeDomicile">Véhicule à domicile</option>
      </select>

      <textarea
        className="textarea  bg-white textarea-bordered"
        placeholder="Brève description"
        id="message"
        name="message"
        required
      />
      <button
        className="my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg bg-stone-800 text-white focus:ring-4 focus:ring-gray-100"
        type="submit"
      >
        Envoyer
      </button>
      {error && (
        <>
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! Something went wrong sending message.</span>
            </div>
          </div>
        </>
      )}
    </form>
  );
}
