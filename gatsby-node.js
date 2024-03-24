const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for different types of content
  const pageQuery = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const blogPostQuery = await graphql(`
    query {
      allContentfulBlogpost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // Create pages based on the query results
  if (pageQuery.errors || blogPostQuery.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  pageQuery.data?.allContentfulPage?.edges.forEach((edge) => {
    const slug = edge.node.slug || 'empty';
    createPage({
      path: slug,
      component: path.resolve('./src/templates/contentful-post.js'),
      context: {
        slug: slug.toString(),
      },
    });
  });

  blogPostQuery.data?.allContentfulBlogpost?.edges.forEach((edge) => {
    const slug = edge.node.slug || 'empty';

    createPage({
      path: `blog${slug}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        title: 'test',
        slug: slug,
      },
    });
  });
};

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
