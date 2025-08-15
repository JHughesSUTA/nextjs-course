import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Name of Website",
  description: "A lot of keywords",
  keywords: "about, company, mission, ai, saas",
  twitter: {
    card: "summary_large_image",
    title: "About Us | Twitter",
  },
};

const About = () => {
  console.log("is this in the server or client?");
  return <div>About</div>;
};

export default About;
