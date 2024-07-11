import {configureStore} from '@reduxjs/toolkit';
import {useDispatch as d, useSelector as s} from 'react-redux';
import reducer from './reducers/root';
import {State} from 'TYPES/State';

const store = configureStore<State>({
  reducer,
  devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => d<AppDispatch>();
export const useSelector = <TSelected = unknown>(
  selector: (state: State) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean) => s<State, TSelected>(selector, equalityFn)

export default store;