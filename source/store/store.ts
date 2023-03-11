import {configureStore} from '@reduxjs/toolkit';
import {MMKV} from 'react-native-mmkv';
import themeReducer from '../slice/themeSlice';

const store = configureStore({
  reducer: {
    COLORS: themeReducer,
  },
});
export default store;

export const localStorage = new MMKV();
