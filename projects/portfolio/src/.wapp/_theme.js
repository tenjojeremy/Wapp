module.exports = `
  <style type="text/css">
  
 /* color */

  :root {
  --color-primary: #0302dc;
--color-primaryDarker: #005a34;
--color-primaryLighter: #b5fffc;
--color-secondary: #ada3ff;
--color-secondaryDarker: #6700ca;
--color-secondaryLighter: #ebe8ff;
--color-disabledForeground: #828282;
--color-disabledBackground: #f2f2f2;
--color-darkgrey: #717171;
--color-lightgrey: #eeeeee;
--color-grey: #bdbdbd;
--color-yellow: #FFD166;
--color-white: #fff;
--color-whiteOpaque: rgba(255, 255, 255, 0.8);
--color-black: #06070B;
--color-blackBackground: rgba(0, 0, 0, 0.1);
--color-blackOpaque: rgba(33, 33, 33, 0.8);
--color-background: #06070B;
--color-success: #48FE93;
--color-successForeground: #005a34;
--color-red: #FE4848;
--color-error: #FE4848;
--color-errorForeground: white;
  }

 /* spacing */

  :root {
  --spacing-auto: auto;
--spacing-none: 0;
--spacing-unit: 16px;
--spacing-xxs: calc(0.25 * var(--spacing-unit));
--spacing-xs: calc(0.5 * var(--spacing-unit));
--spacing-s: calc(0.75 * var(--spacing-unit));
--spacing-m: calc(1.25 * var(--spacing-unit));
--spacing-l: calc(2 * var(--spacing-unit));
--spacing-xl: calc(3.25 * var(--spacing-unit));
--spacing-xxl: calc(5.25 * var(--spacing-unit));
  }

 /* fonts */

  :root {
  --font-primary: monospace;
  }

  .typography-title {
    font-family:  var(--font-primary);
    font-weight: bolder;
    text-shadow: rgba(181, 255, 252, 0.19) 0px 0px 9px;
    font-size: 40px;
  }
  @media (min-width: 500px) {
  .typography-title {
    font-size: 66px;
    }
  }
  .typography-subtitle {
    font-family:  var(--font-primary);
    font-size: 20px;
    font-weight: bold;
  }
  .typography-body2 {
    font-family:  var(--font-primary);
    letter-spacing: 2px;
    font-size: 16px;
  }
  @media (min-width: 500px) {
  .typography-body2 {
    font-size: 18px;
      }
    }
  .typography-headerTwo {
    font-family: var(--font-primary);
    font-size: 35px;
    letter-spacing: 0.13px;
    text-shadow: rgba(255, 255, 255, 0.65) 0px 0px 9px;
    margin: 0px;
    font-weight: bold;
  }

  @media (min-width: 700px) {
    .typography-headerTwo {
      font-size: 50px;
        }
      }
  
  .typography-body1 {
    font-family:  var(--font-primary);
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 25px;
  }  

  
  .typography-subtitle1 {
    font-family:  var(--font-primary);
  font-size: 17px;
  letter-spacing: 0.15px;
  }
  
  .typography-subtitle2 {
    font-family:  var(--font-primary);
    font-size: 14px;
  }
  .typography-button {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }
  .typography-caption {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.4px;
  }
  .typography-navbar {
    font-family:  var(--font-primary);
    font-size: 10px;
    font-weight: bold;
  }
  .typography-overline {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
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
  
/* body */
      
body {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  background: var(--color-primary);
}

*,
* > *,
* * {
  box-sizing: border-box;
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
      
/* selection */
      
  ::-moz-selection {
    color: white;
    background: var(--color-secondary);
  }
  
  ::selection {
    color: white;
    background: var(--color-secondary);
  }

 
  </style>`
