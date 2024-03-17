import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {ICharacterProps} from '@components/types';
import style from './style';
import {selectGenderSymbol, selectStatusColor} from '@utils';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavigationProp} from '@navigators/types';
export const CharacterItem: React.FC<ICharacterProps> = props => {
  const navigation = useNavigation<AppStackNavigationProp>();
  const {contents} = props;
  const navigateCharacterscreen = () =>
    navigation.navigate('CharacterScreen', {character: contents});
  return (
    <TouchableWithoutFeedback onPress={navigateCharacterscreen}>
      <View style={style.card}>
        <Image source={{uri: contents.image}} style={style.icon} />
        <View style={style.info_container}>
          <View style={style.info}>
            <Text numberOfLines={1} style={style.main_text}>
              {contents.name}
            </Text>
            <View style={style.info_row}>
              <Text
                numberOfLines={1}
                style={[style.sub_text, {textTransform: 'uppercase'}]}>
                {contents.species}
              </Text>
              <Text numberOfLines={1} style={style.sub_text}>
                {contents.type}
              </Text>
            </View>
            <View style={style.info_row}>
              <View style={style.status_container}>
                <View
                  style={[
                    style.indicator,
                    {
                      backgroundColor: selectStatusColor(contents.status),
                    },
                  ]}
                />
                <Text style={style.text}>{contents.status}</Text>
              </View>
              <View style={style.status_container}>
                <Text style={style.text}>
                  <Text style={style.indicator}>{`${selectGenderSymbol(
                    contents.gender,
                  )} `}</Text>
                  {contents.gender}
                </Text>
              </View>
            </View>
          </View>
          <View style={style.view_container}>
            <Text style={style.view_text}>→</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
