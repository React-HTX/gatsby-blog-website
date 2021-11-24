import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map(({ frontmatter, id, body }) => {
          const { title, date } = frontmatter;
          return (
            <article key={id}>
              <h2>{title}</h2>
              <p>Posted: {date}</p>
              <MDXRenderer>{body}</MDXRenderer>
            </article>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
