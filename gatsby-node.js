/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const { createFilePath } = require('gatsby-source-filesystem');

// Modify nodes that are created by plugins.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Ensure frontmatter images are usable.
  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    // Add the collection to our node so it can be used in querying.
    const collection = getNode(node.parent).sourceInstanceName;
    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });
  }
};
