import { Category } from "../util/models";

async function getAllCategories(): Promise<Category[]> {
  const response = await fetch("http://localhost:8000/categories", {
    next: {
      revalidate: 1,
    },
  });
  return response.json();
}

export default async function CategoriePage() {
  const categories = await getAllCategories();

  return (
    <div>
      <h1>Todas as Categorias</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            {cat.name} - {cat?.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
