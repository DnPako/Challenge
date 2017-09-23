import { combineReducers } from 'redux';
import videoReducer from './videosReducer';

const rootReducer = combineReducers({
  videos: videoReducer
});

export default rootReducer;
