import {configureStore} from '@reduxjs/toolkit';
import {MMKV} from 'react-native-mmkv';
import themeReducer from '../slice/themeSlice';

export const store = configureStore({
  reducer: {
    COLORS: themeReducer,
  },
});

export const localStorage = new MMKV();
