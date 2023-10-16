import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    // TODO: make request to authentificate a new token
    const { data } = await moviesApi.get('/authentication/token/new');
    const token = data.request_token;

    if (data.success) {
      // TODO: set the token to localStorage
      localStorage.setItem('request_token', token);
      // TODO:redirect from tmdb.com to our website, our url is
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log('Sorry, the token cant be createted');
  }
};

export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');
  if (token) {
    try {
      // TODO: base on token, create a new session in tmdb
      const {
        data: { session_id },
      } = await moviesApi.post('authentication/session/new', {
        request_token: token,
      });
      localStorage.setItem('session_id', session_id);
      return session_id;
    } catch (error) {
      console.log(error);
    }
  }
};
