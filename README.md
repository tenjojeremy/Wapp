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
