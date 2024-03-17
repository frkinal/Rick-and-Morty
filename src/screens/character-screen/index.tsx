import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import style from './style';
import {selectStatusColor} from '@utils';
import {AppStackRouteProps} from '@navigators/types';
import {useRoute} from '@react-navigation/native';
import {PropSection, Theme, WhereSection} from '@components';
import {ICharacter} from '@components/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icons} from '@assets';
export const CharacterScreen = () => {
  const route = useRoute<AppStackRouteProps>();
  const {character} = route.params;
  const statusColor = selectStatusColor(character.status);
  const [isFavorite, setisFavorite] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('@FAVORITES').then(data => {
      if (data) {
        const favorites = JSON.parse(data);
        const isExist = favorites.find(
          (item: ICharacter) => item.id === character.id,
        );
        if (isExist) {
          setisFavorite(true);
        } else {
          setisFavorite(false);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);
  const addFavorite = () => {
    AsyncStorage.getItem('@FAVORITES').then(data => {
      const favorites = JSON.parse(data || '[]');
      const isExist = favorites.find(
        (item: ICharacter) => item.id === character.id,
      );
      if (isExist) {
        const newFavorites = favorites.filter(
          (item: ICharacter) => item.id !== character.id,
        );
        AsyncStorage.setItem('@FAVORITES', JSON.stringify(newFavorites));
        setisFavorite(false);
      }
      if (!isExist) {
        if (favorites?.length < 10) {
          const newFavorites = [...favorites, character];
          AsyncStorage.setItem('@FAVORITES', JSON.stringify(newFavorites));
          setisFavorite(true);
        } else {
          Alert.alert(
            'Limit reached',
            'You can only have 10 favorite characters',
          );
        }
      }
    });
  };
  return (
    <Theme showArrow title="Character Details">
      <ScrollView
        centerContent
        showsVerticalScrollIndicator={false}
        style={style.container}>
        <View>
          <TouchableWithoutFeedback onPress={addFavorite}>
            <View style={style.favorite_container}>
              <Image
                source={isFavorite ? Icons.Favorite : Icons.Unfavorite}
                style={style.icon}
              />
            </View>
          </TouchableWithoutFeedback>
          <View>
            <Image
              source={{uri: character.image}}
              style={[style.image, {borderColor: statusColor}]}
            />
            <View style={style.statusContainer}>
              <Text style={[style.statusText, {backgroundColor: statusColor}]}>
                {`${character.status}`.toUpperCase()}
              </Text>
            </View>
          </View>
          <Text numberOfLines={2} style={style.name}>
            {character.name}
          </Text>
          <PropSection character={character} />
          <WhereSection
            origin={character.origin}
            location={character.location}
          />
        </View>
      </ScrollView>
    </Theme>
  );
};
