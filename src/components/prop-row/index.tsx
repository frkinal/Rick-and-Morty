import {Pressable, Text, View} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {IPropRow} from '@components/types';
import style from './style';
export const PropRow: React.FC<IPropRow> = props => {
  const {type, value, expandable, ExpandedChild, onPress} = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const handlePress = () => {
    setIsExpanded(!isExpanded);
    if (onPress) onPress();
  };
  const rowWrapper = (children: ReactNode, ExpandedChild: React.ReactNode) =>
    expandable ? (
      <View>
        <Pressable onPress={handlePress}>{children}</Pressable>
        {isExpanded && <>{ExpandedChild}</>}
      </View>
    ) : (
      <View>{children}</View>
    );
  return rowWrapper(
    <View>
      <View style={style.container}>
        <Text style={style.type}>{`${type}`.toUpperCase()}</Text>
        <Text
          numberOfLines={2}
          style={[style.value, expandable && style.squareRight]}>
          {value}
        </Text>
        {expandable && (
          <Text
            testID="PropRow.ExpandButton"
            style={[style.value, style.expandableButton]}>
            {isExpanded ? '▲' : '▼'}
          </Text>
        )}
      </View>
    </View>,
    ExpandedChild,
  );
};
