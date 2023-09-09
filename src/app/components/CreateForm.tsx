"use client";
import { FormEvent } from "react";

export default function CreateCategoryForm() {
  async function onSubmuit(event: FormEvent) {
    event.preventDefault();
    const name = document.querySelector<HTMLInputElement>("#name")!.value;
    const description =
      document.querySelector<HTMLInputElement>("#description")?.value;
    await fetch("http://localhost:8000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    });
  }
  return (
    <form onSubmit={onSubmuit}>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Digite o nome"
        required
        className="text-black"
      />
      <br />
      <br />
      <br />
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Digite a descrição"
        className="text-black"
      />
      <br />

      <button>Criar</button>
    </form>
  );
}
