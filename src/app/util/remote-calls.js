import fetch from 'isomorphic-fetch';

/**
 * Fetches a JSON representation of a RSS feed using the rss2json api
 * @export
 * @param {string} rssUrl
 * @returns {Promise}
 */
export function fetchRSSJSON(rssUrl) {
  const url = `${process.env.API_URL}?rss_url=${encodeURIComponent(rssUrl)}`;
  return fetch(url).then((res) => res.json()).then((res) => {
    if (res.feed && res.items) {
      return { feed: res.feed, items: res.items };
    }
    if (res.status === 'error' && res.message) {
      return Promise.reject(res.message);
    }
    return Promise.reject();
  }).catch((message) => Promise.reject(message || 'Remote error'));
}
