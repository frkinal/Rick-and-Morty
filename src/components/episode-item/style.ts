import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#E4DCCF',
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  episode_container: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0EBE3',
    borderRadius: 14,
  },
  episode: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  content_container: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 50,
    height: 50,
  },
});
