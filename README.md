<p align="center">
  <a href="https://tenjo-web-toolkit.web.app/" rel="noopener" target="_blank"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/wapp-framework.appspot.com/o/logo.png?alt=media&token=76c553fa-2bbc-4e29-9a42-0b32f256bcfd" alt="Wapp logo"></a></p>
</p>

<h1 align="center">Wapp</h1>

<div align="center">

Definitive React framework 

## Installation

```
yarn add @tenjojeremy/wapp
```

Add scripts to package json

```json
  "scripts": {
    "start": "wapp",
    "build": "wapp build",
    "build:analyze": "wapp build && wapp analyze",
  }
```

## Global state

Files with extenstion `.state.js` in their name ie: `movies.state.js` will be added to global state
ensure name of exported provider is the same name of the file ei: `export { MoviesProvider } from...`

## .wapp.manifest.js

### authentication

Options: `firebase`

```md
authentication: 'firebase',
```

### Firebase

```md
firebase: {
config: firebaseConfig,
},
```

### Fonts

defaults: source: 'google'

```md
typogrpahy: {
source = 'firebase
fonts: ['roboto', { name: 'montserrat', weights: [500] }],
},
```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
