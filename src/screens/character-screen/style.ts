import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    marginHorizontal: -12,
  },
  favorite_container: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  name: {
    color: 'black',
    fontSize: 28,
    width: '100%',
    padding: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    height: width / 2,
    width: width / 2,
    marginHorizontal: width / 4,
    marginTop: 10,
    marginBottom: -16,
    borderRadius: width / 2,
    borderWidth: 4,
    borderColor: '#476072',
  },
  statusContainer: {width: '100%', alignItems: 'center'},
  statusText: {
    textAlign: 'center',
    padding: 2,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
