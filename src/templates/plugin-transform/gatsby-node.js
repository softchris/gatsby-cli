const parseContent = require("./parseContent");

exports.onPreInit = () => {
  console.log("Testing plugin...");
};

async function onCreateNode({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) {
  function transformObject(obj, id, type) {
    const node = {
      ...obj,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type,
      },
    };
    createNode(csvNode);
    createParentChildLink({ parent: node, child: node });
  }

  const { createNode, createParentChildLink } = actions;

  const mediaType = "set me to a certain media type";
  const nodeName = "set me to a unique node name";

  if (node.internal.mediaType !== mediaType) {
    return;
  }

  const content = await loadNodeContent(node);
  const parsedContent = parseContent(content);
  transformObject(parsedContent, createNodeId(row.id), nodeName);
}
exports.onCreateNode = onCreateNode;
