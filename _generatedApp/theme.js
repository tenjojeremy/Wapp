module.exports = `
  <style type="text/css">
  
/* body */ 
      
body {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
}

*,
* > *,
* * {
  box-sizing: border-box;
}

@media only screen and (min-width: 900px) {
  body {
    background-color: var(--color-lightgrey);
  }
}

 /* color */

  :root {
  --color-primary: #24c3a9;
--color-primaryDarker: #005a34;
--color-primaryBackground: #aaffdb;
--color-secondary: #ada3ff;
--color-secondaryDarker: #6700ca;
--color-secondaryBackground: #ebe8ff;
--color-disabledForeground: #828282;
--color-disabledBackground: #f2f2f2;
--color-darkgrey: #717171;
--color-lightgrey: #eeeeee;
--color-grey: #bdbdbd;
--color-yellow: #FFD166;
--color-white: #fff;
--color-whiteOpaque: rgba(255, 255, 255, 0.8);
--color-black: #212121;
--color-blackBackground: rgba(0, 0, 0, 0.1);
--color-blackOpaque: rgba(33, 33, 33, 0.8);
--color-background: #ffffff;
--color-success: #48FE93;
--color-successForeground: #005a34;
--color-error: #FE4848;
--color-errorForeground: white;
  }

/* forms */ 
      
input {
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
}

input:active {
  outline: none;
}

input::-ms-clear {
  display: none;
}

.image-upload > input {
  display: none;
}

textarea {
  font-family: Roboto;
  border: none;
  outline: none;
}

textarea:active {
  outline: none;
}

/* scrollbar */ 
      
@media only screen and (min-width: 1200px) {
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #bdbdbd;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #bdbdbd;
  }
}

/* selection */ 
      
  ::-moz-selection {
    color: white;
    background: var(--color-secondary);
  }
  
  ::selection {
    color: white;
    background: var(--color-secondary);
  }

 /* typography */

  :root {
  --typography-primary: Montserrat;
--typography-secondary: Roboto;
  }

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
  }
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
  
 
  </style>`