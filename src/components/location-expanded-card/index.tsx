import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import style from './style';
import {ILocationExpandedCard} from '@components/types';
export const LocationExpandedCard: React.FC<ILocationExpandedCard> = props => {
  const {fetchedLocationData} = props;
  if (!fetchedLocationData)
    return (
      <View style={style.expanded_container}>
        <ActivityIndicator color="#476072" />
      </View>
    );
  return (
    <View testID="LocationExpandedCard.View" style={style.expanded_container}>
      <Text style={style.expanded_text}>
        {'Name  '}
        <Text style={style.underlined_text}>{fetchedLocationData.name}</Text>
      </Text>
      <Text style={style.expanded_text}>
        {'Type  '}
        <Text style={style.underlined_text}>{fetchedLocationData.type}</Text>
      </Text>
      <Text style={style.expanded_text}>
        {'Dimension  '}
        <Text style={style.underlined_text}>
          {fetchedLocationData.dimension}
        </Text>
      </Text>
      <Text style={style.expanded_text}>
        {'Population  '}
        <Text style={style.underlined_text}>
          {fetchedLocationData.residents.length}
        </Text>
      </Text>
    </View>
  );
};
