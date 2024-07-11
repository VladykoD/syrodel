import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Lang, Notice, Options} from 'TYPES/State';
import {defaultLang} from 'COMMON/translations';

const meta: (HTMLMetaElement | null) = document.querySelector('meta[name=api]');
const api: string = meta ? meta.getAttribute('content')! : '';
const titleEl = document.querySelector('title');
const title: string = titleEl ? titleEl.innerText + ' | ' : '';

const initialOptionsState: Options = {
  domain: window.location.origin,
  api,
  lang: defaultLang,
  title,
  resolution: window.devicePixelRatio || 1,
  notices: [],
  nets: []
};

const optionsSlice = createSlice({
  name: 'options-reducer',
  reducers: {
    //TODO: remove notice;
    addNotice: (state: Options, action: PayloadAction<Notice>) => {
      state.notices.push({
        ...action.payload,
        id: 'notice-' + Math.random()
      })
    },
    removeNotice: (state: Options, action: PayloadAction<string>) => {
      state.notices = state.notices.filter((notice) => notice.id !== action.payload);
    },
    setLang: (state: Options, action: PayloadAction<Lang>) => {
      state.lang = action.payload;
    }
  },
  // async reducers
  extraReducers: (builder) => {
    // builder.addCase(getFiles.pending, (state, action) => {
    //   console.log('loading books');
    // })
    // builder.addCase(getFiles.fulfilled, (state: Options, action) => {
    //   state.books = action.payload;
    // })
    // builder.addCase(getFiles.rejected, (state: Options, action) => {
    //   console.log(action);
    // })
    // builder.addCase(getGuides.fulfilled, (state: Options, action) => {
    //   for (let key in action.payload) {
    //     action.payload[key].forEach(g => {
    //       g.id = g.id.toString();
    //       g.name = g.name.toString();
    //     })
    //   }
    //   state.guides = action.payload;
    // })
    // builder.addCase(getGuides.rejected, (state: Options, action) => {
    //   console.log(action);
    // })
  },
  initialState: initialOptionsState
});

export const {addNotice, removeNotice, setLang} = optionsSlice.actions;
export default optionsSlice;
