import {createSlice} from '@reduxjs/toolkit';
import {useColorScheme} from 'react-native';
import {baseColor, dark, light} from '../constants/colors';

const systemColor = useColorScheme();

const colors = systemColor === 'light' ? light : dark;
const initialState = {
  name: systemColor,
  ...baseColor,
  ...colors,
};
const themSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleTheme: state => {
      console.log(state);
    },
  },
});
const themeReducer = themSlice.reducer;
export default themeReducer;
export const {toggleTheme} = themSlice.actions;
