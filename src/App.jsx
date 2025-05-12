import { useState } from "react";
import { FormGenerator } from "./components/FormGenerator";
import { ReferenceOutput } from "./components/ReferenceOutput";

export default function App() {
  const [reference, setReference] = useState("");

  const formatAuthor = (fullName) => {
    const names = fullName.trim().split(" ");
    if (names.length === 1) {
      return names[0].toUpperCase();
    }

    const firstName = names.shift();
    const remaining = names.join(" ").toUpperCase();
    const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

    return `${remaining}, ${formattedFirstName}`;
  };

  const generateReference = ({ author, title, year, publisher, local, url }) => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = today.toLocaleString("pt-BR", { month: "long" });
    const yearAccess = today.getFullYear();

    const formattedAuthor = formatAuthor(author);

    let formatted = `${formattedAuthor}. ${title}. ${local}: ${publisher}, ${year}.`;

    if (url) {
      formatted += ` Disponível em: <${url}>. Acesso em: ${day} ${month} ${yearAccess}.`;
    }

    setReference(formatted);
  };

  return (
    <div className="container">
      <h1>Gerador de Referência ABNT</h1>
      <FormGenerator onGenerate={generateReference} />
      <ReferenceOutput reference={reference} />
      <footer className="footer">
        Criado de Lucas para Mimi :)
      </footer>
    </div>
  );
}