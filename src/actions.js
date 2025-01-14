export const ADD_TWEETS = 'ADD_TWEETS';
export const SET_STATUS = 'SET_STATUS';

export const fetchTweets = () => {
  return (dispatch) => {
    dispatch(setStatusToLoading);
    fetch('http://tweet-stream.glitch.me/api/tweets')
      .then((res) => res.json())
      .then((res) => {
        dispatch(addTweets(res.tweets));
      })
      .catch(console.log);
  };
};

export const addTweets = (tweets) => ({
  type: ADD_TWEETS,
  payload: { tweets },
});

export const setStatusToLoading = () => ({
  type: SET_STATUS,
  payload: { status: 'LOADING' },
});
