import {View} from 'react-native';
import React from 'react';
import {LocationRow, SectionHeader} from '@components';
import {IWhereSection} from '@components/types';

export const WhereSection: React.FC<IWhereSection> = props => {
  const {origin, location} = props;
  return (
    <View>
      <SectionHeader header="Where Abouts" />
      <LocationRow type={'Origin'} location={origin} />
      <LocationRow type={'Location'} location={location} />
    </View>
  );
};
