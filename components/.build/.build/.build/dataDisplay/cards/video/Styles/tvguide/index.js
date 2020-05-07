import _extends from '@babel/runtime/helpers/extends';
import React, { memo, useState, useEffect } from 'react';
import Animation from '../../../../../utils/animations/wap';
import Box from '../../../../box';
import Poster from '../../../poster/styles/1';
import Typography from '../../../../typography';
import Icon from '../../../../icon';
import Select from '../../../../../input/form/select/styles/tvguide/';
import Button from '../../../../../input/button/styles/base';
import { defaultProps, propTypes } from '../../base/propTypes';

const CardMovie1 = ({
  loadingMessage,
  loadingMessageStyles,
  poster,
  title,
  overview,
  favorite,
  onLoadMore,
  onFavoriteToggle,
  onPlay,
  buttonTextVariant,
  playIcon,
  plusIcon,
  starIcon,
  playLabel,
  plusLabel,
  iconBackgroundColor,
  titleVariant,
  overviewVariant,
  isTv,
  seasons,
  episodes,
  selectProps,
  posterAlt,
  lastAiredEpisode,
  onClose,
  infoMessage,
  infoMessageStyles,
  ...rest
}) => {
  const favIcon = favorite ? ''.concat(starIcon, '-filled') : starIcon;
  const [selectedSeason, setselectedSeason] = useState('01');
  const [selectedEpisode, setselectedEpisode] = useState('01');
  const [nextEpisode, setnextEpisode] = useState(null);
  const [nextEpisodeLabel, setnextEpisodeLabel] = useState('');
  const [lastWatched, setLastWatched] = useState(JSON.parse(localStorage.getItem(''.concat(title, '_lastWatched'))));
  const [lastWatchedLabel, setLastWatchedLabel] = useState('');
  const [latestEpisode, setLatestEpisode] = useState(null);
  const [latestEpisodeLabel, setLatestEpisodeLabel] = useState(''); // Handle selected episode

  const handleOnPlay = () => {
    const isMovie = !isTv;
    if (isMovie) onPlay(rest);else {
      const season = formatNumber(selectedSeason);
      const episode = formatNumber(selectedEpisode);
      const data = {
        season,
        episode
      };
      onPlay(data);
      updateLastWatched(data);
    }
  };

  const handleOnSeasonChange = value => setselectedSeason(value);

  const handleOnEpisodeChange = value => setselectedEpisode(value); // Handle next episode


  useEffect(() => {
    createNextEp();
  }, [lastWatched, episodes, seasons]);

  const createNextEp = () => {
    if (lastWatched) {
      const lastWatchedType = typeof lastWatched;
      const {
        season,
        episode
      } = lastWatchedType === 'string' ? JSON.parse(lastWatched) : lastWatched;
      const nextSeason = parseInt(season, 10) + 1;
      const nextEp = parseInt(episode, 10) + 1;
      const episodesInCurrentSeason = parseInt(episodes.length, 10);
      const numberOfSeasons = parseInt(seasons.length, 10);
      const isThereNextEpisodeInCurrentSeason = nextEp <= episodesInCurrentSeason;
      let fSeason = '';
      let fEpisode = '';

      if (isThereNextEpisodeInCurrentSeason) {
        fSeason = formatNumber(parseInt(season, 10));
        fEpisode = formatNumber(nextEp);
        setnextEpisode({
          season: fSeason,
          episode: fEpisode
        });
      } else {
        const isThereNextSeason = nextSeason <= numberOfSeasons;

        if (isThereNextSeason) {
          fSeason = formatNumber(nextSeason);
          fEpisode = formatNumber('01');
          setnextEpisode({
            season: fSeason,
            episode: fEpisode
          });
        }
      }

      fSeason !== '' ? setnextEpisodeLabel('Next S'.concat(fSeason, ' E').concat(fEpisode)) : setnextEpisode(null);
    }
  };

  const handlePlayNext = () => {
    onPlay(nextEpisode);
    updateLastWatched(nextEpisode);
  }; // Handle last watched episode


  useEffect(() => {
    createLastWatched();
  }, [lastWatched]);

  const createLastWatched = () => {
    if (lastWatched) {
      const lastWatchedType = typeof lastWatched;
      const {
        season,
        episode
      } = lastWatchedType === 'string' ? JSON.parse(lastWatched) : lastWatched;
      const fSeason = formatNumber(season);
      const fEpisode = formatNumber(episode);
      setLastWatchedLabel('Last watched S'.concat(fSeason, ' E').concat(fEpisode));
    }
  };

  const handleOnPlayLastWatched = () => {
    onPlay(lastWatched);
    updateLastWatched(lastWatched);
  }; // Handle last aired episode


  useEffect(() => {
    createLatest();
  }, [lastAiredEpisode]);

  const createLatest = () => {
    if (lastAiredEpisode) {
      const {
        season,
        episode
      } = lastAiredEpisode;
      const fSeason = formatNumber(season);
      const fEpisode = formatNumber(episode);
      setLatestEpisode({
        season: fSeason,
        episode: fEpisode
      });
      setLatestEpisodeLabel('Last Aired S'.concat(fSeason, ' E').concat(fEpisode));
    }
  };

  const handleOnPlayLatest = () => {
    onPlay(latestEpisode);
    updateLastWatched(latestEpisode);
  }; // Rest


  const updateLastWatched = ({
    season,
    episode
  }) => {
    setLastWatched({
      season,
      episode
    });
    localStorage.setItem(''.concat(title, '_lastWatched'), JSON.stringify({
      season,
      episode
    }));
  };

  const handleLoadMore = () => onLoadMore(rest);

  const handleFavoriteToggle = () => onFavoriteToggle(rest);

  const formatNumber = number => {
    const type = typeof number;
    if (type === 'string' || type === 'number') return number.toString().length === 1 ? '0'.concat(number) : number;else return '01';
  }; // Styles


  const wrapper = {
    borderRadius: '10px',
    gridAutoFlow: 'row',
    justifyItems: 'center',
    textAlign: 'center',
    gridGap: 's',
    width: '100%',
    padding: 'none'
  };
  const buttonStyles = {
    height: 'auto',
    padding: 'var(--spacing-xs)'
  };
  return /*#__PURE__*/React.createElement(Box, {
    styles: wrapper
  }, /*#__PURE__*/React.createElement(Poster, {
    src: poster,
    size: 300,
    alt: posterAlt,
    noAnimation: true
  }), /*#__PURE__*/React.createElement(Box, {
    styles: {
      padding: 'xxs',
      justifyContent: 'space-between',
      gridAutoFlow: 'column',
      width: '100%',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: 'close/feather',
    onClick: onClose,
    styles: {
      justifySelf: 'start',
      color: 'white'
    }
  }), loadingMessage && /*#__PURE__*/React.createElement(Animation, {
    show: loadingMessage,
    name: 'blinking'
  }, /*#__PURE__*/React.createElement(Typography, {
    text: loadingMessage,
    styles: loadingMessageStyles
  })), infoMessage && /*#__PURE__*/React.createElement(Typography, {
    text: infoMessage,
    styles: infoMessageStyles
  }), /*#__PURE__*/React.createElement(Icon, {
    name: favIcon,
    color: 'yellow',
    onClick: handleFavoriteToggle
  })), /*#__PURE__*/React.createElement(Box, {
    styles: {
      gridGap: 's',
      padding: 'l',
      alignContent: 'center',
      backgroundColor: 'white',
      borderRadius: '20px 20px 0 0',
      width: '100%'
    }
  }, title && !isTv && /*#__PURE__*/React.createElement(Typography, {
    text: title,
    variant: titleVariant
  }), overview && !isTv && /*#__PURE__*/React.createElement(Typography, {
    text: overview,
    variant: overviewVariant
  }), isTv && /*#__PURE__*/React.createElement(Typography, {
    text: 'Select Episode',
    styles: {
      color: 'darkgrey'
    },
    variant: overviewVariant
  }), /*#__PURE__*/React.createElement(Box, {
    styles: {
      gridAutoFlow: 'column',
      justifyContent: 'center',
      gridAutoColumns: '60px',
      justifyItems: 'center',
      alignItems: 'start'
    }
  }, isTv && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, _extends({
    data: seasons,
    backgroundColor: 'primaryLighter',
    title: 'Season',
    onChange: handleOnSeasonChange,
    titleColor: 'primaryDarker',
    wrapperStyles: {
      padding: 'none'
    },
    size: '45px'
  }, selectProps)), /*#__PURE__*/React.createElement(Select, _extends({
    data: episodes,
    backgroundColor: 'primaryLighter',
    title: 'Episode',
    onChange: handleOnEpisodeChange,
    titleColor: 'primaryDarker',
    wrapperStyles: {
      padding: 'none'
    },
    size: '45px'
  }, selectProps))), !isTv && /*#__PURE__*/React.createElement(Icon, {
    name: plusIcon,
    color: 'primaryDarker',
    label: {
      text: plusLabel,
      variant: 'body2'
    },
    onClick: handleLoadMore,
    background: true,
    backgroundColor: iconBackgroundColor
  }), /*#__PURE__*/React.createElement(Icon, {
    name: playIcon,
    color: 'primaryDarker',
    label: {
      text: playLabel,
      variant: 'body2'
    },
    onClick: handleOnPlay,
    background: true,
    backgroundColor: iconBackgroundColor
  })), isTv && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    text: 'or Play',
    styles: {
      color: 'darkgrey'
    },
    variant: overviewVariant
  }), /*#__PURE__*/React.createElement(Box, {
    styles: {
      gridAutoFlow: 'column',
      gridGap: 's',
      justifyContent: 'center'
    }
  }, lastWatched && /*#__PURE__*/React.createElement(Button, {
    style: buttonStyles,
    text: lastWatchedLabel,
    typographyVariant: buttonTextVariant,
    onClick: handleOnPlayLastWatched
  }), nextEpisode && /*#__PURE__*/React.createElement(Button, {
    style: buttonStyles,
    text: nextEpisodeLabel,
    typographyVariant: buttonTextVariant,
    onClick: handlePlayNext
  }), lastAiredEpisode && /*#__PURE__*/React.createElement(Button, {
    style: buttonStyles,
    typographyVariant: buttonTextVariant,
    text: latestEpisodeLabel,
    onClick: handleOnPlayLatest
  })))));
};

CardMovie1.defaultProps = defaultProps;
CardMovie1.propTypes = propTypes;
export default memo(CardMovie1);