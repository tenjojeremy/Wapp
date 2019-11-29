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
