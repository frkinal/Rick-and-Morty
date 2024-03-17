import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '10%',
    marginVertical: 5,
  },
  type: {
    color: '#476072',
    borderRadius: 7,
    backgroundColor: '#E4DCCF',
    fontSize: 13,
    paddingHorizontal: 10,
    marginRight: 5,
    paddingVertical: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    minWidth: '20%',
  },
  value: {
    color: '#476072',
    borderRadius: 7,
    backgroundColor: '#E4DCCF55',
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  squareRight: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  expandableButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    maxWidth: 30,
    padding: 0,
    textAlignVertical: 'center',
  },
});
