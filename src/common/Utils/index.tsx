import moment from 'moment';

import {Dimensions, Platform} from 'react-native';

/**
 * Get the available screen height
 * @returns {number} available screen height
 */
const getScreenHeight = () => {
  return Dimensions.get('screen').height;
};

/**
 * Get the available screen width
 * @returns {number} available screen width
 */
const getScreenWidth = () => {
  return Dimensions.get('screen').width;
};

/**
 * Get the available screen width without main container padding
 * @returns {number} available width
 */
const getContentWidth = () => {
  return Dimensions.get('screen').width - getMainContentPadding() * 2;
};

/**
 * Defines the apps main container padding
 * @returns {number} app main container padding
 */
const getMainContentPadding = () => {
  return 18.5;
};

/**
 * Get the height of the bottom menu
 * @returns {number}
 */
const getBottomMenuHeight = () => {
  return 78;
};

/**
 * Get the height of the header banner
 * @returns {number}
 */
const getTopBannerHeight = () => {
  return 192;
};

/**
 * Generate a unique string id
 * @param prefix string
 * @returns random id
 */
const uuid = (prefix: string) => {
  return prefix + Math.random().toString(16).slice(-4);
};

/**
 * Helper function to create a short excerpt by text and text limit
 * @param {string} text the text you want to shorten
 * @param {number} count the number of charachters to return
 * @param {string} moreText the "read more" text
 * @returns {string} the shortened string generated
 */
const limitText = (
  text: string,
  count: number,
  moreText: string | null | undefined = '',
) => {
  return text.length > count ? `${text.slice(0, count)}${moreText}` : text;
};

/**
 * Helper function to format dates across the application
 * @param {Date | string} date the original date
 * @returns {date} date formatted "DD/MM/YYYY";
 */
const getFormattedDate = (date: Date | string, format?: string) => {
  const dateFormat = format || 'DD/MM/YY HH:mm';

  const local = 'he';

  const newDate = new Date(date);

  return moment(newDate).locale(local).format(dateFormat);
};

const isIos = () => {
  return Platform.OS === 'ios';
};

export {
  isIos,
  getScreenHeight,
  getScreenWidth,
  getBottomMenuHeight,
  getTopBannerHeight,
  getFormattedDate,
  limitText,
  uuid,
  getContentWidth,
  getMainContentPadding,
};
