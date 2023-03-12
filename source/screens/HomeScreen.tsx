import React from 'react';
import {Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PropsType} from '../interface/navigationType';
import {RootState} from '../interface/stateType';
import {toggleTheme} from '../slice/themeSlice';

export default function HomeScreen({navigation, route}: PropsType) {
  const {COLORS} = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Button onPress={() => navigation.navigate('PROFILE')} title="Profile" />
      {render()}
    </View>
  );
}

const render = () => {
  const {COLORS} = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  return (
    <View>
      <Button onPress={() => dispatch(toggleTheme())} title="Toggle" />
    </View>
  );
};
