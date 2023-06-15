export const GET = async () => {
    const product = {
        id: 1,
        name: "V7",
        brand: "Ejeas",
        price: "$45.000",
        description: "Intercom muy chidory",
        first: "https://i.postimg.cc/T3r76wVH/1000015166-81f307f0f7a005cdbdef71ee8d15a699-19-4-2023-13-53-46.jpg",
        second: "https://i.postimg.cc/pdCsm61f/1000015167-c21c538c191f67da2f8e4a63f6b73a6a-19-4-2023-13-53-54.jpg",
        third: "https://i.postimg.cc/jqFk6Bqv/1000015168-d5bf2938d0dfc0e411a0ef9bc7426db7-19-4-2023-13-54-01.jpg",
    }
  
    return new Response(JSON.stringify(product), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };