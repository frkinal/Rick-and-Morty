import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
export default StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: width / 3.2,
    borderRadius: 14,
    backgroundColor: '#E4DCCF',
    marginVertical: 7,
    overflow: 'hidden',
    padding: 5,
  },
  icon: {
    height: '100%',
    width: width / 3.2 - 10,
    borderRadius: 14,
  },
  info_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  info_row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  status_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#5E6666',
    fontSize: 16,
    marginVertical: 5,
  },
  indicator: {
    height: 5,
    width: 5,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 5,
  },
  main_text: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  sub_text: {
    color: '#476072',
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  view_container: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  view_text: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
