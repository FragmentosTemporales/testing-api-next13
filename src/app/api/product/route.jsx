const products = [
  {
    id: 1,
    name: "Intercomunicador v6",
    precio: "35.000",
    avatar:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
  {
    id: 2,
    name: "Intercomunicador v7",
    precio: "45.000",
    avatar:
      "https://i.postimg.cc/T3r76wVH/1000015166-81f307f0f7a005cdbdef71ee8d15a699-19-4-2023-13-53-46.jpg",
  },
  {
    id: 3,
    name: "Intercomunicador v6 kit",
    precio: "70.000",
    avatar:
      "https://i.postimg.cc/yNHGg96H/1000009732-d4abbc2549567c4aad980ce40e98aabb-20-2-2023-22-54-34.jpg",
  },
  {
    id: 4,
    name: "Auricular V6",
    precio: "10.000",
    avatar:
      "https://i.postimg.cc/j2L304cz/1000011620-1102fedec24086004b33a227df3d57e2-9-3-2023-17-38-16.jpg",
  },
  {
    id: 5,
    name: "Soporte V6",
    precio: "5.000",
    avatar:
      "https://i.postimg.cc/25rH8DTj/1000011621-52c2fa48548ad3d69305836e846671f7-9-3-2023-17-40-17.jpg",
  },
  {
    id: 6,
    name: "Auricular V6",
    precio: "10.000",
    avatar:
      "https://i.postimg.cc/zBf0KF99/1000011622-68eede6c5fbf8e626f3961647cfd0649-9-3-2023-17-40-39.jpg",
  },
  {
    id: 7,
    name: "Rodilleras",
    precio: "40.000",
    avatar:
      "https://i.postimg.cc/ZYrJXYGC/4-10-2021-7-54-07-p-m.jpg",
  },
  {
    id: 8,
    name: "Guante Corto",
    precio: "30.000",
    avatar:
      "https://i.postimg.cc/CLVMMgmt/Whats-App-Image-2023-06-13-at-03-27-19.jpg",
  },
  {
    id: 9,
    name: "Guante Largo",
    precio: "40.000",
    avatar:
      "https://i.postimg.cc/J7X4WncZ/Whats-App-Image-2023-06-13-at-03-27-19-1.jpg",
  },
  {
    id: 10,
    name: "Muslera",
    precio: "15.000",
    avatar:
      "https://i.postimg.cc/7YMHfWRL/Whats-App-Image-2023-06-13-at-03-27-20.jpg",
  },
  {
    id: 11,
    name: "Soporte celular",
    precio: "25.000",
    avatar:
      "https://i.postimg.cc/gJCzZFdx/Whats-App-Image-2023-06-13-at-03-27-20-1.jpg",
  },
];
export const GET = async () => {
  const jsonProduct = products.map((product) => ({
    id: product.id,
    name: product.name,
    precio: product.precio,
    description: product.description,
    avatar: product.avatar,
  }));

  return new Response(JSON.stringify(jsonProduct), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
