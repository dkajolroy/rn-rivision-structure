import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../interface/navigationType';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default function MainNavigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PROFILE" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
