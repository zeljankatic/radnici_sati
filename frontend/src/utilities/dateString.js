/**
 *
 * @param {date} datum
 * @returns {string} - returns a string in the format of "D.M.YYYY"
 */

export default function createDateString(datum) {
  return `${datum.getDate()}.${datum.getMonth() + 1}.${datum.getFullYear()}`;
}
