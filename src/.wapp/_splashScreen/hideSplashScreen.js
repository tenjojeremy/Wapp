export default () => {
  const splashScreen = document.getElementById('splashScreen')

  if (splashScreen) {
    const animationApiIsSupported = splashScreen.animate

    if (animationApiIsSupported) {
      const animationId = splashScreen.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 100,
        fill: 'forwards',
      })
    } else splashScreen.remove()
  }
}
