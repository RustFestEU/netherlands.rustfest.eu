/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

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

    // Add slug information based on the collection.
    const slugPrefix = {
      sessions: '/sessions',
      speakers: '/speakers',
      pages: '',
    };
    if (slugPrefix[collection] !== undefined) {
      createNodeField({
        name: `slug`,
        node,
        value: `${slugPrefix[collection]}${createFilePath({ node, getNode })}`,
      });
    }
  }
};

// Transform the session speakers frontmatter field into a relation.
// We use sourceNodes instead of onCreateNode because at this time plugins
// will have created all nodes already and we can link both speakers and
// sessions.
exports.sourceNodes = ({ actions, getNodes, getNode }) => {
  const { createNodeField } = actions;

  const sessionsOfSpeakers = {};
  const speakersOfSessions = {}; // reverse index.

  // Create a helper method to find the speaker node.
  const getSpeakerByName = name =>
    getNodes().find(
      node2 =>
        node2.internal.type === `MarkdownRemark` &&
        node2.fields.collection === 'speakers' &&
        node2.frontmatter.name === name
    );

  // Iterate through all session markdown nodes to find the links between
  // sessions and speakers and vice versa.
  getNodes()
    .filter(
      node =>
        node.internal.type === `MarkdownRemark` &&
        node.fields.collection === 'sessions'
    )
    .forEach(node => {
      if (node.frontmatter.speakers) {
        // Normalise the speakers to an array.
        const speakerNodes =
          node.frontmatter.speakers instanceof Array
            ? node.frontmatter.speakers.map(getSpeakerByName)
            : [getSpeakerByName(node.frontmatter.speakers)];

        speakerNodes
          // Filter all undefined values.
          .filter(speakerNode => speakerNode)
          // Iterate through the speakerNodes to register the relationship.
          .forEach(speakerNode => {
            if (!(speakerNode.id in sessionsOfSpeakers)) {
              sessionsOfSpeakers[speakerNode.id] = [];
            }

            sessionsOfSpeakers[speakerNode.id].push(node.id);

            if (!(node.id in speakersOfSessions)) {
              speakersOfSessions[node.id] = [];
            }

            speakersOfSessions[node.id].push(speakerNode.id);
          });
      }
    });

  // With all relationships defined, create the fields.
  // createNodeField will create the node relationship based on the id we found.
  // First for the sessions on the speaker content.
  Object.entries(sessionsOfSpeakers).forEach(
    ([speakerNodeId, sessionNodeIds]) => {
      createNodeField({
        node: getNode(speakerNodeId),
        name: `sessions`,
        value: sessionNodeIds,
      });
    }
  );

  // Then for the speakers of the session content.
  Object.entries(speakersOfSessions).forEach(
    ([sessionNodeId, speakerNodeIds]) => {
      createNodeField({
        node: getNode(sessionNodeId),
        name: `speakers`,
        value: speakerNodeIds,
      });
    }
  );
};

// Create pages that come directly form Markdown files. These are different
// than the dynamic overview pages in the src/pages/ folder.
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allPagesConnection: allMarkdownRemark(
        filter: { fields: { collection: { eq: "pages" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Create all blog post pages.
  data.allPagesConnection.edges.forEach(edge => {
    const id = edge.node.id;
    const slug = edge.node.fields.slug;
    actions.createPage({
      path: slug,
      component: require.resolve('./src/components/templates/Page.js'),
      context: { id },
    });
  });
};
