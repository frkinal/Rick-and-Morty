import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {ITheme} from '@components/types';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavigationProp} from '@navigators/types';
const {height} = Dimensions.get('screen');
export const Theme: React.FC<ITheme> = props => {
  const navigation = useNavigation<AppStackNavigationProp>();
  const {style, showArrow, title, favoriteScreen, children} = props;
  const goBack = () => navigation.goBack();
  const navigateToFavorite = () =>
    navigation.navigate('FavoriteCharactersScreen');
  return (
    <>
      <View style={styles.container}>
        {showArrow && (
          <View style={styles.go_back_container}>
            <Text style={styles.go_back_text} onPress={goBack}>
              ←
            </Text>
          </View>
        )}
        <View
          style={[
            styles.title_container,
            !showArrow && {width: '100%', alignItems: 'center'},
          ]}>
          <Text style={[styles.title, !showArrow && {paddingLeft: 0}]}>
            {title}
          </Text>
          {favoriteScreen && (
            <TouchableWithoutFeedback onPress={navigateToFavorite}>
              <View style={styles.favorite_screen}>
                <Text style={styles.favorite}>Favorite Characters</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
      <View style={[styles.default, style]}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F0EBE3',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favorite_screen: {
    position: 'absolute',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    right: 10,
    top: 20,
  },
  favorite: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
  },
  go_back_container: {
    width: '20%',
  },
  title_container: {
    width: '80%',
    alignSelf: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    paddingTop: 25,
    paddingLeft: '15%',
  },
  go_back_text: {
    color: 'black',
    fontSize: 45,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    paddingLeft: 5,
  },
  default: {
    padding: 20,
    minHeight: height,
    backgroundColor: '#F0EBE3',
  },
});
