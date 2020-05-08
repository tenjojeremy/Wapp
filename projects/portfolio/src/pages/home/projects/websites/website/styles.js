export const wrapper = (color, backgroundImage) => {
  return {
    backgroundColor: `--${color}`,
    backgroundImage: ['none', 'none', `url(${backgroundImage})`],
    backgroundAttachment: 'fixed',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: ['auto', 'auto', '100vh'],
  }
}

export const innerWrapper = {
  backgroundColor: ['transparent', 'transparent', '--rgba(0,0,0, 0.5)'],
  justifyContent: ['center', 'center', 'start'],
  height: '100%',
  width: ['auto', 'auto', '50%'],
  transform: ['none', 'none', 'translateX(100%)'],
  paddingLeft: ['none', 'none', 'xxl'],
  alignItems: 'center',
  overflow: 'auto',
}

export const infoWrapper = {
  width: ['100%', '100%', 'auto'],
  maxWidth: '400px',
  padding: 'm',
  color: 'white',
  height: 'fit-content',
  gridGap: 'm',
}

export const titles = {
  textAlign: ['center', 'center', 'left'],
}

export const position = {
  textTransform: 'uppercase',
  borderBottom: '1px solid white',
  paddingBottom: '4px',
  width: 'fit-content',
  justifySelf: ['center', 'center', 'start'],
}

export const techListWrapper = {
  gridGap: 'xs',
}

export const techListList = {
  fontWeight: 'bold',
}

export const techList = {
  gridAutoFlow: 'column',
  justifyContent: 'start',
  gridGap: 's',
  backgroundColor: '--rgba(0,0,0, 0.5)',
  padding: 's',
  width: 'fit-content',
  borderRadius: '10px',
}

export const titlesWrapper = {
  gridGap: ['s', 's', 'xxs'],
}

export const icon = {
  cursor: 'auto',
}

export const description = {
  paddingTop: 'm',
  paddingBottom: 'm',
}
export const screenshots = {
  cursor: 'pointer',
}
