import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CheesyState} from 'TYPES/State';

const initialOptionsState: CheesyState = {
  menuIsOpened: false,
  modalIsOpened: false,
  lang: 'ru',
};

const CheesyStateSlice = createSlice({
  name: 'CheesyState-reducer',
  reducers: {
    setMenuOpened: (state: CheesyState, action: PayloadAction<boolean>) => {
      state.menuIsOpened = action.payload;
    },
    setModalOpened: (state: CheesyState, action: PayloadAction<boolean>) => {
      state.modalIsOpened = action.payload;
    },
    setLang: (state: CheesyState, action: PayloadAction<string>) => {
      state.lang = action.payload
    },
  },
  initialState: initialOptionsState
});

export const {setMenuOpened, setModalOpened, setLang} = CheesyStateSlice.actions;
export default CheesyStateSlice;
