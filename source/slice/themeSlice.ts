import {createSlice} from '@reduxjs/toolkit';
import {useColorScheme} from 'react-native';
import {baseColor, dark, light} from '../constants/colors';

const systemColor = useColorScheme();

const colors = systemColor === 'light' ? light : dark;
const initialState = {
  name: systemColor,
  COLORS: {
    ...colors,
    ...baseColor,
  },
};
const themSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleTheme: theme => {
      if (theme.name === 'light') {
        theme.name = 'dark';
        theme.COLORS = {...baseColor, ...dark};
      } else {
        theme.name = 'light';
        theme.COLORS = {...baseColor, ...light};
      }
    },
  },
});
const themeReducer = themSlice.reducer;
export default themeReducer;
export const {toggleTheme} = themSlice.actions;
