import { string, func, array, bool, object } from 'prop-types';
export const defaultProps = {
  infoMessage: null,
  infoMessageStyles: {
    color: 'white'
  },
  loadingMessage: null,
  loadingMessageStyles: {
    color: 'primary'
  },
  poster: null,
  title: null,
  overview: null,
  isTv: null,
  playIcon: 'play/feather',
  playLabel: 'Play',
  plusIcon: 'plus/feather',
  plusLabel: 'Load More',
  starIcon: 'star/feather',
  iconBackgroundColor: 'primaryLighter',
  titleVariant: 'h6',
  overviewVariant: 'body2',
  buttonTextVariant: 'body2',
  posterAlt: 'poster',
  favorite: null,
  moreLinks: null,
  lastAiredEpisode: null,
  seasons: [],
  episodes: [],
  lastEpWatched: null,
  onPlay: () => null,
  onLoadMore: () => null,
  onFavoriteToggle: () => null,
  onSeasonChange: () => null,
  onEpisodeChange: () => null,
  onClose: () => null
};
export const propTypes = {
  poster: string,
  posterAlt: string,
  title: string,
  overview: string,
  lastAiredEpisode: object,
  iconBackgroundColor: string,
  favorite: bool,
  isTv: bool,
  moreLinks: array,
  onPlay: func,
  onLoadMore: func,
  onFavoriteToggle: func
};