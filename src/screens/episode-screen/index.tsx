import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks';
import {getCharacter, getEpisode} from '@services';
import {FlatList, Text, View} from 'react-native';
import style from './style';
import {useRoute} from '@react-navigation/native';
import {AppStackRouteProps} from '@navigators/types';
import {ICharacter} from '@components/types';
import {CharacterItem, Theme} from '@components';
export const EpisodeScreen = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<AppStackRouteProps>();
  const {id} = route.params;
  const {episode} = useAppSelector(state => state.episode);
  const {character} = useAppSelector(state => state.character);
  useEffect(() => {
    dispatch(getEpisode({id}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchEpisodes = (urls: string[]) => {
    urls.forEach(async url => {
      await dispatch(getCharacter({url}));
    });
  };
  useEffect(() => {
    if (episode?.characters?.length > 0) {
      fetchEpisodes(episode?.characters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [episode?.characters]);
  const renderItem = ({item}: {item: ICharacter}) => {
    return <CharacterItem contents={item} />;
  };
  return (
    <Theme showArrow title="Episode Details">
      <View style={style.container}>
        <Text style={style.name}>
          {episode.episode}: {episode.name}
        </Text>
        <Text style={style.air_date}>Air Date: {episode.air_date}</Text>
        <FlatList
          data={character}
          keyExtractor={item => item.id.toString() + item.episode || ''}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={{height: 20}}>
              <Text>Characters</Text>
            </View>
          }
          ListFooterComponent={<View style={{height: 100}} />}
        />
      </View>
    </Theme>
  );
};
