import { Category } from "../util/models";

async function getAllCategories(): Promise<Category[]> {
  const response = await fetch("http://localhost:8000/categories", {
    next: {
      tags: ["categories"],
    },
    // next: {
    //   revalidate: 1,
    // },
    // cache: "no-store"
  });
  return response.json();
}

export default async function ListCategories() {
  const categories = await getAllCategories();

  return (
    <ul>
      {categories.map((cat) => (
        <li key={cat.id}>
          {cat.name} - {cat?.description}
        </li>
      ))}
    </ul>
  );
}
