export const GET = async () => {
    const product = {
        id: 1,
        name: "V6 Pro",
        brand: "Ejeas",
        price: "$35.000",
        description: "Intercom muy chidory",
        first: "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
        second: "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
        third: "https://i.postimg.cc/QN4v4HmQ/1000009772-01a7ee517c6efdf5e38de0abbc2a2de0-20-2-2023-23-25-11.jpg",
    }
  
    return new Response(JSON.stringify(product), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };