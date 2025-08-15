const makePostRequest = async () => {
  const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "James" }),
  });

  const data = await res.json();
  return { data };
};

const Friends = async () => {
  const { data } = await makePostRequest();
  return <h1>Hey Friends, {data.message} </h1>;
};

export default Friends;
