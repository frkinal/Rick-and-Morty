import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CharacterScreen,
  EpisodeScreen,
  FavoriteCharactersScreen,
  HomeScreen,
} from '@screens';
import {AppStackParamList} from '@navigators/types';
const Stack = createNativeStackNavigator<AppStackParamList>();
export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="EpisodeScreen" component={EpisodeScreen} />
      <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
      <Stack.Screen
        name="FavoriteCharactersScreen"
        component={FavoriteCharactersScreen}
      />
    </Stack.Navigator>
  );
};
