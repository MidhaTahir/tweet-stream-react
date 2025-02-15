import { combineReducers } from 'redux';
import { ADD_TWEETS, SET_STATUS } from './actions';

const tweets = (tweets = [], action) => {
  if (action.type === ADD_TWEETS) {
    return action.payload.tweets;
  }
  return tweets;
};

export default combineReducers({
  tweets,
});
