import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IEpisodeItem} from '@components/types';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavigationProp} from '@navigators/types';
export const EpisodeItem: React.FC<IEpisodeItem> = props => {
  const {contents} = props;
  const navigation = useNavigation<AppStackNavigationProp>();
  const navigateEpisodeScren = () =>
    navigation.navigate('EpisodeScreen', {
      id: contents.id,
    });
  return (
    <TouchableOpacity style={style.container} onPress={navigateEpisodeScren}>
      <View style={style.episode_container}>
        <Text style={style.episode}>{contents.episode?.slice(0, 3)}</Text>
        <Text style={style.episode}>{contents.episode?.slice(3, 6)}</Text>
      </View>
      <View style={style.content_container}>
        <Text style={style.name}>{contents.name}</Text>
        <Text>{contents.air_date}</Text>
      </View>
    </TouchableOpacity>
  );
};
