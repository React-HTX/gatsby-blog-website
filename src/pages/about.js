import React from "react";
import Layout from "../components/layout";
import { Link, useStaticQuery, graphql } from "gatsby";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMeetupEvent(limit: 10) {
        nodes {
          id
          name
          description
        }
      }
    }
  `);

  console.log(data);
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export default AboutPage;
