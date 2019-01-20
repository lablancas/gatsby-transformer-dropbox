Transformer plugin for getting files from Dropbox account.

Create remote file nodes does not work in the latest `gatsby-source-dropbox` plugin so this is a temporary fix so that you can use `gatsby-source-dropbox` as documented.

See [gatsby-source-dropbox](https://github.com/oorestisime/gatsby-source-dropbox/)

## Install

`npm install --save gatsby-transformer-dropbox`

## How to use

Configure the plugin. Place the `gatsby-transformer-dropbox` entry after `gatsby-source-dropbox`

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-dropbox`,
    options: {
      accessToken: `access-token`,
      extensions: ['.pdf', '.jpg', '.png', '.md'],
      path: '/path/to/folder',
      recursive: false,
    },
  },
  {
    resolve: `gatsby-transformer-dropbox`,
    options: {
      accessToken: `access-token`,
    },
  },
]
```

#### Options

* **accessToken:** the token to use for querying dropbox. In order to get an access token you will need to create an app https://www.dropbox.com/developers/apps and generate one.
