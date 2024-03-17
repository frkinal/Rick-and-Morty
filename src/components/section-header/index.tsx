import {Text, View} from 'react-native';
import React from 'react';
import style from './style';
import {ISectionHeader} from '@components/types';
export const SectionHeader: React.FC<ISectionHeader> = props => {
  const {header} = props;
  return (
    <View>
      <Text style={style.header}>
        <Text style={style.header_way}>{'─────     '}</Text>
        {`${header}`.toUpperCase()}
        <Text style={style.header_way}>{'     ─────'}</Text>
      </Text>
    </View>
  );
};
