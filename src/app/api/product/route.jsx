const products = [
  {
    id: 1,
    name: "V6 Pro",
    brand: "Ejeas",
    price: "$35.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
    second:
      "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
    third:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
  {
    id: 2,
    name: "V7",
    brand: "Ejeas",
    price: "$45.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/T3r76wVH/1000015166-81f307f0f7a005cdbdef71ee8d15a699-19-4-2023-13-53-46.jpg",
    second:
      "https://i.postimg.cc/pdCsm61f/1000015167-c21c538c191f67da2f8e4a63f6b73a6a-19-4-2023-13-53-54.jpg",
    third:
      "https://i.postimg.cc/jqFk6Bqv/1000015168-d5bf2938d0dfc0e411a0ef9bc7426db7-19-4-2023-13-54-01.jpg",
  },
  {
    id: 3,
    name: "v6 Pro kit",
    brand: "Ejeas",
    price: "$70.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
    second:
      "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
    third:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
  {
    id: 4,
    name: "Auricular V6",
    brand: "Ejeas",
    price: "$10.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
    second:
      "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
    third:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
  {
    id: 5,
    name: "Soporte V6",
    brand: "Ejeas",
    price: "$5.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
    second:
      "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
    third:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
  {
    id: 6,
    name: "Auricular V6",
    brand: "Ejeas",
    price: "$10.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
    second:
      "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
    third:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
  {
    id: 7,
    name: "Rodilleras",
    brand: "Ejeas",
    price: "$40.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
    second:
      "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
    third:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
  {
    id: 8,
    name: "Guante Corto",
    brand: "Ejeas",
    price: "$35.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
    second:
      "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
    third:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
  {
    id: 9,
    name: "Guante Largo",
    brand: "Ejeas",
    price: "$35.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
    second:
      "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
    third:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
  {
    id: 10,
    name: "Muslera",
    brand: "Ejeas",
    price: "$35.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
    second:
      "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
    third:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
  {
    id: 11,
    name: "Soporte celular",
    brand: "Ejeas",
    price: "$35.000",
    description: "Intercom muy chidory",
    first:
      "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
    second:
      "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
    third:
      "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
  },
];
export const GET = async () => {
  const jsonProduct = products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    first: product.first,
    second: product.second,
    third: product.third,
    brand: product.brand
  }));

  return new Response(JSON.stringify(jsonProduct), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
