const fetch = require("node-fetch");

exports.onPreInit = () => {
  console.log("Testing gatsby source plugin...");
};

async function getData() {
  const res = await fetch("url");
  const json = await res.json();
  return json;
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const data = await getData();
  const uniqueNodeName = 'change me';
  data.forEach((item) => {
    const newNode = {
      ...item,
      id: createNodeId(item.name),
      internal: {
        type: uniqueNodeName,
        contentDigest: createContentDigest(planet),
      },
    };
    actions.createNode(newNode);
  });
};
