import { useState } from "react";

export function ReferenceOutput({ reference }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (reference) {
      try {
        await navigator.clipboard.writeText(reference);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Erro ao copiar:", err);
      }
    }
  };

  if (!reference) return null;

  return (
    <div className="reference-block">
      <p>{reference}</p>
      <button onClick={handleCopy}>
        {copied ? "Referência copiada!" : "Copiar referência"}
      </button>
    </div>
  );
}