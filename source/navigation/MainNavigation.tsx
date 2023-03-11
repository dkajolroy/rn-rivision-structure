import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../interface/navigationType';
import HomeScreen from '../screens/HomeScreen';

export default function MainNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOME" component={HomeScreen} />
    </Stack.Navigator>
  );
}
