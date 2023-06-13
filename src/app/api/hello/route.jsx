export const GET = async () => {
  const jsonProduct = "Hello GET";

  return new Response(JSON.stringify(jsonProduct), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 200 // Código de estado para una respuesta exitosa (OK)
  });
};
export const PUT = async () => {
  const jsonProduct = "Hello PUT";

  return new Response(JSON.stringify(jsonProduct), {
    headers: {
      "Content-Type": "application/json"
    },
  });
};
export const DELETE = async () => {
  const jsonProduct = "Hello DELETE";

  return new Response(JSON.stringify(jsonProduct), {
    headers: {
      "Content-Type": "application/json"
    },
  });
};
export const POST = async () => {
  const jsonProduct = "Hello POST";

  return new Response(JSON.stringify(jsonProduct), {
    headers: {
      "Content-Type": "application/json"
    },
  });
};