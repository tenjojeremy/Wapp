module.exports = {
  fonts: ['montserrat', 'roboto'],
  variables: {
    primary: 'Montserrat',
    secondary: 'Roboto'
  },
  types: `
  span[variant="h1"] {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 300;
    font-size: 96px;
    letter-spacing: -1.5px;
    color: var(--color-black)
  }
  span[variant="h2"] {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    letter-spacing: -0.5px;
    color: var(--color-black)
  }
  span[variant="h3"] {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  color: var(--color-black)
  }
  span[variant="h4"] {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    letter-spacing: 0.25px;
    color: var(--color-black)
  }
  
  span[variant="h5"] {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: var(--color-black)
  }
  
  span[variant="h6"] {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.15px;
    color: var(--color-black)
  }
  
  p[variant="body1"] {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: 0.5px;
    color: var(--color-black)
  }
  
  p[variant="body2"] {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.25px;
  color: var(--color-black)
  }
  
  span[variant="subtitle1"] {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.15px;
  color: var(--color-black)
  }
  
  span[variant="subtitle2"] {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: var(--color-black)
  }
  span[variant="button"] {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    color: var(--color-black)
  }
  span[variant="caption"] {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.4px;
  color: var(--color-black)
  }
  span[variant="overline"] {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--color-black)
  }`,
  resets: `
  h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
p{margin:0}
  `
}
