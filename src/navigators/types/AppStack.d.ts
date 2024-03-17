import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ICharacter} from '@services/types';

export type AppStackParamList = {
  HomeScreen: undefined;
  EpisodeScreen: {
    id: number;
  };
  CharacterScreen: {
    character: ICharacter;
  };
  FavoriteCharactersScreen: undefined;
};
export type AppStackNavigationProp =
  NativeStackNavigationProp<AppStackParamList>;
export type AppStackRouteProps = RouteProp<AppStackParamList>;
