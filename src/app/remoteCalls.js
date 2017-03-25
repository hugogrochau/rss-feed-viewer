import fetch from 'isomorphic-fetch';

/**
 * Fetches a JSON representation of a RSS feed using the rss2json api
 * @export
 * @param {any} rssUrl
 * @returns {Promise}
 */
export function fetchRSSJSON(rssUrl) {
  const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
  return fetch(url)
    .then((res) => res.json());
}
