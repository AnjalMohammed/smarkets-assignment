export const EVENTS_API = 'https://api.smarkets.com/v3/events/';
export const POPLAR_EVENTS_API = (event) =>
  `https://api.smarkets.com/v3/popular/event_ids/sport/${event}/`;
export const EVENT_DETAILS_API = (eventId) =>
  `https://api.smarkets.com/v3/events/${eventId}/`;

export const LOGO_URL =
  'https://smarkets.com/static/assets/smarkets-logo.33cf24e1279443342527.svg';
export const SIGN_IN_URL =
  'https://smarkets.com/members/login?redirect=%2Fsport%2Ffootball';
export const SIGN_UP_URL = 'https://smarkets.com/members/signup';
