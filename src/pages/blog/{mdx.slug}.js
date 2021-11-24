import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../../components/layout";

const BlogPost = ({ data }) => {
  const {
    frontmatter: {
      title,
      date,
      hero_image,
      hero_image_alt,
      hero_image_credit_link,
      hero_image_credit_text,
    },
    body,
  } = data.mdx;
  const image = getImage(hero_image);
  return (
    <Layout pageTitle={title}>
      <p>{date}</p>
      <GatsbyImage image={image} alt={hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={hero_image_credit_link}>{hero_image_credit_text}</a>
      </p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_link
      }
      body
    }
  }
`;

export default BlogPost;
