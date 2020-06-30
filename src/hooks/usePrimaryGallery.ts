import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";

interface Query {
  allFile: {
    nodes: {
      id: string;
      name: string;
      publicURL: string;
      childImageSharp: {
        fluid: FluidObject;
      };
    }[];
  };
}

const useGallery = () => {
  const data = useStaticQuery<Query>(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "content/primary" } }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  if (!data || !data.allFile) return null;

  return data.allFile.nodes.map((node) => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name,
    publicURL: node.publicURL,
  }));
};

export default useGallery;
