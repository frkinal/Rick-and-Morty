import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {CharacterItem, Theme} from '@components';
import {ICharacter} from '@components/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const FavoriteCharactersScreen = () => {
  const [data, setData] = useState<Array<ICharacter>>([]);
  const getFavoriteCharacters = async () => {
    const favorites = await AsyncStorage.getItem('@FAVORITES');
    if (favorites) {
      return JSON.parse(favorites);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const favoriteCharactersData = await getFavoriteCharacters();
      setData(favoriteCharactersData);
    };
    fetchData();
  }, [data]);
  const renderItem = ({item}: {item: ICharacter}) => {
    return <CharacterItem contents={item} />;
  };
  return (
    <Theme title="Favorite Characters" showArrow>
      <ScrollView centerContent showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString() + item.episode || ''}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={{height: 20}}>
                <Text>Characters ({data?.length})</Text>
              </View>
            }
            ListFooterComponent={<View style={{height: 100}} />}
          />
        </View>
      </ScrollView>
    </Theme>
  );
};
