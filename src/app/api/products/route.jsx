export async function GET(request) {
  const products = [
    {
      id: 1,
      name: "Intercomunicador v6",
      precio: "35.000",
      description: "Intercomunicador muy shidory",
      avatar: "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
    },
    {
      id: 2,
      name: "Intercomunicador v7",
      precio: "45.000",
      description: "Intercomunicador muy shidory",
      avatar: "https://i.postimg.cc/T3r76wVH/1000015166-81f307f0f7a005cdbdef71ee8d15a699-19-4-2023-13-53-46.jpg",
    },
    {
      id: 3,
      name: "Intercomunicador v6 kit",
      precio: "70.000",
      description: "Intercomunicador muy shidory",
      avatar: "https://i.postimg.cc/yNHGg96H/1000009732-d4abbc2549567c4aad980ce40e98aabb-20-2-2023-22-54-34.jpg",
    },
  ];

  // Convertir el objeto JavaScript en una cadena JSON
  const jsonProduct = JSON.stringify(products);

  // Crear una nueva respuesta con la cadena JSON como cuerpo
  return new Response(jsonProduct, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
