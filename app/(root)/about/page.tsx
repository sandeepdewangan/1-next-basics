import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Only About will get output",
  },
  description: "Desc",
};
const About = () => {
  return <div>About</div>;
};

export default About;
