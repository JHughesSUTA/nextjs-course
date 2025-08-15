import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "3rem", color: "#ff6347" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.2rem" }}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" style={{ color: "#422fca", textDecoration: "underline" }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
