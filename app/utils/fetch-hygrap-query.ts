export const fetchHygraphQuery = async (query: string, relative?: number) => {
  const responce = await fetch(process.env.HYGRAPH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Acecpt: "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: relative,
    },
  });

  const { data } = await responce.json();
  return data;
};
