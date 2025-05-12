import { useState } from "react";

export function FormGenerator({ onGenerate }) {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    year: "",
    publisher: "",
    local: "",
    url: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="author"
        placeholder="Nome e sobrenome do autor"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="title"
        placeholder="Título da obra"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="year"
        placeholder="Ano de publicação"
        value={formData.year}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="publisher"
        placeholder="Editora"
        value={formData.publisher}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="local"
        placeholder="Local de publicação"
        value={formData.local}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="url"
        placeholder="URL (opcional)"
        value={formData.url}
        onChange={handleChange}
      />
      <button type="submit">Gerar Referência</button>
    </form>
  );
}