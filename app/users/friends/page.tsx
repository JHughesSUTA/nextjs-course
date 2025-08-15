"use client";
import { useState } from "react";

const makePostRequest = async () => {
  // const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
  const res = await fetch(`/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "James" }),
  });

  const data = await res.json();
  return { data };
};

const Friends = () => {
  const [message, setMessage] = useState<string>("");
  const onClick = async () => {
    const { data } = await makePostRequest();
    setMessage(data.message);
  };
  return (
    <h1>
      Hey Friends, {message} <button onClick={onClick}> Click Here </button>
    </h1>
  );
};

export default Friends;
