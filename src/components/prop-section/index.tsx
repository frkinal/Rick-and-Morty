import React from 'react';
import {View} from 'react-native';
import {ICharacter, IPropSection} from '@components/types';
import {PropRow, SectionHeader} from '@components';
type CharacterTypes = keyof ICharacter;
export const PropSection: React.FC<IPropSection> = character => {
  const filter_props = ['gender', 'species', 'status', 'type'];
  const characteristics = (o =>
    o.filter(ch => character?.character[ch as CharacterTypes]))(filter_props);
  return (
    <View>
      <SectionHeader header="Character Properties" />
      {characteristics.map(ch => (
        <PropRow
          key={ch}
          type={ch}
          value={`${character?.character[ch as CharacterTypes]}`}
        />
      ))}
    </View>
  );
};
