import { json, LoaderFunction, ActionFunction, redirect } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";

// GET personas
export const loader: LoaderFunction = async () => {
  const res = await fetch("https://remix-backend-container-sirley.azurewebsites.net/api/Persons");
 // usar la URL del backend (o de Azure si estás desplegada)
  if (!res.ok) {
    console.error("Error al obtener datos del backend");
    return json([]);
  }
  const data = await res.json();
  return json(data);
};

// POST persona
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");

  const res = await fetch("https://remix-backend-container-sirley.azurewebsites.net/api/Persons", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) throw new Error("Error al crear persona");

  return redirect("/");
};

export default function Index() {
  const personas = useLoaderData<typeof loader>();

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-4">Lista de Personas</h1>
      
      {personas.map((p: any) => (
        <div key={p.id} className="mb-2 border p-2 rounded">
          <strong>ID:</strong> {p.id} — <strong>Nombre:</strong> {p.name}
        </div>
      ))}

      <h2 className="text-xl mt-6">Agregar nueva persona</h2>
      <Form method="post" className="mt-4 flex gap-2">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="p-2 text-black border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded">
          Agregar
        </button>
      </Form>
    </div>
  );
}
