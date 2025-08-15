import ButtonComponent from "./button";

const Contact = async () => {
  console.log("is this in the server or client?");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

  return (
    <div>
      <ButtonComponent />
    </div>
  );
};

export default Contact;
