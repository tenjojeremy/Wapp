## Installation

```
yarn global add @tenjojeremy/wapp
```

Can only be used as a global package in order for it to run concurrently

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
