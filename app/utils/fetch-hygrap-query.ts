export const fetchHygraphQuery = async <T>
  (query: string, revalidate?: number)
: Promise<T> => {
  const responce = await fetch(process.env.HYGRAPH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Acecpt: "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: revalidate ?? 60, 
    },
  });

  const { data } = await responce.json();
  return data;
};
