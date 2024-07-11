import {combineReducers} from 'redux';
import {State} from 'TYPES/State';
import optionsSlice from '../slices/Options';
import cheesyStateSlice from 'STORE/slices/CheesyState';

export default combineReducers<State>({
  options: optionsSlice.reducer,
  cheesyState: cheesyStateSlice.reducer
});
