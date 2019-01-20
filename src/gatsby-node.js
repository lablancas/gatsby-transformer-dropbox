const fetch = require(`node-fetch`)
const path = require(`path`)
const { Dropbox } = require(`dropbox`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}, { accessToken }) => {
  if (node.internal.type === 'DropboxNode') {
    const dbx = new Dropbox({ fetch, accessToken })
    return dbx.sharingCreateSharedLink({ path: node.path }).then(link => {
      const ext = path.extname(node.name)

      return createRemoteFileNode({
        url: link.url,
        store,
        cache,
        createNode,
        createNodeId,
        ext,
        name: path.basename(node.name, ext)
      }).then(fileNode => {
        if (fileNode) {
          node.localFile___NODE = fileNode.id
        }
      })
    })
  }
}
