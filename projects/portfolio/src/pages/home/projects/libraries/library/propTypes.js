import { string } from 'prop-types'

export const defaultProps = {
  logo: null,
  name: null,
  description: null,
  repo: null,
  site: null,
  backgroundIMG: null,
}

export const propTypes = {
  logo: string,
  name: string,
  description: string,
  repo: string,
  site: string,
  backgroundIMG: string,
}
