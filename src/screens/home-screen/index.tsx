import React, {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks';
import {getEpisodes} from '@services';
import {ActivityIndicator, FlatList, View} from 'react-native';
import style from './style';
import {EpisodeItem, Theme} from '@components';
import {IEpisodeItemContent} from '@components/types';
export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {episodes, isLoading} = useAppSelector(state => state.episode);
  useEffect(() => {
    dispatch(getEpisodes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderItem = ({item}: {item: IEpisodeItemContent}) => {
    return <EpisodeItem contents={item} />;
  };
  const keyExtractor = useCallback(
    (item: IEpisodeItemContent) => `id-${item.id}`,
    [],
  );
  return (
    <Theme title="Episodes" favoriteScreen>
      <View style={style.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <FlatList
              data={episodes?.results}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<View style={{height: 100}} />}
            />
          </>
        )}
      </View>
    </Theme>
  );
};
